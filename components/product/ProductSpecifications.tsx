import type { ProductSpecification } from "@/data/products";

export function ProductSpecifications({
  specifications,
}: {
  specifications: ProductSpecification[];
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)]">
      <table className="w-full border-collapse text-left">
        <tbody>
          {specifications.map((specification) => (
            <tr key={specification.label} className="border-b border-border last:border-b-0">
              <th className="w-[38%] bg-slate-50 px-5 py-4 text-sm font-semibold text-deep-navy md:px-6">
                {specification.label}
              </th>
              <td className="px-5 py-4 text-sm leading-7 text-muted md:px-6">{specification.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
