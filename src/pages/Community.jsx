// src/pages/Community.jsx
import React from "react";
import "../styles/Community.css";
import stories from "../data/stories.json";

const Community = () => {
  return (
    <div className="community">
      <header className="community-header">
        <h1>Our Community</h1>
        <p>
          Discover inspiring stories from people just like you—sharing journeys,
          growth, and success.
        </p>
      </header>

      <div className="community-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img
              src={`/images/${story.image}`}
              alt={story.name}
              className="story-image"
            />
            <h3>{story.name}</h3>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;



