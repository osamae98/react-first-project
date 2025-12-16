import {useEffect, useState } from "react";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";



export default function Portfolio() {

    useEffect(() => {
    document.title = "portfolio";
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    port1,
    port2,
    port3,
    port1,
    port2,
    port3,
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("model")) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <section className="portfolio d-flex flex-column justify-content-center align-items-center my-4 text-center text-light">
        <div className="portfolio-text">
          <h2 className="text-uppercase fs-1 fw-bolder">portfolio component</h2>
        </div>
        <div className="star-icon mx-auto my-3 text-light ">
          <i className="bi bi-star-fill"></i>
        </div>
        <div className="container">
          <div className="portfolio-img row g-5">
            {images.map((img, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="portfolio-card rounded-3 overflow-hidden position-relative"
                  onClick={() => handleImageClick(img)}
                >
                  <img src={img} className="w-100" alt={`portfolio-img-${index}`} />
                  <div className="layer text-center">
                    <i className="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="model d-flex justify-content-center align-items-center"
          onClick={handleCloseModal}
        >
          <img src={selectedImage} alt="selected-portfolio" />
        </div>
      )}
    </>
  );
}
