"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Shield,
  Sparkles,
  Instagram,
  MessageCircle,
  Phone,
  ShoppingBasket,
  Languages,
  ArrowRight,
  Star,
  PackageOpen,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingKarbonProtektor() {
  const [lang, setLang] = useState<"hr" | "en">("hr");

  const t = {
    hr: {
      nav: {
        products: "Proizvodi",
        gallery: "Galerija",
        reviews: "Recenzije",
        faq: "FAQ",
        contact: "Kontakt",
      },
      hero: {
        badge: "Custom • Brzo • Profi",
        h1: "Karbonski i plastični kostobrani po mjeri",
        sub: "ProLine (karbon) i BasicLine (plastika) s dizajnom po želji. Zaštitne karbonske maske izrađene u 48 h.",
        ctas: {
          primary: "Naruči na WhatsApp",
          secondary: "Pogledaj proizvode",
        },
      },
      products: {
        title: "Proizvodi",
        pro: {
          name: "ProLine — Karbon",
          price: "140–160 €",
          points: [
            "Ultra lagani, premium karbon",
            "Izrađeni po mjeri potkoljenice",
            "Dizajn: ime, broj, grb po želji",
            "Koriste ih ozbiljni i profi igrači",
          ],
        },
        basic: {
          name: "BasicLine — Plastika",
          price: "30–50 €",
          points: [
            "Odličan omjer cijene i kvalitete",
            "Veličine: 8–18 cm, biraj visinu",
            "Personalizacija dizajna uključena",
            "Gratis štucne + torbica",
          ],
        },
        mask: {
          name: "Zaštitne karbonske maske",
          price: "Izrada po mjeri",
          points: [
            "Za ozljede lica (npr. jagodična kost)",
            "Uzorak/kalup u Zagrebu",
            "Izrada standardno u 48 h",
            "Premium estetika i udobnost",
          ],
        },
        note: "🇭🇷 Ručni rad • Made in Croatia • Worldwide shipping",
      },
      gallery: {
        title: "Galerija izrade i gotovih radova",
      },
      reviews: {
        title: "Recenzije igrača",
        items: [
          {
            name: "M. K.",
            text: "Stigli u roku, savršeno leže u štucni. Dizajn top!",
          },
          {
            name: "D. Š.",
            text: "Igrao sam protiv najjačih – osjećaj sigurnosti i nula žuljeva.",
          },
          {
            name: "A. L.",
            text: "Maska gotova za 48 h, vratio sam se na teren bez straha.",
          },
        ],
      },
      faq: {
        title: "Često postavljena pitanja",
        q1: {
          q: "Kako naručiti?",
          a: "Pošalji poruku na WhatsApp ili Instagram s željenim proizvodom, veličinom i idejom dizajna (slike, grb, broj). Potvrđujemo mockup i kreće izrada.",
        },
        q2: {
          q: "Koliko traje izrada?",
          a: "Plastika: 1–3 radna dana. Karbon: 3–7 dana. Maske: obično 48 h nakon uzimanja kalupa.",
        },
        q3: {
          q: "Mogu li preuzeti u Zagrebu?",
          a: "Da — moguće je osobno preuzimanje. Također dostavljamo poštom u Hrvatsku i inozemstvo.",
        },
      },
      contact: {
        title: "Kontakt i narudžbe",
        sub: "Javi se za besplatan prijedlog dizajna ili ponudu.",
        wa: "WhatsApp",
        ig: "Instagram",
        call: "Nazovi",
      },
      footer: {
        line:
          "© " +
          new Date().getFullYear() +
          " Karbon Protektor — Custom shin guards & masks",
      },
    },

    // English version (full)
    en: {
      nav: {
        products: "Products",
        gallery: "Gallery",
        reviews: "Reviews",
        faq: "FAQ",
        contact: "Contact",
      },
      hero: {
        badge: "Custom • Fast • Pro",
        h1: "Carbon & plastic shin guards, made to measure",
        sub: "ProLine (carbon) and BasicLine (plastic) with your design. Protective carbon face masks made in 48 h.",
        ctas: {
          primary: "Order via WhatsApp",
          secondary: "View products",
        },
      },
      products: {
        title: "Products",
        pro: {
          name: "ProLine — Carbon",
          price: "€1400000000–€160",
          points: [
            "Ultra-light premium carbon",
            "Custom-fit to your leg",
            "Design: name, number, club crest",
            "Trusted by serious & pro players",
          ],
        },
        basic: {
          name: "BasicLine — Plastic",
          price: "€30–€50",
          points: [
            "Great value for money",
            "Sizes: 8–18 cm, choose height",
            "Personalised design included",
            "Free socks + carry pouch",
          ],
        },
        mask: {
          name: "Protective carbon face masks",
          price: "Made to measure",
          points: [
            "For facial injuries (e.g. zygomatic)",
            "Impression/mould taken in Zagreb",
            "Typical turnaround 48 h",
            "Premium aesthetics & comfort",
          ],
        },
        note: "🇭🇷 Hand-made in Croatia • Worldwide shipping",
      },
      gallery: { title: "Workshop & finished builds" },
      reviews: {
        title: "Player feedback",
        items: [
          {
            name: "M. K.",
            text: "Arrived on time, perfect fit in the sock. Design is 🔥",
          },
          {
            name: "D. Š.",
            text: "Played at the top level – secure feel, zero chafing.",
          },
          {
            name: "A. L.",
            text: "Mask done in 48 h, got back on the pitch confidently.",
          },
        ],
      },
      faq: {
        title: "FAQ",
        q1: {
          q: "How to order?",
          a: "Send a WhatsApp or Instagram DM with product, size and design idea (images, crest, number). We confirm a mockup and start production.",
        },
        q2: {
          q: "Lead time?",
          a: "Plastic: 1–3 business days. Carbon: 3–7 days. Masks: usually 48 h after moulding.",
        },
        q3: {
          q: "Pickup in Zagreb?",
          a: "Yes — pickup available. We also ship across Croatia and worldwide.",
        },
      },
      contact: {
        title: "Contact & orders",
        sub: "Ping me for a free design proposal or quote.",
        wa: "WhatsApp",
        ig: "Instagram",
        call: "Call",
      },
      footer: {
        line:
          "© " +
          new Date().getFullYear() +
          " Karbon Protektor — Custom shin guards & masks",
      },
    },
  }[lang];

  const anchor = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const WHATSAPP_LINK = "https://wa.me/38598561362";
  const IG_LINK = "https://www.instagram.com/carbon_protector";
  const TEL_LINK = "tel:+38598531362";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* TOP NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <span className="font-semibold">Karbon Protektor</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-600/20 border border-emerald-600/40">
              {t.hero.badge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => anchor("products")} className="hover:text-white/90">
              {t.nav.products}
            </button>
            <button onClick={() => anchor("gallery")} className="hover:text-white/90">
              {t.nav.gallery}
            </button>
            <button onClick={() => anchor("reviews")} className="hover:text-white/90">
              {t.nav.reviews}
            </button>
            <button onClick={() => anchor("faq")} className="hover:text-white/90">
              {t.nav.faq}
            </button>
            <button onClick={() => anchor("contact")} className="hover:text-white/90">
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setLang(lang === "hr" ? "en" : "hr")} className="gap-2">
              <Languages className="w-4 h-4" /> {lang === "hr" ? "EN" : "HR"}
            </Button>
            <a href={WHATSAPP_LINK} target="_blank">
              <Button size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_10%-10%,rgba(16,185,129,.15),transparent_40%),radial-gradient(800px_circle_at_90%-20%,rgba(59,130,246,.12),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-6xl font-bold tracking-tight">
            {t.hero.h1}
          </motion.h1>
          <p className="mt-4 text-neutral-300 max-w-2xl">{t.hero.sub}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} target="_blank">
              <Button className="gap-2 text-base px-6 py-6">
                <ShoppingBasket className="w-5 h-5" /> {t.hero.ctas.primary}
              </Button>
            </a>
            <Button variant="secondary" className="gap-2 text-base px-6 py-6" onClick={() => anchor("products")}>
              <ArrowRight className="w-5 h-5" /> {t.hero.ctas.secondary}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> 1000+ igrača / players
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" /> 48 h maske
            </div>
            <div className="flex items-center gap-2">
              <PackageOpen className="w-4 h-4" /> Worldwide shipping
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">{t.products.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[{ key: "pro", ...t.products.pro }, { key: "basic", ...t.products.basic }, { key: "mask", ...t.products.mask }].map((p) => (
            <Card key={p.key} className="bg-neutral-900/60 border-neutral-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5" /> {p.name}
                  </span>
                  <span className="text-emerald-400 font-semibold">{p.price}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="text-sm text-neutral-300">
                <ul className="space-y-2">
                  {p.points.map((pt: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5" /> <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2">
                  <a href={WHATSAPP_LINK} target="_blank">
                    <Button size="sm" className="gap-2">
                      <ShoppingBasket className="w-4 h-4" /> {lang === "hr" ? "Naruči" : "Order"}
                    </Button>
                  </a>
                  <a href={IG_LINK} target="_blank">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Instagram className="w-4 h-4" /> Instagram
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-neutral-400 text-sm">{t.products.note}</p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">{t.gallery.title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <img src="/hero-kostobrani.jpg" alt={`Gallery ${i}`} className="w-full h-full object-cover opacity-90" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">{t.reviews.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.items.map((r, idx) => (
            <Card key={idx} className="bg-neutral-900/60 border-neutral-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" /> {r.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-300 text-sm">“{r.text}”</CardContent>
            </Card>
          ))}
        </div>
      </section>
<section className="max-w-6xl mx-auto px-4 py-20">
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-2xl md:text-4xl font-semibold">
      Instagram
    </h2>

    <a
      href="https://www.instagram.com/carbonprotector"
      target="_blank"
      rel="noreferrer"
      className="text-sm uppercase tracking-wider opacity-70 hover:opacity-100"
    >
      @carbonprotector →
    </a>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {["ig1.jpg","ig2.jpg","ig3.jpg","ig4.jpg","ig5.jpg","ig6.jpg"].map(
      (img) => (
        <a
          key={img}
          href="https://www.instagram.com/carbonprotector"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-xl"
        >
          <img
            src={`/instagram/${img}`}
            alt="Carbon Protector Instagram"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
        </a>
      )
    )}
  </div>
</section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">{t.faq.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[t.faq.q1, t.faq.q2, t.faq.q3].map((qa, i) => (
            <Card key={i} className="bg-neutral-900/60 border-neutral-800">
              <CardHeader>
                <CardTitle>{qa.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-300 text-sm">{qa.a}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">{t.contact.title}</h2>
            <p className="text-neutral-300 mb-6">{t.contact.sub}</p>

            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank">
                <Button className="gap-2">
                  <MessageCircle className="w-4 h-4" /> {t.contact.wa}
                </Button>
              </a>
              <a href={IG_LINK} target="_blank">
                <Button variant="secondary" className="gap-2">
                  <Instagram className="w-4 h-4" /> {t.contact.ig}
                </Button>
              </a>
              <a href={TEL_LINK}>
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" /> {t.contact.call}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>{t.footer.line}</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white/80" href={IG_LINK} target="_blank">
              Instagram
            </a>
            <a className="hover:text-white/80" href={WHATSAPP_LINK} target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
