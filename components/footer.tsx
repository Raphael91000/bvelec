import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

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
              <span className="font-semibold text-xl tracking-tight">RUDY ELEC</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Électricité générale à Béziers et ses alentours. Installation, dépannage et mise aux normes électriques.
            </p>
            <div className="space-y-3">
              <a href="tel:+33618842344" className="flex items-center gap-2 text-sm hover:text-primary-foreground/80 transition-colors">
                <Phone className="w-4 h-4" />
                +33 6 18 84 23 44
              </a>
              <a href="mailto:contact@rudyelec.fr" className="flex items-center gap-2 text-sm hover:text-primary-foreground/80 transition-colors">
                <Mail className="w-4 h-4" />
                contact@rudyelec.fr
              </a>
              <a
                href="https://www.google.com/maps/place/RUDY+ELEC/@43.3783765,3.3369381,11z/data=!4m6!3m5!1s0x12b113fa2fa9d9d3:0x5f1bb7727d739fcd!8m2!3d43.3888562!4d3.437875!16s%2Fg%2F11hzpjq870?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>15 Rue Jacques Ferréol Mazas, 34500 Béziers</span>
              </a>
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
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mardi</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mercredi</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Jeudi</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Vendredi</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>07:00 - 18:00</span>
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
              © {new Date().getFullYear()} RUDY ELEC. Tous droits réservés.
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
