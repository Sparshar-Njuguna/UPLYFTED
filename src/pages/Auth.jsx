import { useState } from "react";
import "./Auth.css";
import { motion } from "framer-motion";
import { Sparkles, Flower2 } from "lucide-react";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="auth-page">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Cute corner decoration */}
        <div className="corner-deco top-left"><Flower2 size={28} /></div>
        <div className="corner-deco bottom-right"><Sparkles size={28} /></div>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={activeTab === "signup" ? "tab active" : "tab"}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
          <button
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
        </div>

        {/* Subtitle per role */}
        <p className="auth-subtitle">
          {activeTab === "signup"
            ? "🌸 Start your journey. Create your space of empowerment."
            : "💖 Welcome back. Let’s continue building your future."}
        </p>

        {/* Form content */}
        {activeTab === "signup" ? (
          <form className="auth-form">
            <h3 className="section-heading">Personal Info</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="primary-btn">
              Sign Up
            </button>

            <div className="divider">or</div>

            <button type="button" className="google-btn">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
              />
              Continue with Google
            </button>
          </form>
        ) : (
          <form className="auth-form">
            <h3 className="section-heading">Login Details</h3>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="primary-btn">
              Log In
            </button>

            <div className="divider">or</div>

            <button type="button" className="google-btn">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
              />
              Continue with Google
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

