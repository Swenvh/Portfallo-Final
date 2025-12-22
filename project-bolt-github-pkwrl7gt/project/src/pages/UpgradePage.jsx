import React from "react";
import { usePremium } from "../context/PremiumContext";
import { Check, X, Zap, Crown, TrendingUp } from "lucide-react";

export default function UpgradePage() {
  const { setShowPaywall } = usePremium();

  const plans = [
    {
      name: "Start",
      price: "€9,99",
      period: "per maand",
      description: "Ideaal om Portfallo te ontdekken en je portfolio overzichtelijk bij te houden.",
      icon: TrendingUp,
      iconColor: "#64748b",
      cta: "Start 7-daagse proefperiode",
      ctaVariant: "outline",
      disabled: false,
      onClick: true
    },
    {
      name: "Pro",
      price: "€19,99",
      period: "per maand",
      description: "Voor actieve beleggers die hun portfolio willen optimaliseren met inzichten en analytics.",
      icon: Zap,
      iconColor: "#3b82f6",
      popular: true,
      cta: "Start 7-daagse proefperiode",
      ctaVariant: "primary",
      onClick: true
    },
    {
      name: "Premium",
      price: "€34,99",
      period: "per maand",
      description: "Voor beleggers die maximale controle, geavanceerde analyses en AI-ondersteuning willen.",
      icon: Crown,
      iconColor: "#f59e0b",
      cta: "Start 7-daagse proefperiode",
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
      return <Check size={20} className="text-blue-600" />;
    }
    if (value === false) {
      return <X size={20} className="text-slate-300" />;
    }
    return <span className="text-sm text-slate-600">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professioneel portfolio management
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kies het plan dat past bij jouw beleggingsstijl.<br />
            Alle plannen starten met een 7-daagse proefperiode. Geen creditcard nodig.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="hidden md:block"></div>

          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg border-2 p-6 ${
                  plan.popular ? 'border-blue-500 shadow-lg' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-blue-600 mb-2">
                    Meest populair
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${plan.iconColor}15, ${plan.iconColor}30)` }}
                >
                  <IconComponent size={24} style={{ color: plan.iconColor }} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{plan.description}</p>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                  <div className="text-sm text-slate-600">{plan.period}</div>
                </div>

                <button
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : plan.ctaVariant === 'secondary'
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-400'
                  } ${plan.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={plan.onClick ? () => setShowPaywall(true) : undefined}
                  disabled={plan.disabled}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          {featureCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                <h4 className="font-semibold text-slate-900">{category.category}</h4>
              </div>

              {category.features.map((feature, featIndex) => (
                <div
                  key={featIndex}
                  className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <div className="px-6 py-4 font-medium text-slate-700">
                    {feature.name}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {renderFeatureValue(feature.free)}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {renderFeatureValue(feature.pro)}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {renderFeatureValue(feature.premium)}
                  </div>
                </div>
              ))}
            </div>
          ))}
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
