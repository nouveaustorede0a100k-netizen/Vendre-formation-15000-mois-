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
    <footer className="border-t border-white/10 bg-primary-dark-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary text-lg font-bold text-white">
                AI
              </div>
              <span className="font-semibold text-white">BuildMaster</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/80">
              La formation complète pour créer des SaaS avec l&apos;IA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Produit</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.produit.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Légal</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-[13px] text-white/60">
          © 2025 AI BuildMaster. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
