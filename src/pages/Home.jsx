
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, HandCoins, HeartPulse, Users } from "lucide-react";
import "../styles/Home.css";
import HeroImage from "../assets/Hero-image.jpeg";
import HeartAnimation from "../components/HeartAnimation.jsx";

const featuredCards = [
  {
    icon: <GraduationCap className="icon" />,
    title: "Career Growth",
    description: "Explore resources and guidance to elevate your career path with confidence.",
  },
  {
    icon: <HandCoins className="icon" />,
    title: "Financial Wellness",
    description: "Discover tips and tools to build financial stability and independence.",
  },
  {
    icon: <HeartPulse className="icon" />,
    title: "Health & Wellness",
    description: "Prioritize your well-being with curated health and lifestyle content.",
  },
  {
    icon: <Users className="icon" />,
    title: "Community",
    description: "Connect with like-minded individuals in a safe and supportive space.",
  },
];

export default function Home() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="floating-shape shape1"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="floating-shape shape2"
        />

        {/* Hero content container */}
        <div className="hero-content">
          {/* Text side */}
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Welcome to <span className="accent-text">Uplyfted</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-subtitle"
            >
              Empowering women with the tools, resources, and community they need
              to grow, thrive, and shine.
            </motion.p>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button"
            >
              Learn More
            </motion.a>
          </div>

          {/* Image side */}
          <motion.img
            src={HeroImage}
            alt="Empowering"
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About <span className="accent-text">Uplyfted</span>
        </motion.h2>

        <div className="about-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-text"
          >
            Uplyfted is a supportive hub designed to provide women with resources,
            mentorship, and a community that uplifts and empowers. Whether you’re
            focusing on your career, finances, health, or personal growth – we’re
            here to walk with you every step of the way.
          </motion.p>

          {/* Heart Animation integrated here */}
          <div className="about-heart">
            <HeartAnimation />
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="featured">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Explore Our Features
        </motion.h2>

        <div className="cards-container">
          {featuredCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card"
            >
              <div className="icon-wrapper">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}