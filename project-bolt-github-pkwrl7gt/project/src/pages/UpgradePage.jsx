import React from "react";
import { usePremium } from "../context/PremiumContext";
import { Check, Zap, Crown, TrendingUp } from "lucide-react";

export default function UpgradePage() {
  const { setShowPaywall } = usePremium();

  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "altijd gratis",
      description: "Een eerste kennismaking met Portfallo",
      icon: TrendingUp,
      iconColor: "#64748b",
      features: [
        "Tot 5 posities",
        "Basis portfolio overzicht",
        "Beperkte performance data",
        "Geen closed positions inzichten",
        "Geen geavanceerde analytics",
        "Geen exports",
        "Geen risico-analyse"
      ],
      cta: "Huidige plan",
      ctaVariant: "outline",
      disabled: true
    },
    {
      name: "Pro",
      price: "€14,99",
      period: "per maand",
      description: "Voor beleggers die hun portfolio actief willen volgen",
      icon: Zap,
      iconColor: "#3b82f6",
      popular: true,
      features: [
        "Tot 40 posities",
        "Volledige performance tracking",
        "Allocation & basis analytics",
        "Closed positions tracking",
        "Rebalancing advies",
        "Risico-overzicht",
        "CSV export functionaliteit",
        "Dagelijkse portfolio updates",
        "Email ondersteuning"
      ],
      cta: "Kies Pro",
      ctaVariant: "primary",
      onClick: true
    },
    {
      name: "Premium",
      price: "€29,99",
      period: "per maand",
      description: "Voor beleggers die diepgaand inzicht en maximale controle willen",
      icon: Crown,
      iconColor: "#f59e0b",
      features: [
        "Alles van Pro",
        "Onbeperkt aantal posities",
        "Diepgaande analytics & trends",
        "Geavanceerde performance metrics",
        "Uitgebreide historische analyse",
        "AI-powered portfolio optimalisatie",
        "Advanced risk management tools",
        "Priority ondersteuning",
        "Exclusieve nieuwe features"
      ],
      cta: "Kies Premium",
      ctaVariant: "secondary",
      onClick: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professioneel portfolio management
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kies het plan dat past bij jouw ambitie. Van kennismaking tot professionele controle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
              >
                {plan.popular && (
                  <div className="pricing-badge">
                    Meest populair
                  </div>
                )}

                <div className="pricing-header">
                  <div
                    className="pricing-icon"
                    style={{ background: `linear-gradient(135deg, ${plan.iconColor}15, ${plan.iconColor}30)` }}
                  >
                    <IconComponent size={32} style={{ color: plan.iconColor }} />
                  </div>
                  <h3 className="pricing-title">{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>

                  <div className="pricing-price-section">
                    <div className="pricing-price">{plan.price}</div>
                    <div className="pricing-period">{plan.period}</div>
                  </div>
                </div>

                <div className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="pricing-feature">
                      <Check size={18} className="pricing-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-footer">
                  <button
                    className={`pricing-cta pricing-cta-${plan.ctaVariant} ${plan.disabled ? 'pricing-cta-disabled' : ''}`}
                    onClick={plan.onClick ? () => setShowPaywall(true) : undefined}
                    disabled={plan.disabled}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Heb je vragen over welk plan het beste bij je past?</p>
          <a href="mailto:support@portfallo.com" className="text-blue-600 hover:text-blue-700 font-semibold">
            Neem contact met ons op →
          </a>
        </div>
      </div>
    </div>
  );
}
