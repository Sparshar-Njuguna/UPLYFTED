import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {/* Corner decoration */}
      <div className="corner-decor">✨</div>

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="auth-title">{isLogin ? "Welcome Back 💜" : "Join Us 🩷"}</h2>
        <p className="auth-subtitle">
          {isLogin ? "Log in to continue your journey." : "Create your account and get started."}
        </p>

        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Your Name" className="auth-input" />
          )}
          <input type="email" placeholder="Email Address" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="auth-btn"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </motion.button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
