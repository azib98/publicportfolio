import React from "react";
import "../components/FlipCard.css";

interface FlipCardProps {
  title: string;
  description: string;
  footer: string;
  images: string[];
  handleOpenModal: (
    images: string[],
    title: string,
    description?: string
  ) => void;
}

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  description,
  footer,
  images,
  handleOpenModal,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="tech">{footer}</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <button
            className="view-project-btn"
            onClick={() => handleOpenModal(images, title, description)}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
