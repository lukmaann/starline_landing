"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the warranty period for Starline batteries?",
    answer: "Warranty periods vary by product. Automotive batteries typically come with 36-72 months warranty, while Inverter batteries range from 24-60 months. Check the specific product manual for details.",
  },
  {
    question: "How do I claim warranty for my battery?",
    answer: "To claim warranty, visit your nearest Starline dealer with your original invoice and warranty card. Our dealer will inspect the battery and process the replacement if applicable.",
  },
  {
    question: "Are Starline batteries maintenance-free?",
    answer: "Most of our automotive and industrial batteries are 'Sealed Maintenance Free' (SMF), requiring no water topping. However, some tubular batteries for inverters may require occasional distilled water checks.",
  },
  {
    question: "Where are Starline batteries manufactured?",
    answer: "Our main manufacturing facility is located in Belagavi, Karnataka. It's a state-of-the-art plant with automated assembly lines and an ISO 9001:2015 certification.",
  },
  {
    question: "How can I become a dealer for Starline?",
    answer: "We are always looking for reliable partners. Please fill out the inquiry form in the Contact section or call our sales team to discuss dealership opportunities.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeader
          subtitle="Support"
          title="Frequently Asked Questions"
          description="Everything you need to know about Starline products, warranty, and services."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 mb-4">
                <AccordionTrigger className="text-white hover:text-primary font-bold text-left uppercase tracking-tight py-6 px-4 bg-zinc-900/50 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed px-4 pt-4 pb-6 bg-zinc-900/20">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
