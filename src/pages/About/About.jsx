import { useEffect } from "react";

export default function About() {

    useEffect(() => {
      document.title = "about";
    }, []);
  
  return (
    <section className="about d-flex flex-column justify-content-center align-items-center vh-100 text-center text-light">
      <div className="about-text">
        <h2 className=" text-uppercase fs-1 fw-bolder">about component</h2>
      </div>
      <div className="star-icon white-star mx-auto my-3 text-light ">
        <i className="bi bi-star-fill"></i>
      </div>

          <div className="row about-para  ">
        <div className="col-md-6">
          <p >
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>

    
    </section>
  );
}
