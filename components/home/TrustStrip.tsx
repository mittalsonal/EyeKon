import { Gauge, Shield, Stethoscope, Wrench } from "lucide-react";

const items = [
  { icon: Gauge, label: "Precision Engineering" },
  { icon: Shield, label: "Quality Equipment" },
  { icon: Stethoscope, label: "Professional Support" },
  { icon: Wrench, label: "Reliable Performance" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-shell grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-2xl px-3 py-2">
            <item.icon className="h-5 w-5 text-sapphire" />
            <p className="text-sm font-semibold text-deep-navy">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
