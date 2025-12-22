import React, { useState } from "react";
import { usePremium } from "../context/PremiumContext";
import { Check, X, Zap, Crown, TrendingUp } from "lucide-react";

export default function UpgradePage() {
  const { setShowPaywall } = usePremium();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Start",
      monthlyPrice: "€9,99",
      yearlyPrice: "€95,90",
      yearlyOriginalPrice: "€119,88",
      monthlyEquivalent: "€7,99",
      description: "Ideaal om Portfallo te ontdekken en je portfolio overzichtelijk bij te houden.",
      icon: TrendingUp,
      iconColor: "#64748b",
      cta: "Probeer Start – 7 dagen gratis",
      ctaVariant: "outline",
      disabled: false,
      onClick: true
    },
    {
      name: "Pro",
      monthlyPrice: "€19,99",
      yearlyPrice: "€191,90",
      yearlyOriginalPrice: "€239,88",
      monthlyEquivalent: "€15,99",
      description: "Voor actieve beleggers die hun portfolio willen optimaliseren met inzichten en analytics.",
      icon: Zap,
      iconColor: "#3b82f6",
      popular: true,
      cta: "Start Pro – 7 dagen gratis",
      ctaVariant: "primary",
      onClick: true
    },
    {
      name: "Premium",
      monthlyPrice: "€34,99",
      yearlyPrice: "€335,90",
      yearlyOriginalPrice: "€419,88",
      monthlyEquivalent: "€27,99",
      description: "Voor beleggers die maximale controle, geavanceerde analyses en AI-ondersteuning willen.",
      icon: Crown,
      iconColor: "#f59e0b",
      cta: "Start Premium – 7 dagen gratis",
      ctaVariant: "secondary",
      onClick: true
    }
  ];

  const featureCategories = [
    {
      category: "Basis",
      features: [
        { name: "Portfolio overzicht", free: "Beperkt", pro: true, premium: true },
        { name: "Performance tracking", free: "Beperkt", pro: true, premium: true },
        { name: "Aantal posities", free: "Tot 5", pro: "Tot 40", premium: "Onbeperkt" }
      ]
    },
    {
      category: "Analytics",
      features: [
        { name: "Allocation analytics", free: false, pro: true, premium: true },
        { name: "Closed positions tracking", free: false, pro: true, premium: true },
        { name: "Risico-analyse", free: false, pro: "Basis", premium: "Geavanceerd" },
        { name: "Rebalancing advies", free: false, pro: true, premium: true }
      ]
    },
    {
      category: "Geavanceerde Analytics",
      features: [
        { name: "Diepgaande analytics & trends", free: false, pro: false, premium: true },
        { name: "Geavanceerde performance metrics", free: false, pro: false, premium: true },
        { name: "Uitgebreide historische analyse", free: false, pro: false, premium: true },
        { name: "AI-powered portfolio optimalisatie", free: false, pro: false, premium: true },
        { name: "Advanced risk management tools", free: false, pro: false, premium: true }
      ]
    },
    {
      category: "Export & Updates",
      features: [
        { name: "CSV export", free: false, pro: true, premium: true },
        { name: "Dagelijkse portfolio updates", free: false, pro: true, premium: true }
      ]
    },
    {
      category: "Support",
      features: [
        { name: "Email ondersteuning", free: false, pro: true, premium: true },
        { name: "Priority ondersteuning", free: false, pro: false, premium: true },
        { name: "Exclusieve nieuwe features", free: false, pro: false, premium: true }
      ]
    }
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
          <Check size={16} className="text-blue-600" strokeWidth={3} />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
          <X size={16} className="text-slate-400" strokeWidth={2} />
        </div>
      );
    }
    return <span className="text-sm font-medium text-slate-700">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Kies het plan dat bij je past
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Alle plannen starten met een 7-daagse proefperiode met volledige toegang.<br />
            Geen creditcard nodig.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border-2 border-slate-200 mb-3">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                !isYearly
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                isYearly
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jaarlijks
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Bespaar 20%
              </span>
            </button>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Jaarlijks is het voordeligst
          </p>
        </div>

        <div className="mb-12 md:mb-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 p-7 flex flex-col relative transition-all ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl shadow-blue-100 scale-[1.02]'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    Meest populair
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${plan.iconColor}15, ${plan.iconColor}30)` }}
                >
                  <IconComponent size={26} style={{ color: plan.iconColor }} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[60px]">{plan.description}</p>

                <div className="mb-6">
                  {isYearly && (
                    <div className="text-lg text-slate-400 line-through mb-1">
                      {plan.yearlyOriginalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-slate-900">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {isYearly ? 'per jaar' : 'per maand'}
                  </div>
                  {isYearly && (
                    <div className="text-xs text-slate-400 mt-1">
                      ≈ {plan.monthlyEquivalent} per maand
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                      : plan.ctaVariant === 'secondary'
                      ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg'
                      : 'bg-slate-50 text-slate-700 border-2 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                  } ${plan.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={plan.onClick ? () => setShowPaywall(true) : undefined}
                  disabled={plan.disabled}
                >
                  {plan.cta}
                </button>
                <p className="text-xs text-slate-500 text-center mt-3">
                  Volledige toegang · geen creditcard
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative mb-8 md:mb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-2 text-sm font-semibold text-slate-600 tracking-wide">
              Vergelijk alle functies
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-5 bg-slate-50 border-b border-slate-200">
            <div className="font-semibold text-slate-600 text-sm uppercase tracking-wide">Functies</div>
            <div className="font-semibold text-slate-900 text-center">Start</div>
            <div className="font-semibold text-slate-900 text-center">Pro</div>
            <div className="font-semibold text-slate-900 text-center">Premium</div>
          </div>

          {featureCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="bg-gradient-to-r from-slate-50 to-slate-50/50 px-6 py-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900 text-base">{category.category}</h4>
              </div>

              {category.features.map((feature, featIndex) => (
                <div
                  key={featIndex}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="font-medium text-slate-700 text-sm md:text-base">
                    {feature.name}
                  </div>

                  <div className="flex items-center justify-start md:justify-center">
                    {renderFeatureValue(feature.free)}
                  </div>

                  <div className="flex items-center justify-start md:justify-center">
                    {renderFeatureValue(feature.pro)}
                  </div>

                  <div className="flex items-center justify-start md:justify-center">
                    {renderFeatureValue(feature.premium)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-slate-600 mb-3">Heb je vragen over welk plan het beste bij je past?</p>
          <a href="mailto:support@portfallo.com" className="text-blue-600 hover:text-blue-700 font-semibold text-base inline-flex items-center gap-1 transition-colors">
            Neem contact met ons op
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
