"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { allProducts } from "@/data/products";

interface EnquiryItem {
  productId: number;
  quantity: number;
}

interface EnquiryContextValue {
  items: EnquiryItem[];
  hydrated: boolean;
  addItem: (productId: number, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearEnquiry: () => void;
  isInEnquiry: (productId: number) => boolean;
  totalItems: number;
}

const STORAGE_KEY = "eyekon-enquiry";
const EnquiryContext = createContext<EnquiryContextValue | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as EnquiryItem[];
          setItems(parsed.filter((item) => allProducts.some((product) => product.id === item.productId)));
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setHydrated(true);
      }
    });
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [hydrated, items]);

  const value = useMemo<EnquiryContextValue>(
    () => ({
      items,
      hydrated,
      addItem(productId, quantity = 1) {
        setItems((current) => {
          const existing = current.find((item) => item.productId === productId);
          if (existing) {
            return current.map((item) =>
              item.productId === productId
                ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
                : item,
            );
          }

          return [...current, { productId, quantity }];
        });
      },
      removeItem(productId) {
        setItems((current) => current.filter((item) => item.productId !== productId));
      },
      updateQuantity(productId, quantity) {
        if (quantity <= 0) {
          setItems((current) => current.filter((item) => item.productId !== productId));
          return;
        }

        setItems((current) =>
          current.map((item) =>
            item.productId === productId ? { ...item, quantity: Math.min(quantity, 99) } : item,
          ),
        );
      },
      clearEnquiry() {
        setItems([]);
      },
      isInEnquiry(productId) {
        return items.some((item) => item.productId === productId);
      },
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    [hydrated, items],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }

  return context;
}
