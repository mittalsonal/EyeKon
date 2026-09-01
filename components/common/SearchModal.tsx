"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Search, X } from "lucide-react";
import { allProducts } from "@/data/products";
import { normalizeQuery } from "@/lib/utils";

interface SearchContextValue {
  open: () => void;
  close: () => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalized = normalizeQuery(query);
    if (!normalized) {
      return allProducts.slice(0, 5);
    }

    return allProducts
      .filter((product) =>
        [product.name, product.category, product.shortDescription, product.code]
          .filter((value): value is string => Boolean(value))
          .some((value) => value.toLowerCase().includes(normalized)),
      )
      .slice(0, 8);
  }, [query]);

  return (
    <SearchContext.Provider
      value={{
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-deep-navy/55 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-[28px] border border-white/10 bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50 px-4 py-3">
              <Search className="h-5 w-5 text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product name, code or category"
                className="w-full bg-transparent text-sm text-deep-navy outline-none placeholder:text-muted"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted transition hover:bg-white"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 rounded-2xl border border-transparent px-3 py-3 transition hover:border-border hover:bg-slate-50"
                >
                  <div className="relative h-14 w-16 overflow-hidden rounded-xl bg-ice-blue">
                    <Image src={product.images[0]} alt={product.name} fill className="object-contain p-1" />
                  </div>
                  <div className="min-w-0 flex-1">
                    {product.code ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sapphire">
                        {product.code}
                      </p>
                    ) : null}
                    <p className="truncate font-semibold text-deep-navy">{product.name}</p>
                    <p className="truncate text-sm text-muted">{product.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </SearchContext.Provider>
  );
}

export function useSearchModal() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchModal must be used within SearchProvider");
  }

  return context;
}
