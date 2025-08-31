import { useParams, Link } from "react-router-dom";
import communityData from "../data/community.json";
import "./CommunityDetail.css";

export default function CommunityDetail() {
  const { id } = useParams();
  const feature = communityData.find((item) => String(item.id) === id);

  if (!feature) {
    return (
      <section className="community-detail">
        <h2>Community Feature Not Found</h2>
        <Link to="/community" className="back-link">
          ← Back to Community
        </Link>
      </section>
    );
  }

  return (
    <section className="community-detail">
      <div className="detail-hero">
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>

      <div className="detail-body">
        <p>
          {feature.details ||
            "More information coming soon about this community feature. Stay tuned as Uplyfted grows!"}
        </p>
      </div>

      <Link to="/community" className="back-link">
        ← Back to Community
      </Link>
    </section>
  );
}
