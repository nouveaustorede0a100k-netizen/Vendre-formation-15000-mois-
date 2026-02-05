import { Check } from "lucide-react";

const audiences = [
  {
    title: "Vous êtes en reconversion professionnelle :",
    description:
      "Apprenez des compétences concrètes pour lancer un nouveau chapitre dans le web et la tech. Nos parcours sont accessibles à tous, avec ou sans bagage technique.",
  },
  {
    title: "Vous êtes salarié et vous souhaitez évoluer :",
    description:
      "Automatisez vos tâches, formez-vous à l'IA, gagnez en efficacité et positionnez-vous comme moteur de la transformation digitale dans votre entreprise.",
  },
  {
    title: "Vous êtes freelance ou en passe de le devenir :",
    description:
      "Offrez plus de valeur à vos clients en créant des outils puissants et personnalisés. Devenez autonome dans la création de solutions digitales professionnelles.",
  },
  {
    title: "Vous êtes entrepreneur ou porteur de projet :",
    description:
      "Structurez votre activité, gagnez du temps et lancez vos applications et services innovants sans dépendre d'une équipe technique.",
  },
];

export function WhoIsItForSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827] sm:text-4xl">
          La formation idéale pour vous
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          Quel que soit votre profil, la formation vous donne les clés pour construire des SaaS avec l&apos;IA.
        </p>
        <ul className="mt-12 space-y-8">
          {audiences.map((item, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827]">{item.title}</h3>
                <p className="mt-2 text-[15px] text-[#6B7280]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
