import { BookOpen, Calendar, Clock } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "30", label: "Points clés" },
  { icon: Calendar, value: "6", label: "Modules" },
  { icon: Clock, value: "100%", label: "Votre rythme" },
];

export function StatsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex w-full max-w-xs flex-col items-center rounded-xl border border-[#E5E7EB] bg-white p-6 text-center"
          >
            <stat.icon className="mb-3 h-8 w-8 text-primary" />
            <span className="text-3xl font-extrabold text-[#111827]">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-[#6B7280]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
