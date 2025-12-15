import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.title = "home";
  }, []);

  return (
    <>
      <section className="home d-flex justify-content-center align-items-center vh-100 text-white">
        <div className="text-center">
          <img
            src="/src/assets/images/avataaars.svg"
            alt=""
            className="avatar-img mb-5"
          />

          <h2 className="text-uppercase fw-bolder fs-1 mb-3">
            start framework
          </h2>

          <div className="star-icon white-star mx-auto my-3">
            <i className="bi bi-star-fill"></i>
          </div>

          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </section>
    </>
  );
}
