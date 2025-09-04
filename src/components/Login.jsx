import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { backend } from "../main"; // import backend URL

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${backend}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid email or password");

      setSuccess("🎉 Logged in successfully! Welcome back.");
      setEmail("");
      setPassword("");

      // 🔑 save token for future API calls
      localStorage.setItem("token", data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
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

      <button type="submit" className="auth-btn" disabled={loading}>
        {loading ? "Logging in…" : "Log in"}
      </button>

      {error && <p className="error-text">❌ {error}</p>}
      {success && <p className="success-text">{success}</p>}

      <div className="divider">or</div>

      <button type="button" className="google-btn">
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" />
        Continue with Google
      </button>

      <p className="fine-print">
        By logging in, you agree to our community guidelines and code of care.
      </p>
    </form>
  );
}


