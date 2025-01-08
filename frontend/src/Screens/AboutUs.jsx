import React from "react";
import { Link } from "react-router-dom";
import images01 from "../images/Group 140.png";
import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className="d-flex align-items-center aboutcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h4>
                  Welcome to the About Page of
                  <strong className="brand-name">Health Care</strong>
                </h4>
                <h2 className="my-3">
                  We are a dedicated team of healthcare professionals and
                  technologists, committed to transforming the way healthcare is
                  delivered. Our mission is to make healthcare more accessible,
                  efficient, and personalized through innovative technology
                  solutions.
                  <br /><br />
                  eHealth is more than a project for us. It's our contribution
                  to making healthcare better for everyone. We are committed to
                  developing technology that not only improves the efficiency of
                  healthcare services but also enhances patient experience.
                  <br /><br />
                  Thank you for being a part of our mission. We look forward to
                  continuing to serve you and revolutionize healthcare together.
                </h2>
                <div className="mt-4">
                  <Link to="/Contactus" className="btn-get-started">
                    Contact Now
                  </Link>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img
                  src={images01}
                  className="img-fluid animated"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
