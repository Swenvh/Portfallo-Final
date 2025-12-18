import React from "react";
import { usePremium } from "../context/PremiumContext";
import { Check, X, Zap, Crown, TrendingUp } from "lucide-react";

export default function TransactionsPage() {
  const { setShowPaywall } = usePremium();

  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "altijd gratis",
      description: "Ideaal om te beginnen met portfolio tracking",
      icon: TrendingUp,
      iconColor: "#64748b",
      cta: "Huidige plan",
      ctaVariant: "outline",
      disabled: true
    },
    {
      name: "Pro",
      price: "€9,99",
      period: "per maand",
      description: "Voor serieuze beleggers die hun portfolio optimaliseren",
      icon: Zap,
      iconColor: "#3b82f6",
      popular: true,
      cta: "Start gratis proefperiode",
      ctaVariant: "primary",
      onClick: true
    },
    {
      name: "Premium",
      price: "€29,99",
      period: "per maand",
      description: "Voor professionele beleggers en vermogensbeheerders",
      icon: Crown,
      iconColor: "#f59e0b",
      cta: "Contact opnemen",
      ctaVariant: "secondary",
      onClick: true
    }
  ];

  const features = [
    { category: "Core Tracking", name: "CSV Import", free: true, pro: true, premium: true },
    { category: "Core Tracking", name: "Position Tracking", free: true, pro: true, premium: true },
    { category: "Core Tracking", name: "Transaction History", free: true, pro: true, premium: true },
    { category: "Core Tracking", name: "Portfolio Value", free: true, pro: true, premium: true },
    { category: "Core Tracking", name: "Allocation Chart", free: true, pro: true, premium: true },

    { category: "Insights & Analytics", name: "Performance Metrics", free: false, pro: true, premium: true },
    { category: "Insights & Analytics", name: "Risk Analysis", free: false, pro: true, premium: true },
    { category: "Insights & Analytics", name: "Tax Analysis", free: false, pro: true, premium: true },
    { category: "Insights & Analytics", name: "Sector Breakdown", free: false, pro: true, premium: true },

    { category: "Limits & Scale", name: "Up to 10 Positions", free: true, pro: false, premium: false },
    { category: "Limits & Scale", name: "Unlimited Positions", free: false, pro: true, premium: true },
    { category: "Limits & Scale", name: "Multiple Portfolios", free: false, pro: false, premium: true },
    { category: "Limits & Scale", name: "Team Accounts", free: false, pro: false, premium: true },

    { category: "Automation & Intelligence", name: "Auto Rebalancing", free: false, pro: false, premium: true },
    { category: "Automation & Intelligence", name: "AI Portfolio Advice", free: false, pro: false, premium: true },
    { category: "Automation & Intelligence", name: "Smart Alerts", free: false, pro: false, premium: true },
    { category: "Automation & Intelligence", name: "Tax Loss Harvesting", free: false, pro: false, premium: true },

    { category: "Reporting & Export", name: "PDF Reports", free: false, pro: true, premium: true },
    { category: "Reporting & Export", name: "Excel Export", free: false, pro: false, premium: true },
    { category: "Reporting & Export", name: "Custom Reports", free: false, pro: false, premium: true },
    { category: "Reporting & Export", name: "API Access", free: false, pro: false, premium: true },

    { category: "Support & Control", name: "Email Support", free: false, pro: true, premium: true },
    { category: "Support & Control", name: "Priority Support", free: false, pro: false, premium: true },
    { category: "Support & Control", name: "Account Manager", free: false, pro: false, premium: true },
    { category: "Support & Control", name: "White-label Option", free: false, pro: false, premium: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Kies het juiste plan voor jou
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start gratis en upgrade wanneer je meer functionaliteit nodig hebt.
            Alle betaalde plannen hebben een 14 dagen gratis proefperiode.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-200 bg-slate-50">
            <div className="px-6 py-4 font-bold text-slate-900">Features</div>
            <div className="px-6 py-4 font-bold text-slate-900 text-center md:text-left">Free</div>
            <div className="px-6 py-4 font-bold text-slate-900 text-center md:text-left">Pro</div>
            <div className="px-6 py-4 font-bold text-slate-900 text-center md:text-left">Premium</div>
          </div>

          {features.map((feature, index) => {
            const showCategoryHeader = index === 0 || features[index - 1].category !== feature.category;

            return (
              <React.Fragment key={index}>
                {showCategoryHeader && (
                  <div className="grid grid-cols-1 md:grid-cols-4 bg-slate-100 border-b border-slate-200">
                    <div className="px-6 py-3 font-bold text-slate-900 text-sm uppercase tracking-wide col-span-4">
                      {feature.category}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="px-6 py-4 font-medium text-slate-700">
                    {feature.name}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {feature.free ? (
                      <Check size={20} className="text-blue-600" />
                    ) : (
                      <X size={20} className="text-slate-300" />
                    )}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {feature.pro ? (
                      <Check size={20} className="text-blue-600" />
                    ) : (
                      <X size={20} className="text-slate-300" />
                    )}
                  </div>

                  <div className="px-6 py-4 flex items-center justify-center md:justify-start">
                    {feature.premium ? (
                      <Check size={20} className="text-blue-600" />
                    ) : (
                      <X size={20} className="text-slate-300" />
                    )}
                  </div>
                </div>
              </React.Fragment>
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
