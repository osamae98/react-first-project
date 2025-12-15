export default function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="card-Footer container row m-4">
          <div className="card text-light border-0 text-center col-lg-4 col-sm-12">
            <h3 className="text-uppercase">location</h3>
            <p>2215 john daneil drive </p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="card text-light border-0 text-center  col-lg-4 col-sm-12">
            <h3 className="text-uppercase">around the web</h3>
            <div className="footer-icons d-flex flex-row justify-content-center gap-3">
              <i className="bi bi-facebook border  border-light rounded-circle p-2 icon-link"></i>
              <i className="bi bi-twitter border  border-light rounded-circle p-2 icon-link"></i>
              <i className="bi bi-linkedin border  border-light rounded-circle p-2 icon-link"></i>
              <i className="bi bi-globe border border-light rounded-circle p-2 icon-link"></i>
            </div>
          </div>

          <div className="card text-light border-0 text-center col-lg-4 col-sm-12">
            <h3 className="text-uppercase">about freelancer</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className=" mb-3 pt-3">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
