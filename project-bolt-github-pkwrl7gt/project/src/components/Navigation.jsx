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
      ? "text-white font-bold"
      : "text-white/80 hover:text-white";

  return (
    <nav className="w-full bg-gradient-to-r from-[#2d1b69] to-[#1a0f3e] backdrop-blur-md border-b border-white/10 shadow-lg px-6 py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg"></div>
          <span className="text-xl font-bold text-white">Portfallo</span>
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

          <Link to="/upgrade" className="ml-3 bg-gradient-to-r from-[#d4af37] to-[#f0d478] hover:shadow-xl text-gray-900 px-5 py-2 rounded-full flex items-center gap-1 font-bold transition-all hover:-translate-y-1">
            <Star size={16} /> Upgrade
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 pb-3 flex flex-col gap-4 border-t border-white/10 pt-3">
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

          <Link to="/upgrade" onClick={() => setOpen(false)} className="bg-gradient-to-r from-[#d4af37] to-[#f0d478] text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-bold">
            <Star size={16} /> Upgrade
          </Link>
        </div>
      )}
    </nav>
  );
}
