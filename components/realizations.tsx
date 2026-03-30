"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = ["Tous", "Résidentiel", "Professionnel", "Rénovation"]

const realizations = [
  {
    title: "Rénovation complète maison",
    category: "Résidentiel",
    location: "Monthyon",
    description: "Mise aux normes et rénovation complète de l'installation électrique d'une maison de 150m².",
    image: "/images/renovation-work.jpg",
  },
  {
    title: "Installation tableau triphasé",
    category: "Professionnel",
    location: "Meaux",
    description: "Installation d'un tableau électrique triphasé pour un atelier de menuiserie.",
    image: "/images/electrical-panel.jpg",
  },
  {
    title: "Éclairage LED commerce",
    category: "Professionnel",
    location: "Claye-Souilly",
    description: "Remplacement de l'éclairage fluorescent par des LED pour un commerce de 200m².",
    image: "/images/commercial-electrical.jpg",
  },
  {
    title: "Extension électrique",
    category: "Rénovation",
    location: "Dammartin-en-Goële",
    description: "Extension de l'installation électrique pour un agrandissement de maison.",
    image: "/images/home-lighting.jpg",
  },
  {
    title: "Mise en sécurité appartement",
    category: "Résidentiel",
    location: "Meaux",
    description: "Diagnostic et mise en sécurité de l'installation électrique d'un appartement ancien.",
    image: "/images/hero-electrician.jpg",
  },
  {
    title: "Éclairage extérieur",
    category: "Rénovation",
    location: "Monthyon",
    description: "Installation d'éclairage extérieur et de jardin pour une propriété résidentielle.",
    image: "/images/outdoor-lighting.jpg",
  },
]

export function Realizations() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredRealizations = activeCategory === "Tous"
    ? realizations
    : realizations.filter(r => r.category === activeCategory)

  return (
    <section id="realisations" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Nos réalisations
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez quelques-uns de nos chantiers récents en Seine-et-Marne.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRealizations.map((realization, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-amber-400/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={realization.image}
                  alt={realization.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded-full">
                    {realization.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-semibold text-white text-lg">
                    {realization.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {realization.location}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {realization.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-amber-600 transition-colors">
                  Voir le détail
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
