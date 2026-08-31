export function formatCategoryForUrl(category: string) {
  return encodeURIComponent(category);
}

export function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

export function parseCategoryHash(hash: string) {
  if (!hash) {
    return "All";
  }

  return decodeURIComponent(hash.replace(/^#/, "")) || "All";
}
