import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Process } from "@/components/process"
import { Reviews } from "@/components/reviews"
import { Realizations } from "@/components/realizations"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <Process />
      <Reviews />
      <Realizations />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
