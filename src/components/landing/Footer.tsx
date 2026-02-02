import Link from "next/link";

const footerLinks = {
  produit: [
    { label: "Formation", href: "#formation" },
    { label: "Ressources", href: "#modules" },
    { label: "Communauté", href: "/community" },
  ],
  support: [
    { label: "Contact", href: "mailto:contact@aibuildmaster.com" },
    { label: "FAQ", href: "/faq" },
    { label: "Documentation", href: "/docs" },
  ],
  legal: [
    { label: "Confidentialité", href: "/privacy" },
    { label: "Conditions", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#2563EB] text-lg font-bold text-white">
                AI
              </div>
              <span className="font-semibold text-[#111827]">BuildMaster</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[#6B7280]">
              La formation complète pour créer des SaaS avec l&apos;IA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#111827]">Produit</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.produit.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#111827]">Support</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#111827]">Légal</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-[13px] text-[#9CA3AF]">
          © 2025 AI BuildMaster. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
