import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Marie L.",
    location: "Monthyon",
    rating: 5,
    text: "Très professionnel et réactif. Le devis était clair et le travail a été fait proprement. Je recommande sans hésiter.",
    service: "Mise aux normes tableau électrique",
  },
  {
    name: "Pierre D.",
    location: "Meaux",
    rating: 5,
    text: "Intervention rapide pour une panne de courant un samedi. Prix correct et explications claires sur le problème. Merci !",
    service: "Dépannage électrique",
  },
  {
    name: "Sophie M.",
    location: "Claye-Souilly",
    rating: 5,
    text: "Rénovation électrique complète de notre maison. Travail soigné, équipe ponctuelle et respectueuse. Le chantier était propre chaque soir.",
    service: "Rénovation électrique",
  },
  {
    name: "Jean-Marc B.",
    location: "Dammartin-en-Goële",
    rating: 5,
    text: "Installation de spots LED dans toute la maison. Conseils avisés sur le choix de l'éclairage. Résultat impeccable.",
    service: "Installation éclairage",
  },
]

export function Reviews() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfaction de nos clients est notre meilleure carte de visite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-muted-foreground/30" />
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                {`"${review.text}"`}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4.9/5 basé sur les avis Google
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
