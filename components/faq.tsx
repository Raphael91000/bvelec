"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons principalement à Béziers et dans toute l'Île-de-France. Notre base est à Béziers, ce qui nous permet d'être réactifs sur l'ensemble de la région.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer les travaux à réaliser et vous remettons un devis détaillé. Vous êtes ensuite libre d'accepter ou non.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Pour les urgences (panne électrique, sécurité), nous intervenons dans les plus brefs délais, souvent le jour même. Pour les travaux planifiés, nous convenons ensemble d'une date qui vous convient, généralement sous 1 à 2 semaines.",
  },
  {
    question: "Êtes-vous assuré et qualifié ?",
    answer: "Oui, nous disposons d'une assurance responsabilité civile professionnelle et d'une garantie décennale. Nous sommes qualifiés pour tous types de travaux électriques et respectons les normes en vigueur (NF C 15-100).",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Nous acceptons les paiements par carte bancaire, chèque ou virement. Pour les travaux importants, nous pouvons étudier ensemble un échelonnement du paiement. N'hésitez pas à en discuter avec nous.",
  },
  {
    question: "Que comprend une mise aux normes électrique ?",
    answer: "Une mise aux normes comprend : le diagnostic de l'installation existante, la mise en conformité du tableau électrique, la vérification et le remplacement si nécessaire des prises et interrupteurs, la mise à la terre, et la délivrance d'une attestation de conformité (Consuel si nécessaire).",
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Nos horaires habituels sont du lundi au samedi de 07:00 à 18:00. Le dimanche, nous sommes fermés. Pour les urgences, contactez-nous afin de voir ce qui est possible.",
  },
  {
    question: "Comment se passe le suivi après les travaux ?",
    answer: "Nous restons disponibles après chaque intervention. En cas de problème lié à notre travail, nous revenons gratuitement. Nous vous fournissons également tous les documents nécessaires (facture détaillée, attestations, garanties).",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Les réponses aux questions que vous vous posez peut-être.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
