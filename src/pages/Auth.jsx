import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import "../styles/Auth.css";

export default function Auth() {
  const [params] = useSearchParams();
  const role = params.get("role"); // "recipient" or "helper"
  const [activeTab, setActiveTab] = useState("signup");

  const title = useMemo(() => {
    if (activeTab === "signup") {
      if (role === "helper") return "Sign up to Uplyft";
      if (role === "recipient") return "Sign up to be Uplyfted";
      return "Welcome to Uplyfted";
    }
    return "Welcome back to Uplyfted";
  }, [role, activeTab]);

  const subtitle = useMemo(() => {
    if (activeTab === "signup") {
      return "Create an account to access resources, track applications, and join the community.";
    } else {
      return "Log in to access your account and continue where you left off.";
    }
  }, [activeTab]);

  return (
    <section className="auth-page">
      <div className="corner-svg" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fce7f3"
            d="M44.4,-62.4C58.7,-54.1,72.2,-44.1,76.3,-30.3C80.4,-16.5,75,0.9,66.6,13.9C58.3,26.9,47,35.5,34.6,45.9C22.2,56.4,11.1,68.7,-3.5,73.7C-18.1,78.6,-36.3,76.2,-47.8,64.9C-59.3,53.7,-64.1,33.6,-65.7,15C-67.2,-3.6,-65.5,-20.6,-55.8,-30.9C-46.1,-41.2,-28.4,-44.8,-11.9,-51.9C4.6,-58.9,20.8,-69.3,36.4,-70.1C52,-70.9,67.9,-62.8,44.4,-62.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="auth-card">
        {/* Tabs */}
        <div className="tabs" role="tablist" aria-label="Auth tabs">
          <button
            type="button"
            aria-pressed={activeTab === "signup"}
            className={`tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "login"}
            className={`tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
        </div>

        {/* Title & subtitle */}
        <h2 className="auth-title">{title}</h2>
        <p className="auth-sub">{subtitle}</p>

        {activeTab === "signup" ? <Register role={role} /> : <Login />}
      </div>
    </section>
  );
}


