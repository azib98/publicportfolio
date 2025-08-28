import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageModalProps {
  images: string[];
  title: string;
  handleClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  title,
  handleClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false, // enable arrows for navigation
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered
      size="xl"
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton closeVariant="black">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={img}
                alt={`slide-${idx}`}
                style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
