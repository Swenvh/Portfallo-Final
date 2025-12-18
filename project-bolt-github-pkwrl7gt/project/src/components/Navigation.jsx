import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UploadCloud,
  Bell,
  LayoutDashboard,
  Menu,
  X,
  Star,
} from "lucide-react";

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-gray-900 font-semibold relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-emerald-500 after:rounded-full"
      : "text-gray-600 hover:text-gray-900";

  return (
    <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm px-6 py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-xl blur opacity-50"></div>
            <div className="relative w-9 h-9 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <LayoutDashboard size={20} className="text-white" />
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Portfallo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`flex items-center gap-1 ${isActive("/")}`}>
            <Home size={18} /> Home
          </Link>

          <Link to="/upload" className={`flex items-center gap-1 ${isActive("/upload")}`}>
            <UploadCloud size={18} /> Upload
          </Link>

          <Link to="/dashboard" className={`flex items-center gap-1 ${isActive("/dashboard")}`}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link to="/alerts" className={`flex items-center gap-1 ${isActive("/alerts")}`}>
            <Bell size={18} /> Alerts
          </Link>

          <Link to="/upgrade" className="ml-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-xl hover:shadow-cyan-500/30 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20">
            <Star size={16} /> Upgrade
          </Link>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 pb-3 flex flex-col gap-4 border-t border-gray-200/50 pt-3">
          <Link to="/" onClick={() => setOpen(false)} className={`flex items-center gap-2 px-1 ${isActive("/")}`}>
            <Home size={18} /> Home
          </Link>

          <Link to="/upload" onClick={() => setOpen(false)} className={`flex items-center gap-2 px-1 ${isActive("/upload")}`}>
            <UploadCloud size={18} /> Upload
          </Link>

          <Link to="/dashboard" onClick={() => setOpen(false)} className={`flex items-center gap-2 px-1 ${isActive("/dashboard")}`}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link to="/alerts" onClick={() => setOpen(false)} className={`flex items-center gap-2 px-1 ${isActive("/alerts")}`}>
            <Bell size={18} /> Alerts
          </Link>

          <Link to="/upgrade" onClick={() => setOpen(false)} className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-lg shadow-cyan-500/20">
            <Star size={16} /> Upgrade
          </Link>
        </div>
      )}
    </nav>
  );
}
