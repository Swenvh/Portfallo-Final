import { NavLink, Link } from "react-router-dom";
import { usePremium } from "../context/PremiumContext";
import { useAuth } from "../context/AuthContext";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
  const { setShowPaywall, setSelectedPlan } = usePremium();
  const { user, signOut } = useAuth();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-slate-900 font-medium"
      : "text-slate-600 hover:text-slate-900 transition-colors";

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleUpgrade = () => {
    setSelectedPlan("Pro");
    setShowPaywall(true);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="w-full px-6 md:px-8 h-[80px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/image.png"
            alt="Portfallo Logo"
            className="h-9 md:h-[42px] w-auto block"
            style={{ display: 'block' }}
          />
          <span className="font-semibold text-lg md:text-xl tracking-tight text-slate-900">
            Portfallo
          </span>
        </Link>

        <nav className="hidden md:flex gap-7 text-sm items-center font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/demo" className={linkClass}>
            Demo
          </NavLink>

          {user && (
            <>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>

              <NavLink to="/upload" className={linkClass}>
                Upload
              </NavLink>

              <NavLink to="/alerts" className={linkClass}>
                Alerts
              </NavLink>
            </>
          )}

          <NavLink to="/pricing" className={linkClass}>
            Pricing
          </NavLink>

          {user ? (
            <>
              <button
                onClick={handleUpgrade}
                className="ml-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Upgrade
              </button>

              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <User size={16} />
                  <span>{user.email?.split('@')[0]}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 text-sm transition-colors"
                  title="Uitloggen"
                >
                  <LogOut size={16} />
                  <span>Uitloggen</span>
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="ml-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors font-medium text-sm"
            >
              Inloggen
            </Link>
          )}
        </nav>

        <nav className="md:hidden flex items-center gap-2">
          {user ? (
            <>
              <button
                onClick={handleUpgrade}
                className="px-3 py-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Upgrade
              </button>
              <button
                onClick={handleLogout}
                className="text-slate-600 hover:text-slate-900 p-2"
                title="Uitloggen"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors font-medium text-sm"
            >
              Inloggen
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
