import React, { createContext, useContext, useState } from "react";

const PremiumContext = createContext();

export function PremiumProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <PremiumContext.Provider value={{
      isPremium,
      setIsPremium,
      showPaywall,
      setShowPaywall,
      selectedPlan,
      setSelectedPlan
    }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
