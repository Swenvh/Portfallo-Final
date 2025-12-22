// src/components/PaywallModal.jsx
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { usePremium } from "../context/PremiumContext";

const planContent = {
  Start: {
    title: "Ontgrendel Portfallo Start",
    subtitle: "Perfect om Portfallo te ontdekken en je portfolio overzichtelijk bij te houden.",
    emoji: "🚀",
    bgColor: "bg-slate-100",
    features: [
      "Portfolio overzicht (tot 5 posities)",
      "Basis performance tracking",
      "Handmatige transacties",
      "Beperkte analytics"
    ],
    cta: "Probeer Start (7 dagen gratis)",
    buttonColor: "bg-slate-600 hover:bg-slate-700"
  },
  Pro: {
    title: "Ontgrendel Portfallo Pro",
    subtitle: "Voor actieve beleggers die hun portfolio willen optimaliseren met inzichten en analytics.",
    emoji: "⭐",
    bgColor: "bg-blue-100",
    features: [
      "AI-gestuurde transactiesuggesties",
      "Realtime risico- & kostenalerts",
      "Diepe sector- & valuta-analyses",
      "Tot 40 posities",
      "Closed positions tracking"
    ],
    cta: "Start Pro (7 dagen gratis)",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  Premium: {
    title: "Ontgrendel Portfallo Premium",
    subtitle: "Maximale controle met geavanceerde analyses en AI-ondersteuning.",
    emoji: "👑",
    bgColor: "bg-amber-100",
    features: [
      "Alles uit Pro",
      "Onbeperkte posities",
      "Geavanceerde performance metrics",
      "Uitgebreide historische analyses",
      "AI-powered portfolio optimalisatie",
      "Prioriteit support"
    ],
    cta: "Start Premium (7 dagen gratis)",
    buttonColor: "bg-amber-600 hover:bg-amber-700"
  }
};

export default function PaywallModal({ plan = "Pro" }) {
  const premium = usePremium();

  if (!premium) return null;

  const {
    showPaywall,
    setShowPaywall,
    setIsPremium,
  } = premium;

  if (!showPaywall) return null;

  const close = () => setShowPaywall(false);

  const content = planContent[plan] || planContent.Pro;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") close();
    };

    if (showPaywall) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showPaywall]);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={close}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={close}
          aria-label="Sluiten"
        >
          <X size={22} />
        </button>

        <div className="text-center mb-6">
          <div className={`mx-auto ${content.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl`}>
            {content.emoji}
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{content.title}</h2>
          <p className="text-slate-600 mt-2 text-sm leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <ul className="text-sm text-slate-700 space-y-3 mb-6">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            className={`flex-1 ${content.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors`}
            onClick={() => {
              alert("Mock checkout");
              setIsPremium(true);
              close();
            }}
          >
            {content.cta}
          </button>

          <button
            className="flex-1 bg-gray-100 text-slate-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            onClick={close}
          >
            Sluiten
          </button>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          Volledige toegang · Geen creditcard vereist · Annuleer anytime
        </p>
      </div>
    </div>
  );
}
