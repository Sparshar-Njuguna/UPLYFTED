import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import communityData from "../data/community.json";
import storiesData from "../data/stories.json";
import "../styles/Community.css";

// Import testimonial images (still safe in src/assets)
import mayaImg from "../assets/maya.jpeg";
import jordanImg from "../assets/jordan.jpeg";
import aaliyahImg from "../assets/aaliyah.jpeg";

export default function Community() {
  const [features, setFeatures] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setFeatures(communityData);
    setStories(storiesData);
  }, []);

  // helper: decide which image goes with which story
  const getImageForAuthor = (author) => {
    if (author.startsWith("Maya")) return mayaImg;
    if (author.startsWith("Jordan")) return jordanImg;
    if (author.startsWith("Aaliyah")) return aaliyahImg;
    return null;
  };

  return (
    <section className="community-section">
      {/* Hero */}
      <div className="community-hero">
        <h2>Community Center</h2>
        <p>
          A safe space for connection. The forum is coming soon — for now, explore
          groups, mentorship circles, and uplifting stories.
        </p>
      </div>

      {/* Features Grid */}
      <div className="community-grid">
        {features.map((item) => (
          <article key={item.id} className="community-card">
            <span className="tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/community/${item.id}`} className="learn-more">
              Learn more →
            </Link>
          </article>
        ))}
      </div>

      {/* Stories Section */}
      <div className="stories-section">
        <h3>Encouraging Stories</h3>
        <div className="stories-grid">
          {stories.map((story) => {
            const imageSrc = getImageForAuthor(story.author);

            return (
              <blockquote key={story.id} className="story-card">
                {imageSrc && (
                  <img src={imageSrc} alt={story.author} className="story-img" />
                )}
                <p>“{story.story}”</p>
                <footer>— {story.author}</footer>
              </blockquote>
            );
          })}
        </div>
      </div>

      {/* Tagline */}
      <p className="community-tagline">Together we rise 💜</p>
    </section>
  );
}



