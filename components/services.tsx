import Image from "next/image"
import { Plug, Home, Building2, AlertTriangle, Lightbulb, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Plug,
    title: "Installation électrique",
    description: "Installation complète pour vos projets de construction ou de rénovation. Tableau électrique, prises, interrupteurs, éclairage.",
  },
  {
    icon: AlertTriangle,
    title: "Dépannage électrique",
    description: "Intervention rapide pour tous vos problèmes électriques : panne de courant, court-circuit, disjoncteur qui saute.",
  },
  {
    icon: Shield,
    title: "Mise aux normes",
    description: "Mise en conformité de votre installation électrique selon les normes NF C 15-100. Diagnostic et attestation de conformité.",
  },
  {
    icon: Home,
    title: "Rénovation électrique",
    description: "Modernisation de votre installation existante. Remplacement de tableau, ajout de circuits, mise à la terre.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage",
    description: "Installation et conseil en éclairage intérieur et extérieur. LED, spots, luminaires, éclairage de jardin.",
  },
  {
    icon: Building2,
    title: "Locaux professionnels",
    description: "Installation et maintenance électrique pour commerces, bureaux et locaux professionnels.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">
              Nos services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Électricité générale en Seine-et-Marne et Île-de-France
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              De l&apos;installation au dépannage, nous intervenons sur tous vos projets électriques 
              avec le même soin et la même rigueur.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/electrical-panel.jpg"
                alt="Installation électrique professionnelle"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-amber-400/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors">
                <service.icon className="w-7 h-7 text-amber-600 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Zone intervention */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground">
            <span className="font-bold">Zone d&apos;intervention :</span>{" "}
            <span className="text-muted-foreground">Monthyon, Meaux, Claye-Souilly, Dammartin-en-Goële, et toute la Seine-et-Marne (77)</span>
          </p>
        </div>
      </div>
    </section>
  )
}
