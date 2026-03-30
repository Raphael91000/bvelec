"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Notre approche", href: "#approche" },
  { name: "Réalisations", href: "#realisations" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-semibold text-xl tracking-tight text-foreground">BV ELEC 77</span>
        </Link>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+33625744730"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="w-4 h-4" />
            06 25 74 47 30
          </a>
          <Button asChild>
            <Link href="#contact">Devis gratuit</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+33625744730"
                className="flex items-center gap-2 text-base font-medium text-foreground"
              >
                <Phone className="w-5 h-5" />
                06 25 74 47 30
              </a>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Devis gratuit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
