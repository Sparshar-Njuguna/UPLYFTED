import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "../styles/Auth.css";

/**
 * Preserves:
 *  - useSearchParams() role behavior (helper / recipient)
 *  - the original name-row and role radio pills
 *  - the original class names (auth-card, role-pill, auth-btn, fine-print)
 *
 * Adds:
 *  - pill-tab switcher (Sign Up / Log In)
 *  - Google auth button (UI-only placeholder)
 *  - small corner decoration
 */

export default function Auth() {
  const [params] = useSearchParams();
  const role = params.get("role"); // "recipient" or "helper"

  // default tab is signup to preserve original sign-up flow
  const [activeTab, setActiveTab] = useState("signup");

  // keep your original title logic for sign-up; show login title for login tab
  const title = useMemo(() => {
    if (activeTab === "signup") {
      if (role === "helper") return "Sign up to Uplyft";
      if (role === "recipient") return "Sign up to be Uplyfted";
      return "Welcome to Uplyfted";
    }
    // login tab
    return "Welcome back to Uplyfted";
  }, [role, activeTab]);

  // role-specific subtitle (keeps the original copy for signup)
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
        {/* subtle decorative svg */}
        <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fce7f3" d="M44.4,-62.4C58.7,-54.1,72.2,-44.1,76.3,-30.3C80.4,-16.5,75,0.9,66.6,13.9C58.3,26.9,47,35.5,34.6,45.9C22.2,56.4,11.1,68.7,-3.5,73.7C-18.1,78.6,-36.3,76.2,-47.8,64.9C-59.3,53.7,-64.1,33.6,-65.7,15C-67.2,-3.6,-65.5,-20.6,-55.8,-30.9C-46.1,-41.2,-28.4,-44.8,-11.9,-51.9C4.6,-58.9,20.8,-69.3,36.4,-70.1C52,-70.9,67.9,-62.8,44.4,-62.4Z" transform="translate(100 100)"/>
        </svg>
      </div>

      <div className="auth-card" role="region" aria-label="Authentication">
        {/* Tabs (pills) */}
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

        {/* Title and subtitle (preserves your memo/title logic) */}
        <h2 className="auth-title">{title}</h2>
        <p className="auth-sub">{subtitle}</p>

        {/* SIGN UP */}
        {activeTab === "signup" && (
          <form className="auth-form" /* onSubmit={} later */>
            <div className="name-row">
              <label>
                First name
                <input type="text" name="firstName" />
              </label>
              <label>
                Last name
                <input type="text" name="lastName" />
              </label>
            </div>

            <label>
              Email
              <input type="email" name="email" />
            </label>

            <label>
              Password
              <input type="password" name="password" />
            </label>

            <fieldset>
              <legend>I want to…</legend>
              <div className="role-options">
                <label className="role-pill">
                  <input
                    type="radio"
                    name="role"
                    value="recipient"
                    defaultChecked={role !== "helper"}
                  />
                  <span>Be Uplyfted (access help)</span>
                </label>

                <label className="role-pill">
                  <input
                    type="radio"
                    name="role"
                    value="helper"
                    defaultChecked={role === "helper"}
                  />
                  <span>Uplyft others (offer help)</span>
                </label>
              </div>
            </fieldset>

            <button type="submit" className="auth-btn">
              Create account (UI only)
            </button>

            <div className="divider">or</div>

            <button type="button" className="google-btn" aria-label="Continue with Google">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
              Continue with Google
            </button>

            <p className="fine-print">
              By continuing, you agree to our community guidelines and code of care.
            </p>
          </form>
        )}

        {/* LOGIN */}
        {activeTab === "login" && (
          <form className="auth-form" /* onSubmit={} later */>
            <label>
              Email
              <input type="email" name="email" />
            </label>

            <label>
              Password
              <input type="password" name="password" />
            </label>

            <button type="submit" className="auth-btn">
              Log in
            </button>

            <div className="divider">or</div>

            <button type="button" className="google-btn" aria-label="Continue with Google">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
              Continue with Google
            </button>

            <p className="fine-print">
              By logging in you agree to our community guidelines and code of care.
            </p>

            <p className="small-links">
              <Link to="/auth?role=recipient" onClick={() => setActiveTab("signup")}>
                Need an account?
              </Link>{" "}
              ·{" "}
              <Link to="/auth?role=helper" onClick={() => setActiveTab("signup")}>
                Join as helper
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

