import Link from "next/link"
import { Zap, Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Installation électrique", href: "#services" },
    { name: "Dépannage électrique", href: "#services" },
    { name: "Mise aux normes", href: "#services" },
    { name: "Rénovation électrique", href: "#services" },
  ],
  company: [
    { name: "Notre approche", href: "#approche" },
    { name: "Réalisations", href: "#realisations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-semibold text-xl tracking-tight">BV ELEC 77</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Électricien professionnel en Seine-et-Marne. Installation, dépannage et mise aux normes électriques.
            </p>
            <div className="space-y-3">
              <a href="tel:+33625744730" className="flex items-center gap-2 text-sm hover:text-primary-foreground/80 transition-colors">
                <Phone className="w-4 h-4" />
                06 25 74 47 30
              </a>
              <a href="mailto:contact@bvelec77.fr" className="flex items-center gap-2 text-sm hover:text-primary-foreground/80 transition-colors">
                <Mail className="w-4 h-4" />
                contact@bvelec77.fr
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>6 Rue du Gué, 77122 Monthyon</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Horaires
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex justify-between">
                <span>Lundi</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mardi</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mercredi</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Jeudi</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Vendredi</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span className="text-primary-foreground/50">Fermé</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-primary-foreground/50">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BV ELEC 77. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
