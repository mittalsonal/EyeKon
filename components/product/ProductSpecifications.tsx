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
          {specifications.map((specification, index) => (
            <tr key={specification.label} className="border-b border-border last:border-b-0">
              <th
                className={`w-[38%] px-5 py-4 align-top text-sm font-semibold text-deep-navy md:px-6 ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-[#f9fbfe]"
                }`}
              >
                {specification.label}
              </th>
              <td className="px-5 py-4 text-sm leading-7 break-words whitespace-normal text-muted md:px-6">
                {specification.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
