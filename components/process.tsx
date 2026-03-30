import { Phone, MapPin, FileCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Premier contact",
    description: "Vous nous appelez ou remplissez le formulaire. On écoute votre problème, on vous pose les bonnes questions et on vous dit clairement ce qu'on peut faire.",
    badge: "Réponse en moins de 2h en semaine",
  },
  {
    number: "02",
    icon: MapPin,
    title: "On vient vous voir",
    description: "On se déplace chez vous pour voir la situation de vos propres yeux. Pas de diagnostic par téléphone, pas de devis au hasard. On évalue sur place.",
    badge: "Déplacement gratuit sur devis",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "La bonne solution",
    description: "On vous explique ce qu'on va faire, pourquoi, et combien ça coûte. Pas de jargon, pas de surprises. Vous validez, on intervient.",
    badge: "Devis clair et sans engagement",
  },
]

export function Process() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
            Notre méthode
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Concrètement, comment ça se passe ?
          </h2>
          <p className="text-lg text-background/70">
            Simple, transparent, efficace. Voici comment nous travaillons.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 z-10 w-8 lg:w-10 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-amber-400" />
                </div>
              )}
              
              <div className="h-full bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-8 hover:bg-background/10 transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-6xl font-bold text-amber-400/30">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-black" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-background/70 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/20 text-amber-400 text-sm font-semibold">
                  {step.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
