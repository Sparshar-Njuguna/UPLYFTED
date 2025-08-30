// HeartAnimation.jsx
// HeartAnimation.jsx
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HeartAnimation() {
  const [particles, setParticles] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        size: Math.random() * 8 + 3,
        delay: Math.random() * 3,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) * 0.1,
          y: (e.clientY - centerY) * 0.1,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleHeartClick = () => {
    setIsClicked(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => setIsClicked(false), 1200);
  };

  const getHeartColor = () => {
    if (clickCount >= 10) return "url(#heartGradientRainbow)";
    if (clickCount >= 5) return "url(#heartGradientGold)";
    return "url(#heartGradient)";
  };

  const getGlowColor = () => {
    if (clickCount >= 10)
      return "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(236,72,153,0.6) 50%, transparent 70%)";
    if (clickCount >= 5)
      return "radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(245,158,11,0.6) 50%, transparent 70%)";
    return "radial-gradient(circle, rgba(236,72,153,0.9) 0%, rgba(217,70,239,0.7) 50%, transparent 70%)";
  };

  return (
    <div
      ref={containerRef}
      className="heart-animation-container"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            background:
              clickCount >= 10
                ? "linear-gradient(45deg, #a855f7, #ec4899, #f59e0b)"
                : clickCount >= 5
                ? "linear-gradient(45deg, #fbbf24, #f59e0b)"
                : "linear-gradient(45deg, #ec4899, #d946ef, #c026d3)",
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Heart */}
      <motion.div
        className="heart-wrapper"
        onClick={handleHeartClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.15 : 1,
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -2, 2, 0],
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.85 }}
        style={{ position: "relative", cursor: "pointer", zIndex: 2 }}
      >
        {/* Glow */}
        <motion.div
          className="glow"
          animate={{
            scale: isHovered
              ? [1.2, 1.6, 1.2]
              : [1, 1.4, 1.2, 1.4, 1],
            opacity: isHovered
              ? [0.6, 0.9, 0.6]
              : [0.5, 0.8, 0.6, 0.8, 0.5],
          }}
          transition={{
            duration: isHovered ? 1 : 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            filter: "blur(40px)",
            background: getGlowColor(),
          }}
        />

        {/* SVG Heart */}
        <motion.svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          style={{ position: "relative", zIndex: 10 }}
          animate={
            isClicked
              ? {
                  scale: [1, 1.5, 1.2, 1],
                  rotate: [0, 10, -10, 5, 0],
                }
              : isHovered
              ? { scale: [1, 1.12, 1.08, 1.12, 1] }
              : { scale: [1, 1.1, 1.05, 1.1, 1] }
          }
          transition={
            isClicked
              ? { duration: 0.8, ease: "easeOut" }
              : { duration: isHovered ? 0.6 : 1.2, repeat: Infinity }
          }
        >
          <motion.path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={getHeartColor()}
            stroke="url(#heartStroke)"
            strokeWidth="0.8"
          />
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
            <linearGradient id="heartGradientGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="heartGradientRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="33%" stopColor="#ec4899" />
              <stop offset="66%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="heartStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be185d" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Click Counter */}
      {clickCount > 0 && (
        <motion.div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "6px 12px",
            background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(168,85,247,0.4)",
            borderRadius: "12px",
            backdropFilter: "blur(6px)",
            color: "#4c1d95",
            fontWeight: "600",
          }}
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {clickCount < 5
            ? `${clickCount} ♥`
            : clickCount < 10
            ? `${clickCount} ♥ Golden Heart!`
            : `${clickCount} ♥ Rainbow Heart!`}
        </motion.div>
      )}
    </div>
  );
}

