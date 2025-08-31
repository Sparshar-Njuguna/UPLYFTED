import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register({ role }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="auth-form">
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
        <div className="password-wrapper">
          <input type={showPassword ? "text" : "password"} name="password" />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
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

      <button type="button" className="google-btn">
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
        Continue with Google
      </button>

      <p className="fine-print">
        By continuing, you agree to our community guidelines and code of care.
      </p>
    </form>
  );
}
