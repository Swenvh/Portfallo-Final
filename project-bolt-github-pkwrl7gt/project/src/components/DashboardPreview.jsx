import { useState } from "react";
import { usePremium } from "../context/PremiumContext";
import PageContainer from "./PageContainer";
import PortfolioAllocationChart from "./PortfolioAllocationChart";
import PortfolioPerformanceChart from "./PortfolioPerformanceChart";
import StockLogo from "./StockLogo";
import { Wallet, TrendingUp, Banknote, Lock, Sparkles, Check, Clock } from "lucide-react";

const PREVIEW_DATA = {
  openPositions: [
    {
      symbol: "AAPL",
      asset: "Apple Inc.",
      quantity: 25,
      avgBuyPrice: 178.50,
      price: 189.25,
      marketValue: 4731.25,
      costBasis: 4462.50,
      profitLoss: 268.75,
      profitLossPct: 6.02,
      currency: "USD"
    },
    {
      symbol: "MSFT",
      asset: "Microsoft Corp.",
      quantity: 15,
      avgBuyPrice: 365.20,
      price: 378.90,
      marketValue: 5683.50,
      costBasis: 5478.00,
      profitLoss: 205.50,
      profitLossPct: 3.75,
      currency: "USD"
    },
    {
      symbol: "NVDA",
      asset: "NVIDIA Corp.",
      quantity: 10,
      avgBuyPrice: 485.30,
      price: 512.40,
      marketValue: 5124.00,
      costBasis: 4853.00,
      profitLoss: 271.00,
      profitLossPct: 5.58,
      currency: "USD"
    },
    {
      symbol: "ASML",
      asset: "ASML Holding",
      quantity: 8,
      avgBuyPrice: 685.00,
      price: 712.50,
      marketValue: 5700.00,
      costBasis: 5480.00,
      profitLoss: 220.00,
      profitLossPct: 4.01,
      currency: "EUR"
    }
  ],
  portfolioValue: 21238.75,
  totalCash: 5280.50,
  totalValue: 26519.25,
  unrealizedPL: 965.25,
  realizedPL: 1250.00,
  totalPL: 2215.25,
  transactions: [
    { date: "2024-01-15", type: "BUY", symbol: "AAPL", quantity: 10, price: 180.00 },
    { date: "2024-02-20", type: "BUY", symbol: "MSFT", quantity: 15, price: 365.20 },
    { date: "2024-03-10", type: "BUY", symbol: "NVDA", quantity: 10, price: 485.30 },
    { date: "2024-04-05", type: "BUY", symbol: "AAPL", quantity: 15, price: 177.50 }
  ]
};

export default function DashboardPreview() {
  const { setShowPaywall } = usePremium();
  const [showOverlay, setShowOverlay] = useState(true);

  const { openPositions, portfolioValue, totalCash, totalValue, totalPL, unrealizedPL, realizedPL, transactions } = PREVIEW_DATA;
  const plPercentage = (totalPL / portfolioValue) * 100;

  const handleUnlock = () => {
    setShowPaywall(true);
  };

  return (
    <PageContainer>
      <div className="dashboard-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2>Dashboard</h2>
          <p className="subtitle">Real-time overzicht van je beleggingen</p>
        </div>
      </div>

      <div className="preview-progress-card">
        <div className="progress-content">
          <div className="progress-icon">
            <Sparkles size={20} />
          </div>
          <div className="progress-text">
            <strong>Account setup: 80% complete</strong>
            <div className="progress-steps">
              <span className="step-complete"><Check size={14} /> Account created</span>
              <span className="step-complete"><Check size={14} /> Dashboard access</span>
              <span className="step-pending"><Clock size={14} /> Portfolio data (Pro)</span>
            </div>
          </div>
        </div>
        <button className="btn-primary-small" onClick={handleUnlock}>
          Complete Setup
        </button>
      </div>

      <div className="locked-preview-container">
        <div className="preview-blur-overlay">
          <div className="dashboard-summary">
            <div className="summary-card-v2 card-primary">
              <div className="card-icon blue-gradient">
                <Wallet size={24} />
              </div>
              <div className="card-content">
                <span className="card-label">Totale waarde</span>
                <strong className="card-value">€ {totalValue.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>
                <small className="card-meta">Inclusief cash</small>
              </div>
            </div>

            <div className="summary-card-v2">
              <div className="card-icon green-gradient">
                <TrendingUp size={24} />
              </div>
              <div className="card-content">
                <span className="card-label">Belegd vermogen</span>
                <strong className="card-value">€ {portfolioValue.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>
                <small className="card-meta">{openPositions.length} posities</small>
              </div>
            </div>

            <div className="summary-card-v2">
              <div className="card-icon orange-gradient">
                <Banknote size={24} />
              </div>
              <div className="card-content">
                <span className="card-label">Cash</span>
                <strong className="card-value">€ {totalCash.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>
                <small className="card-meta">
                  {((totalCash / totalValue) * 100).toFixed(1)}% allocatie
                </small>
              </div>
            </div>

            <div className="summary-card-v2 card-positive">
              <div className="card-icon success-gradient">
                <TrendingUp size={24} />
              </div>
              <div className="card-content">
                <span className="card-label">Totale P/L</span>
                <strong className="card-value positive">
                  +€ {totalPL.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </strong>
                <small className="card-meta">
                  +{plPercentage.toFixed(2)}% · €{unrealizedPL.toFixed(0)} ongereal. · €{realizedPL.toFixed(0)} real.
                </small>
              </div>
            </div>
          </div>

          <div className="dashboard-grid-2col">
            <div className="dashboard-card locked-element" onClick={handleUnlock} title="Available in Pro">
              <div className="lock-badge" title="Available in Pro">
                <Lock size={14} />
              </div>
              <div className="card-header-dash">
                <h3>Performance</h3>
                <span className="badge-info">Historisch</span>
              </div>
              <div className="card-body-dash">
                <PortfolioPerformanceChart
                  transactions={transactions}
                  portfolioValue={portfolioValue}
                />
              </div>
            </div>

            <div className="dashboard-card locked-element" onClick={handleUnlock} title="Available in Pro">
              <div className="lock-badge" title="Available in Pro">
                <Lock size={14} />
              </div>
              <div className="card-header-dash">
                <h3>Allocatie</h3>
                <span className="badge-info">{openPositions.length} posities</span>
              </div>
              <div className="card-body-dash">
                <PortfolioAllocationChart
                  positions={openPositions}
                  cash={totalCash}
                />
              </div>
            </div>
          </div>

          <div className="dashboard-card locked-element" onClick={handleUnlock} title="Available in Pro">
            <div className="lock-badge" title="Available in Pro">
              <Lock size={14} />
            </div>
            <div className="card-header-dash">
              <h3>Open posities</h3>
              <span className="badge-primary">{openPositions.length}</span>
            </div>

            <div className="table-container">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th className="right">Aantal</th>
                    <th className="right">Gem. koop</th>
                    <th className="right">Koers</th>
                    <th className="right">Waarde</th>
                    <th className="right">P/L</th>
                    <th className="right">P/L %</th>
                  </tr>
                </thead>

                <tbody>
                  {openPositions.map((p, i) => {
                    const currencySymbol = p.currency === 'USD' ? '$' : '€';
                    return (
                      <tr key={i}>
                        <td>
                          <div className="asset-cell">
                            <StockLogo symbol={p.symbol} size={32} />
                            <div className="asset-cell-content">
                              <strong>{p.symbol}</strong>
                              {p.currency === 'USD' && <span className="currency-badge">USD</span>}
                            </div>
                          </div>
                        </td>
                        <td className="right mono">{p.quantity.toLocaleString('nl-NL')}</td>
                        <td className="right mono">
                          {currencySymbol} {p.avgBuyPrice.toLocaleString('nl-NL', {minimumFractionDigits: 2})}
                        </td>
                        <td className="right mono text-muted">
                          {currencySymbol} {p.price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}
                        </td>
                        <td className="right mono font-semibold">
                          {currencySymbol} {p.marketValue.toLocaleString('nl-NL', {minimumFractionDigits: 2})}
                        </td>
                        <td className="right mono font-semibold text-success">
                          +{currencySymbol} {p.profitLoss.toLocaleString('nl-NL', {minimumFractionDigits: 2})}
                        </td>
                        <td className="right mono font-semibold text-success">
                          +{p.profitLossPct.toFixed(2)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {showOverlay && (
          <div className="unlock-overlay" onClick={handleUnlock}>
            <div className="unlock-card" onClick={(e) => e.stopPropagation()}>
              <div className="unlock-icon">
                <Lock size={32} />
              </div>
              <h3 className="unlock-title">Unlock your professional portfolio</h3>
              <ul className="unlock-features">
                <li><Check size={18} /> Real-time performance tracking</li>
                <li><Check size={18} /> Portfolio allocation insights</li>
                <li><Check size={18} /> Closed positions & analytics</li>
                <li><Check size={18} /> Unlimited positions & transactions</li>
                <li><Check size={18} /> AI-powered investment advice</li>
              </ul>
              <button className="btn-unlock" onClick={handleUnlock}>
                Start Pro Trial
              </button>
              <p className="unlock-subtitle">14 days free, then €9.99/month</p>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
