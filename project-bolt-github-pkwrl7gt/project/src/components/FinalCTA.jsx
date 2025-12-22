import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-headline">
            Grip op je vermogen,<br />zonder ruis.
          </h2>

          <p className="final-cta-subtext">
            Eén overzicht. Heldere inzichten.<br />
            Ontworpen voor beleggers die vooruit willen denken.
          </p>

          <div className="final-cta-button-wrapper">
            <Link to="/pricing" className="final-cta-button">
              Ontgrendel Portfallo
            </Link>
            <p className="final-cta-microcopy">
              7 dagen gratis • Geen creditcard vereist
            </p>
          </div>

          <p className="final-cta-social-proof">
            Vertrouwd door 10.000+ beleggers die hun portfolio serieus nemen
          </p>
        </div>

        <div className="final-cta-visual">
          <div className="final-cta-blur-1"></div>
          <div className="final-cta-blur-2"></div>
          <div className="final-cta-shape-1"></div>
          <div className="final-cta-shape-2"></div>
        </div>
      </div>
    </section>
  );
}
