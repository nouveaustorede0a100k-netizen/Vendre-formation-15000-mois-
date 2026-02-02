import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="max-w-2xl rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-[#374151]">
          À propos de la formation
        </h1>
        <p className="mt-4 text-[15px] text-[#374151]">
          Cette formation a été conçue pour vous permettre de maîtriser les
          outils d&apos;IA modernes pour le développement web.
        </p>
        <div className="mt-8">
          <h2 className="font-semibold text-[#374151]">Support</h2>
          <p className="mt-2 text-[15px] text-[#374151]">
            Si vous avez besoin d&apos;aide, contactez le support technique à :{" "}
            <Link
              href="mailto:support@formation-ia.com"
              className="text-[#2563EB] hover:underline"
            >
              support@formation-ia.com
            </Link>
          </p>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-[#374151]">Version</h2>
          <p className="mt-2 text-[15px] text-[#374151]">
            v1.0.4 - Session Janvier 2026
          </p>
        </div>
      </div>
    </div>
  );
}
