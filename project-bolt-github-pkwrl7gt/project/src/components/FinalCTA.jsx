import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <div className="final-cta-card">
      <h2 className="final-cta-headline">
        Grip op je vermogen,<br />zonder ruis.
      </h2>

      <p className="final-cta-subtext">
        Eén overzicht. Heldere inzichten.<br />
        Ontworpen voor beleggers die vooruit willen denken.
      </p>

      <Link to="/pricing" className="final-cta-button">
        Ontgrendel Portfallo
      </Link>

      <p className="final-cta-trust">
        Vertrouwd door 10.000+ beleggers die hun portfolio serieus nemen.
      </p>

      <p className="final-cta-microcopy">
        Start via onze prijsplannen
      </p>
    </div>
  );
}
