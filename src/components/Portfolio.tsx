import React, { useState } from "react";
import ImageModal from "./ImageModal"; // simple modal component
import "../components/Portfolio.css";

// Import your images
import atelierP1 from "../assets/atelier360/1.png";
import atelierP2 from "../assets/atelier360/2.png";
import atelierP3 from "../assets/atelier360/3.png";
import atelierP4 from "../assets/atelier360/4.png";
import atelierP5 from "../assets/atelier360/5.png";
import atelierP6 from "../assets/atelier360/6.png";
import atelierP7 from "../assets/atelier360/7.png";
import atelierP8 from "../assets/atelier360/8.png";
import atelierP9 from "../assets/atelier360/9.png";
import atelierP10 from "../assets/atelier360/10.png";
import atelierP11 from "../assets/atelier360/11.png";

import greekP1 from "../assets/greektime/1.png";
import greekP2 from "../assets/greektime/2.png";
import greekP3 from "../assets/greektime/3.png";
import greekP4 from "../assets/greektime/4.png";
import greekP5 from "../assets/greektime/5.png";
import greekP6 from "../assets/greektime/6.png";
import greekP7 from "../assets/greektime/7.png";
import greekP8 from "../assets/greektime/8.png";
import greekP9 from "../assets/greektime/9.png";
import greekP10 from "../assets/greektime/10.png";
import greekP11 from "../assets/greektime/11.png";
import greekP12 from "../assets/greektime/12.png";

import tawakkalP1 from "../assets/tawakkal/1.png";
import tawakkalP2 from "../assets/tawakkal/2.png";
import tawakkalP3 from "../assets/tawakkal/3.png";
import tawakkalP4 from "../assets/tawakkal/4.png";
import tawakkalP5 from "../assets/tawakkal/5.png";
import tawakkalP6 from "../assets/tawakkal/6.png";
import tawakkalP7 from "../assets/tawakkal/7.png";
import tawakkalP8 from "../assets/tawakkal/8.png";
import tawakkalP9 from "../assets/tawakkal/9.png";
import tawakkalP10 from "../assets/tawakkal/10.png";
import tawakkalP11 from "../assets/tawakkal/11.png";

import dwanique1 from "../assets/dwanique/1.png";
import dwanique2 from "../assets/dwanique/2.png";
import dwanique3 from "../assets/dwanique/3.png";
import dwanique4 from "../assets/dwanique/4.png";
import dwanique5 from "../assets/dwanique/5.png";
import dwanique6 from "../assets/dwanique/6.png";
import dwanique7 from "../assets/dwanique/7.png";
import dwanique8 from "../assets/dwanique/8.png";
import dwanique9 from "../assets/dwanique/9.png";
import dwanique10 from "../assets/dwanique/10.png";

import abdulP1 from "../assets/abdul/1.png";
import abdulP2 from "../assets/abdul/2.png";
import abdulP3 from "../assets/abdul/3.png";
import abdulP4 from "../assets/abdul/4.png";
import abdulP5 from "../assets/abdul/5.png";
import abdulP6 from "../assets/abdul/6.png";
import abdulP7 from "../assets/abdul/7.png";
import abdulP8 from "../assets/abdul/8.png";
import abdulP9 from "../assets/abdul/9.png";
import abdulP10 from "../assets/abdul/10.png";
import abdulP11 from "../assets/abdul/11.png";
import abdulP12 from "../assets/abdul/12.png";

import markyP1 from "../assets/markytech/1.png";
import markyP2 from "../assets/markytech/2.png";
import markyP3 from "../assets/markytech/3.png";
import markyP4 from "../assets/markytech/4.png";
import markyP5 from "../assets/markytech/5.png";
import markyP6 from "../assets/markytech/6.png";

interface Project {
  title: string;
  description: string;
  tech: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "ATELIER 360",
    description:
      "Responsive website showcasing architecture, interior, and landscape projects with interactive gallery.",
    tech: "Web Development | WordPress | Responsive Design",
    images: [
      atelierP1,
      atelierP2,
      atelierP3,
      atelierP4,
      atelierP5,
      atelierP6,
      atelierP7,
      atelierP8,
      atelierP9,
      atelierP10,
      atelierP11,
    ],
  },
  {
    title: "DWANIQUE AUTO SALES",
    description:
      "Car selling platform with React, TypeScript, Laravel, and MySQL backend. Smooth search and filter features.",
    tech: "Web Development | React | Typescript | MySQL | SCSS",
    images: [
      dwanique1,
      dwanique2,
      dwanique3,
      dwanique4,
      dwanique5,
      dwanique6,
      dwanique7,
      dwanique8,
      dwanique9,
      dwanique10,
    ],
  },
  {
    title: "TAWAKKAL LAPTOPS",
    description:
      "WordPress website for selling new and used laptops with filters and smooth browsing experience.",
    tech: "Web Development | WordPress | E-commerce | Plugins",
    images: [
      tawakkalP1,
      tawakkalP2,
      tawakkalP3,
      tawakkalP4,
      tawakkalP5,
      tawakkalP6,
      tawakkalP7,
      tawakkalP8,
      tawakkalP9,
      tawakkalP10,
      tawakkalP11,
    ],
  },
  {
    title: "GREEK TIME",
    description:
      "Responsive WordPress website for a Greek restaurant with online menu and ordering functionality.",
    tech: "Web Development | WordPress | Plugins | Ordering | JS",
    images: [
      greekP1,
      greekP2,
      greekP3,
      greekP4,
      greekP5,
      greekP6,
      greekP7,
      greekP8,
      greekP9,
      greekP10,
      greekP11,
      greekP12,
    ],
  },
  {
    title: "ABDUL SAMAD AL QURAISHI",
    description:
      "WordPress website for a luxury perfume brand with catalog management, filtering, and mobile responsiveness.",
    tech: "Web Development | WordPress | Plugins | E-Commerce",
    images: [
      abdulP1,
      abdulP2,
      abdulP3,
      abdulP4,
      abdulP5,
      abdulP6,
      abdulP7,
      abdulP8,
      abdulP9,
      abdulP10,
      abdulP11,
      abdulP12,
    ],
  },
  {
    title: "MARKYTECH",
    description:
      "Company portfolio website built with a custom WordPress theme, responsive design, and performance optimization.",
    tech: "WordPress | Web Development | WordPress | Custom Theme | Portfolio",
    images: [markyP1, markyP2, markyP3, markyP4, markyP5, markyP6],
  },
];

const Portfolio: React.FC = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (images: string[], title: string) => {
    setModalImages(images);
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="portfolio-section">
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <div
                  style={{
                    background: "white",
                    color: "#203a43",
                    borderRadius: "5px",
                    padding: "5%",
                    height: "23%",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>
                <span className="tech">{project.tech}</span>
              </div>

              {/* Back */}
              <div
                className="flip-card-back"
                onClick={() => openModal(project.images, project.title)}
              >
                <img
                  src={project.images[0]}
                  alt="preview"
                  className="back-image"
                />
                <p className="view-images-text" style={{ cursor: "pointer" }}>
                  Click to view all images
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ImageModal
          images={modalImages}
          title={modalTitle}
          handleClose={closeModal}
        />
      )}
    </section>
  );
};

export default Portfolio;
