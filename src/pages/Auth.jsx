// src/pages/Auth.jsx
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Auth.css";

export default function Auth() {
  const [params] = useSearchParams();
  const role = params.get("role"); // "recipient" or "helper"
  const title = useMemo(() => {
    if (role === "helper") return "Sign up to Uplyft";
    if (role === "recipient") return "Sign up to be Uplyfted";
    return "Welcome to Uplyfted";
  }, [role]);

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>{title}</h2>
        <p>
          Create an account to access resources, track applications, and join
          the community.
        </p>

        <form>
          <div className="name-row">
            <label>
              First name
              <input type="text" />
            </label>
            <label>
              Last name
              <input type="text" />
            </label>
          </div>

          <label>
            Email
            <input type="email" />
          </label>

          <label>
            Password
            <input type="password" />
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

          <button type="button" className="auth-btn">
            Create account (UI only)
          </button>

          <p className="fine-print">
            By continuing, you agree to our community guidelines and code of
            care.
          </p>
        </form>
      </div>
    </section>
  );
}
