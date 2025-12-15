import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact";
  }, []);
  
  return (
    <div>
      <section className=" container contact-section d-flex flex-column justify-content-center align-items-center text-start my-5 py-5">
        <div>
          <h2 className=" text-uppercase fs-1 fw-bolder mb-3 ">
            contact section
          </h2>
          <div className="contact-star-icon mx-auto my-3  ">
            <i className="bi bi-star-fill"></i>
          </div>
        </div>

        <form action="" className="contact-form w-50 p-3 mx-auto mt-5">
          <div className="position-relative mb-4">
            <input
              id="userName"
              type="text"
              placeholder="UserName"
              className="form-control border-0 shadow-none border-bottom py-3"
            />
            <label htmlFor="userName">UserName :</label>
          </div>

          <div className="position-relative mb-4">
            <input
              id="userAge"
              type="text"
              placeholder="UserAge"
              className="form-control border-0 shadow-none border-bottom py-3"
            />
            <label htmlFor="userAge">UserAge :</label>
          </div>

          <div className="position-relative mb-4">
            <input
              id="userEmail"
              type="text"
              placeholder="UserEmail"
              className="form-control border-0 shadow-none border-bottom py-3"
            />
            <label htmlFor="userEmail">UserEmail :</label>
          </div>

          <div className="position-relative mb-4">
            <input
              id="userPassword"
              type="password"
              placeholder="UserPassword"
              className="form-control border-0 border-bottom shadow-none py-3"
            />
            <label htmlFor="userPassword">UserPassword :</label>
          </div>

          <button className="btn text-white mt-2">Send Message</button>
        </form>
      </section>
    </div>
  );
}
