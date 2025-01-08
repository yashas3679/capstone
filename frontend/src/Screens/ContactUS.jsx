import axios from "axios";
import React, { useState } from "react";
import "../assets/styles/contactus.css";
import images01 from "../images/undraw_message_sent_1030.svg";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.web3forms.com/submit", {
        ...formData,
        access_key: "330a4552-e7ec-4447-a685-741ad1103758", // Replace with your Web3Forms API key
      });

      setIsSubmitted(true);
      setErrorMessage(""); // Clear any error messages
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div id="contactid" className="contact1-pic js-tilt" data-tilt>
          <img className="animated" src={images01} alt="" />
        </div>

        {!isSubmitted ? (
          <form className="contact1-form validate-form" onSubmit={handleSubmit}>
            <span className="contact1-form-title">Contact Us</span>

            <div className="wrap-input1 validate-input">
              <input
                className="input1"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <input
                className="input1"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <textarea
                className="input1"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <span className="shadow-input1"></span>
            </div>

            <div className="container-contact1-form-btn">
              <button className="contact1-form-btn">
                <span>
                  Send
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <h2>Thank you!</h2>
            <p>Your message has been successfully sent.</p>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUS;
