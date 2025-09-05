import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { backend } from "../main"; // import your Render backend URL

export default function Register({ role }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(role || "recipient");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${backend}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role: selectedRole,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      // ✅ Save token + user info after register
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess("🎉 Account created successfully! You can now log in.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <div className="name-row">
        <label>
          First name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
              checked={selectedRole === "recipient"}
              onChange={() => setSelectedRole("recipient")}
            />
            <span>Be Uplyfted (access help)</span>
          </label>
          <label className="role-pill">
            <input
              type="radio"
              name="role"
              value="helper"
              checked={selectedRole === "helper"}
              onChange={() => setSelectedRole("helper")}
            />
            <span>Uplyft others (offer help)</span>
          </label>
        </div>
      </fieldset>

      <button type="submit" className="auth-btn" disabled={loading}>
        {loading ? "Creating account…" : "Create account"}
      </button>

      {error && <p className="error-text">❌ {error}</p>}
      {success && <p className="success-text">{success}</p>}

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

