import Image from "next/image"

const approaches = [
  {
    number: "1",
    title: "Le bon diagnostic",
    description: "On analyse votre situation avant de vous proposer quoi que ce soit. Pas de remplacement inutile, pas de travaux superflus. On vous dit ce qui est vraiment nécessaire.",
  },
  {
    number: "2",
    title: "Un travail soigné",
    description: "On protège vos sols, on range nos outils, on nettoie après notre passage. Vous retrouvez votre logement comme on l'a trouvé — avec une installation électrique en mieux.",
  },
  {
    number: "3",
    title: "Un suivi dans la durée",
    description: "On reste disponibles après l'intervention. Si un problème survient, on revient. Votre satisfaction est notre priorité, pas seulement au moment de la facture.",
  },
]

export function Approach() {
  return (
    <section id="approche" className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/renovation-work.jpg"
                alt="Électricien RUDY ELEC au travail"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 rounded-3xl -z-10" />
            {/* Stats card */}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl p-5 shadow-xl border border-border">
              <p className="text-3xl font-bold text-foreground">+500</p>
              <p className="text-muted-foreground text-sm">Chantiers réalisés</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">
              Notre approche
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ce qui nous différencie
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Pas de commercial, pas de sous-traitance. C&apos;est nous qui venons, nous qui travaillons, et nous qui assumons.
            </p>

            <div className="space-y-8">
              {approaches.map((approach) => (
                <div key={approach.number} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">{approach.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
