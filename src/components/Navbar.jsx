
import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, HandCoins, HeartPulse, Users, LogIn } from "lucide-react";
import Logo from "./Logo.jsx";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/career", label: "Career", icon: GraduationCap },
  { to: "/aid", label: "Aid", icon: HandCoins },
  { to: "/wellness", label: "Wellness", icon: HeartPulse },
  { to: "/community", label: "Community", icon: Users },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar-header">
      <nav className="navbar glass sticky-nav">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="nav-links">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {Icon && <Icon size={16} />}
                <span className="nav-label">{label}</span>
                {location.pathname === to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <Link to="/auth" className="cta-button">
              <LogIn size={16} /> Sign in
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="mobile-toggle"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/auth"
              onClick={() => setOpen(false)}
              className="mobile-cta"
            >
              Sign in
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Animated shimmer bar on route change */}
      <motion.div
        key={location.pathname}
        className="route-shimmer"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </header>
  );
}