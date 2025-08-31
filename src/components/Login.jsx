import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
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

      <button type="submit" className="auth-btn">
        Log in
      </button>

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
