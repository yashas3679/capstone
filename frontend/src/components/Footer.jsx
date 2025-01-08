import { CDBBox, CDBLink, CDBSidebarFooter } from "cdbreact";
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <CDBSidebarFooter
      className="shadow"
      style={{
        background:
          "linear-gradient(170deg, rgb(0, 198, 167), rgb(30, 77, 146))",
      }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
               Health Care Web Application
            </p>

            <p className="my-3" style={{ width: "250px" }}>
            Developed by final-year students, this platform offers premium tools and resources to streamline your development journey.
            </p>
            
          
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Health care
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Service
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Medicine</CDBLink>
              <CDBLink href="/">Doctor</CDBLink>
              <CDBLink href="/">Blood</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Healthcare @ {currentYear} All rights reserved.
        </small>
      </CDBBox>
    </CDBSidebarFooter>
  );
};

export default Footer;
