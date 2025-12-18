import { Link } from "react-router-dom";
import { TrendingUp, Upload, BarChart3, Shield, Target, Eye, Sparkles, ArrowRight, PieChart, LineChart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="home-page-animated">
      <section className="hero-section-animated">
        <div className="hero-content-centered">
          <div className="hero-badge-modern">
            <Sparkles size={16} />
            <span>Smart Portfolio Management</span>
          </div>

          <h1 className="hero-title-modern">
            Jouw portfolio,
            <br />
            <span className="gradient-text-modern">volledig onder controle</span>
          </h1>

          <p className="hero-subtitle-modern">
            Analyseer je beleggingen, track performance in real-time en krijg waardevolle inzichten
            om betere beslissingen te maken. Alles wat je nodig hebt op één plek.
          </p>

          <div className="hero-cta-modern">
            <Link to="/upload" className="btn-primary-modern">
              <span>Start nu</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/demo" className="btn-secondary-modern">
              <Eye size={20} />
              <span>Bekijk demo</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual-demo">
          <div className="demo-card demo-card-1">
            <div className="demo-chart">
              <div className="chart-bar" style={{height: '40%'}}></div>
              <div className="chart-bar" style={{height: '65%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '95%'}}></div>
            </div>
            <div className="demo-label">
              <TrendingUp size={16} className="text-success" />
              <span className="text-success font-bold">+24.5%</span>
            </div>
          </div>

          <div className="demo-card demo-card-2">
            <div className="demo-value">€ 45,250</div>
            <div className="demo-label-small">TOTALE WAARDE</div>
          </div>

          <div className="demo-card demo-card-3">
            <div className="demo-donut"></div>
            <div className="demo-label-small">PORTFOLIO MIX</div>
          </div>
        </div>
      </section>

      <section className="features-showcase">
        <div className="features-showcase-inner">
          <div className="showcase-header">
            <div className="showcase-badge">Investeer als een PRO</div>
            <h2 className="showcase-title">
              Unlock the Tools
              <br />
              <span className="showcase-title-highlight">Serious Investors Love</span>
            </h2>
          </div>

          <div className="features-layout">
          <div className="feature-box feature-box-large">
            <div className="feature-box-content">
              <h3>Deep Portfolio Insights</h3>
              <p>
                Transformeer data in beslissingen met Portfolio Insights. PRO gebruikers krijgen toegang tot
                krachtige modules die helderheid en vertrouwen geven aan je portfolio. Voor de volledige set
                van geavanceerde analytics modules, upgrade naar PRO+ en ontgrendel diepere inzichten.
              </p>
              <Link to="/demo" className="explore-link">
                Explore Insights <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-box-visual">
              <div className="visual-mockup">
                <LineChart size={48} className="mockup-icon" />
              </div>
            </div>
          </div>

          <div className="feature-box feature-box-medium">
            <div className="feature-box-content">
              <h3>Assets Tracked</h3>
              <p>
                Eén plek voor al je investeringen. Met PRO kun je tot 40 assets in één portfolio tracken.
                Upgrade naar PRO+ voor onbeperkte asset tracking.
              </p>
            </div>
            <div className="feature-box-visual-small">
              <BarChart3 size={32} className="feature-icon-inline" />
            </div>
          </div>

          <div className="feature-box feature-box-medium">
            <div className="feature-box-content">
              <h3>Asset Analytics</h3>
              <p>
                Blijf voor op de curve met Asset Analytics. Krijg heldere verklaringen voor marktbewegingen
                en zie insider trades, wat je de context geeft om vol vertrouwen te handelen.
              </p>
            </div>
            <div className="feature-box-visual-small">
              <PieChart size={32} className="feature-icon-inline" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
