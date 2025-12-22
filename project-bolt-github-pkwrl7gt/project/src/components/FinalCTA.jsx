import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-overlay" />
      <div className="final-cta-card">
        <h2 className="final-cta-headline">
          Grip op je vermogen.<br />Zonder ruis.
        </h2>

        <p className="final-cta-subtext">
          Professionele inzichten voor beleggers die hun portfolio serieus nemen.
        </p>

        <Link to="/pricing" className="final-cta-button">
          Ontgrendel Portfallo
        </Link>

        <p className="final-cta-microcopy">
          7 dagen gratis • Geen creditcard vereist
        </p>

        <p className="final-cta-social-proof">
          Vertrouwd door 10.000+ beleggers
        </p>
      </div>
    </section>
  );
}
