import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PortfolioAllocationChart from "./PortfolioAllocationChart";
import PortfolioPerformanceChart from "./PortfolioPerformanceChart";
import StockLogo from "./StockLogo";
import { Lock, ArrowRight, LogIn } from "lucide-react";

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
  closedPositions: [
    {
      symbol: "TSLA",
      asset: "Tesla Inc.",
      quantity: 20,
      avgBuyPrice: 210.00,
      avgSellPrice: 245.00,
      realizedPL: 700.00,
      realizedPLPct: 16.67,
      currency: "USD"
    },
    {
      symbol: "GOOGL",
      asset: "Alphabet Inc.",
      quantity: 12,
      avgBuyPrice: 125.00,
      avgSellPrice: 135.50,
      realizedPL: 126.00,
      realizedPLPct: 8.40,
      currency: "USD"
    },
    {
      symbol: "AMZN",
      asset: "Amazon.com Inc.",
      quantity: 8,
      avgBuyPrice: 145.00,
      avgSellPrice: 155.20,
      realizedPL: 81.60,
      realizedPLPct: 7.03,
      currency: "USD"
    }
  ],
  portfolioValue: 21238.75,
  totalCash: 5280.50,
  transactions: [
    { date: "2024-01-15", type: "BUY", symbol: "AAPL", quantity: 10, price: 180.00 },
    { date: "2024-02-20", type: "BUY", symbol: "MSFT", quantity: 15, price: 365.20 },
    { date: "2024-03-10", type: "BUY", symbol: "NVDA", quantity: 10, price: 485.30 },
    { date: "2024-04-05", type: "BUY", symbol: "AAPL", quantity: 15, price: 177.50 }
  ]
};

export default function HomepageDashboardPreview() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showTooltip, setShowTooltip] = useState(null);

  const { openPositions, closedPositions, portfolioValue, totalCash, transactions } = PREVIEW_DATA;

  const handleUnlockClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="homepage-dashboard-preview">
      <div className="homepage-preview-container">
        <div className="preview-section-header">
          <div className="preview-badge">Product Preview</div>
          <h2 className="preview-section-title">
            See your portfolio clearly.
          </h2>
          <p className="preview-section-subtitle">
            Professional tracking built for serious investors.
          </p>
        </div>

        <div className="homepage-locked-preview">
          <div className="homepage-preview-blur">
            <div className="preview-dashboard-grid">
              <div className="preview-chart-card"
                   onMouseEnter={() => setShowTooltip('performance')}
                   onMouseLeave={() => setShowTooltip(null)}>
                <div className="preview-lock-badge">
                  <Lock size={16} />
                </div>
                {showTooltip === 'performance' && (
                  <div className="preview-tooltip">Sign up to unlock this feature</div>
                )}
                <div className="preview-card-header">
                  <h3>Performance</h3>
                  <span className="preview-badge-small">Historical</span>
                </div>
                <div className="preview-card-body">
                  <PortfolioPerformanceChart
                    transactions={transactions}
                    portfolioValue={portfolioValue}
                  />
                </div>
              </div>

              <div className="preview-chart-card"
                   onMouseEnter={() => setShowTooltip('allocation')}
                   onMouseLeave={() => setShowTooltip(null)}>
                <div className="preview-lock-badge">
                  <Lock size={16} />
                </div>
                {showTooltip === 'allocation' && (
                  <div className="preview-tooltip">Sign up to unlock this feature</div>
                )}
                <div className="preview-card-header">
                  <h3>Allocation</h3>
                  <span className="preview-badge-small">{openPositions.length} positions</span>
                </div>
                <div className="preview-card-body">
                  <PortfolioAllocationChart
                    positions={openPositions}
                    cash={totalCash}
                  />
                </div>
              </div>
            </div>

            <div className="preview-table-card"
                 onMouseEnter={() => setShowTooltip('positions')}
                 onMouseLeave={() => setShowTooltip(null)}>
              <div className="preview-lock-badge">
                <Lock size={16} />
              </div>
              {showTooltip === 'positions' && (
                <div className="preview-tooltip">Sign up to unlock this feature</div>
              )}
              <div className="preview-card-header">
                <h3>Closed Positions</h3>
                <span className="preview-badge-small">{closedPositions.length} positions</span>
              </div>
              <div className="preview-table-container">
                <table className="preview-table">
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th className="right">Quantity</th>
                      <th className="right">Avg Buy</th>
                      <th className="right">Avg Sell</th>
                      <th className="right">Realized P/L</th>
                      <th className="right">P/L %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {closedPositions.map((p, i) => {
                      const currencySymbol = p.currency === 'USD' ? '$' : '€';
                      return (
                        <tr key={i}>
                          <td>
                            <div className="preview-asset-cell">
                              <StockLogo symbol={p.symbol} size={28} />
                              <div className="preview-asset-info">
                                <strong>{p.symbol}</strong>
                                {p.currency === 'USD' && <span className="preview-currency-badge">USD</span>}
                              </div>
                            </div>
                          </td>
                          <td className="right">{p.quantity}</td>
                          <td className="right">{currencySymbol} {p.avgBuyPrice.toFixed(2)}</td>
                          <td className="right">{currencySymbol} {p.avgSellPrice.toFixed(2)}</td>
                          <td className="right preview-positive">
                            +{currencySymbol} {p.realizedPL.toFixed(2)}
                          </td>
                          <td className="right preview-positive">
                            +{p.realizedPLPct.toFixed(2)}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="homepage-preview-overlay" onClick={handleUnlockClick}>
            <div className="homepage-unlock-card" onClick={(e) => e.stopPropagation()}>
              <h3 className="homepage-unlock-title">See your portfolio clearly.</h3>
              <p className="homepage-unlock-subtitle">
                Professional tracking built for serious investors.
              </p>
              <div className="homepage-unlock-ctas">
                {!user ? (
                  <>
                    <Link to="/register" className="btn-homepage-primary" onClick={(e) => e.stopPropagation()}>
                      <span>Create free account</span>
                      <ArrowRight size={18} />
                    </Link>
                    <Link to="/login" className="btn-homepage-secondary" onClick={(e) => e.stopPropagation()}>
                      <LogIn size={18} />
                      <span>Log in</span>
                    </Link>
                  </>
                ) : (
                  <Link to="/dashboard" className="btn-homepage-primary" onClick={(e) => e.stopPropagation()}>
                    <span>Go to Dashboard</span>
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
              {!user && (
                <Link to="/transactions" className="homepage-upgrade-link" onClick={(e) => e.stopPropagation()}>
                  Upgrade to Pro
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
