import { Link } from "react-router-dom";
import logo from "../assets/microvolt.png";

export function Header() {
  return (
    <header className="bg-micro-olive/95 text-white">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8" aria-hidden="true">
            <img
                    src={logo}
                    alt=""
                />
            </div>
        </Link>

        <nav className="flex items-center gap-6 text-xs opacity-90">
          <a className="hover:opacity-100" href="/sluzby">
            Služby
          </a>
          <Link className="hover:opacity-100" to="/sjednat">
            Sjednat zakázku
          </Link>
        </nav>
      </div>
    </header>
  );
}