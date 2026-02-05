import { Check } from "lucide-react";

const pills = [
  "À votre rythme",
  "Projets pratiques",
  "Certificat",
  "Support",
  "6 modules",
  "Accès à vie",
];

export function FeaturePills() {
  return (
    <section className="border-b border-[#E5E7EB] bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pills.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary-light/50 px-4 py-2 text-sm font-medium text-primary"
            >
              <Check className="h-4 w-4 shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
