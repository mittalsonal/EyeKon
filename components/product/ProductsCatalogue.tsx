"use client";

import { useEffect, useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { allProducts, productCategories } from "@/data/products";
import { normalizeQuery, parseCategoryHash } from "@/lib/utils";

type SortMode = "featured" | "name-asc" | "name-desc";

export function ProductsCatalogue({
  initialCategory,
  initialQuery,
}: {
  initialCategory?: string;
  initialQuery?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
  const [search, setSearch] = useState(initialQuery || "");
  const [sort, setSort] = useState<SortMode>("featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const syncCategoryFromHash = () => {
      setSelectedCategory(parseCategoryHash(window.location.hash));
    };

    queueMicrotask(syncCategoryFromHash);
    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeQuery(search);

    let products = allProducts.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        [product.name, product.category, product.shortDescription, product.code]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });

    if (sort === "featured") {
      products = [...products].sort((a, b) => Number(b.featured) - Number(a.featured));
    } else if (sort === "name-asc") {
      products = [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      products = [...products].sort((a, b) => b.name.localeCompare(a.name));
    }

    return products;
  }, [search, selectedCategory, sort]);

  const filterPanel = (
    <aside className="rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sapphire">Filters</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-deep-navy">Categories</p>
        <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              selectedCategory === "All" ? "bg-deep-navy text-white" : "bg-slate-100 text-deep-navy"
            }`}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category ? "bg-deep-navy text-white" : "bg-slate-100 text-deep-navy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[290px_1fr]">
      <div className="hidden lg:block">{filterPanel}</div>
      <div>
        <div className="rounded-[28px] border border-border bg-white p-5 shadow-[var(--shadow-card)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-deep-navy md:text-4xl">Our Products</h1>
              <p className="mt-2 text-sm text-muted">Showing {filteredProducts.length} products</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex min-w-0 items-center gap-3 rounded-full border border-border bg-slate-50 px-4 py-3 sm:min-w-[280px]">
                <Search className="h-4 w-4 text-muted" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products"
                  className="w-full bg-transparent text-sm text-deep-navy outline-none placeholder:text-muted"
                />
              </label>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortMode)}
                className="rounded-full border border-border bg-white px-4 py-3 text-sm text-deep-navy outline-none"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
              </select>
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-3 text-sm font-semibold text-deep-navy lg:hidden"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {showFilters ? (
        <div className="fixed inset-0 z-50 flex items-end bg-deep-navy/50 p-4 lg:hidden">
          <div className="w-full rounded-[28px] bg-white p-4 shadow-[var(--shadow-soft)]">
            {filterPanel}
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="mt-4 w-full rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
