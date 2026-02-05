import { Star } from "lucide-react";

const reasons = [
  {
    title: "Formez-vous à votre rythme",
    description: "Accédez aux modules en ligne quand vous voulez et avancez selon votre emploi du temps.",
  },
  {
    title: "Accompagnement et support",
    description: "Bénéficiez d’un support par email et de ressources pour avancer sereinement.",
  },
  {
    title: "Communauté et alumni",
    description: "Rejoignez une communauté de personnes qui construisent leurs projets avec l’IA.",
  },
  {
    title: "Certification",
    description: "Décrochez votre certificat de completion à l’issue de la formation.",
  },
];

export function WhyJoinSection() {
  return (
    <section className="bg-[#F9FAFB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827] sm:text-4xl">
          Pourquoi rejoindre AI BuildMaster ?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          Une formation concrète pour lancer votre carrière dans le développement SaaS avec l&apos;IA.
        </p>
        <ul className="mt-12 space-y-6">
          {reasons.map((item, i) => (
            <li key={i} className="flex gap-4 rounded-xl border border-[#E5E7EB] bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Star className="h-5 w-5 fill-primary" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827]">{item.title}</h3>
                <p className="mt-1 text-[15px] text-[#6B7280]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
