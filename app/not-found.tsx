import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="max-w-xl rounded-[32px] border border-border bg-white p-10 text-center shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sapphire">404</p>
        <h1 className="mt-4 text-4xl font-bold text-deep-navy">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for is unavailable. You can continue exploring EYEKON products from the main catalogue.
        </p>
        <Link href="/products" className="mt-6 inline-flex rounded-full bg-deep-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-sapphire">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
