import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ background: "#111827", padding: "12px" }}>
      <div className="nav-bar gap-2 flex">
        <Link to="/" className="btn btn-secondary">
          Accueil
        </Link>
        <Link to="/properties/create" className="btn btn-primary">
          Créer une annonce
        </Link>
      </div>
    </header>
  );
}
