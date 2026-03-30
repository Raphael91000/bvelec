import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, CheckCircle, Phone, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ok.jpeg"
          alt="Électricien professionnel au travail"
          fill
          className="object-cover object-center scale-100"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 lg:gap-y-6 content-center min-h-[calc(100vh-5rem)] py-16 lg:py-24">

          {/* Row 1 left: badge + titre + description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Électricien en Seine-et-Marne (77)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Votre électricien
              <br />
              <span className="text-amber-400">de confiance</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Installation, dépannage et mise aux normes électriques.
              Un travail soigné, des conseils honnêtes, et un suivi dans la durée.
            </p>
          </div>

          {/* Row 1 right: zone d'intervention */}
          <div className="hidden lg:flex items-end">
            <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
              <p className="text-white font-semibold mb-2">Zone d&apos;intervention</p>
              <p className="text-white/70 text-sm">
                Monthyon, Meaux, Claye-Souilly, Dammartin, toute la Seine-et-Marne et l&apos;Île-de-France
              </p>
            </div>
          </div>

          {/* Row 2 left: boutons + badges */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base bg-amber-400 hover:bg-amber-500 text-black font-semibold h-14 px-8">
                <Link href="#contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white h-14 px-8">
                <a href="tel:+33625744730">
                  <Phone className="mr-2 h-5 w-5" />
                  06 25 74 47 30
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Réponse en 2h</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Garantie décennale</span>
              </div>
            </div>
          </div>

          {/* Row 2 right: +10 ans + avis côte à côte */}
          <div className="flex gap-4 lg:col-start-2">
            <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">+10 ans</p>
                  <p className="text-white/70 text-sm">{"d'expérience"}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white font-semibold">4.9/5 sur Google</p>
              <p className="text-white/60 text-sm">+50 avis clients</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
