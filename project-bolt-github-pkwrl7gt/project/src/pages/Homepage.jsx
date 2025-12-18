import { Link } from "react-router-dom";
import { TrendingUp, Upload, BarChart3, Shield, Target, Eye, Sparkles, ArrowRight, PieChart, LineChart } from "lucide-react";
import HomepageDashboardPreview from "../components/HomepageDashboardPreview";

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
            Professioneel portfolio management voor serieuze beleggers.
            Track performance, analyseer risico's en krijg diepgaande inzichten om betere beslissingen te maken.
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
          <div className="demo-card demo-card-1" style={{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.16)', zIndex: 2}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Performance</div>
              <div style={{fontSize: '0.6875rem', color: '#94a3b8', fontWeight: 600}}>YTD</div>
            </div>
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

          <div className="demo-card demo-card-2" style={{boxShadow: '0 35px 90px rgba(0, 0, 0, 0.24)', zIndex: 3}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Total Value</div>
              <div style={{display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(135deg, #06b6d4, #10b981)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.025em'}}>PRO</div>
            </div>
            <div className="demo-value">€ 45,250</div>
            <div className="demo-label-small" style={{marginTop: '0.5rem'}}>24 POSITIONS</div>
          </div>

          <div className="demo-card demo-card-3" style={{boxShadow: '0 20px 50px rgba(0, 0, 0, 0.16)', zIndex: 2}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem'}}>
              <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Allocation</div>
              <div style={{fontSize: '0.6875rem', color: '#94a3b8', fontWeight: 600}}>Real-time</div>
            </div>
            <div className="demo-donut"></div>
            <div className="demo-label-small">5 SECTORS</div>
          </div>
        </div>
      </section>

      <section className="features-showcase">
        <div className="features-showcase-inner">
          <div className="showcase-header">
            <div className="showcase-badge">Voor serieuze beleggers</div>
            <h2 className="showcase-title">
              Professionele tools
              <br />
              <span className="showcase-title-highlight">die échte waarde leveren</span>
            </h2>
          </div>

          <div className="features-layout">
          <div className="feature-box feature-box-large">
            <div className="feature-box-content">
              <h3>Diepgaande Portfolio Analytics</h3>
              <p>
                Transformeer data in actie met geavanceerde analytics. PRO-gebruikers krijgen toegang tot
                performance tracking, risico-analyse en rebalancing advies. Voor volledige controle en
                uitgebreide historische analyse is Premium beschikbaar.
              </p>
              <Link to="/demo" className="explore-link">
                Bekijk mogelijkheden <ArrowRight size={16} />
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
              <h3>Schaalbare Asset Tracking</h3>
              <p>
                Van starter tot professionele portfolio's. Free-accounts zijn beperkt tot kennismaking.
                PRO biedt uitgebreide tracking, Premium verwijdert alle limieten.
              </p>
            </div>
            <div className="feature-box-visual-small">
              <BarChart3 size={32} className="feature-icon-inline" />
            </div>
          </div>

          <div className="feature-box feature-box-medium">
            <div className="feature-box-content">
              <h3>Geavanceerde Inzichten</h3>
              <p>
                Voor volledige inzichten is een upgrade vereist. PRO-gebruikers krijgen toegang tot
                performance metrics en risico-analyse. Premium biedt diepgaande trends en optimalisatie-tools.
              </p>
            </div>
            <div className="feature-box-visual-small">
              <PieChart size={32} className="feature-icon-inline" />
            </div>
          </div>
        </div>
        </div>
      </section>

      <HomepageDashboardPreview />
    </div>
  );
}
