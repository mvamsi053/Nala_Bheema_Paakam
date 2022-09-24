import React, { useState } from "react";
import "../styles/footer.css";
import Contcatus from "./Contcatus";
import { Link } from "react-router-dom";

function Footer() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <img
            className="footer-logo"
            src="/icons/NBP_logo_preview_rev_1.png"
            alt="Nbp Logo"
          />
        </div>
        <h3 className="footer-header">More About Nala Bheema Paakam</h3>
        <p>
          Nala Bheema Paakam is a recipe and cookbook site where for the first
          time in India you can create your own personalised digital cookbooks
          using recipes from top food brands and chefs, combined with your own
          ideas. Learn more about what makes us different from other recipe
          sites and cookbook products here.
        </p>
        <h4 className="footer-foot">
          Check out some easy home recipes and enjoy cooking
        </h4>
      </div>
      <div className="footer-links row ">
        <p type="button" onClick={() => setModalShow(true)}>
          Contact US
        </p>
        <Contcatus show={modalShow} onHide={() => setModalShow(false)} />
        <Link to="terms">| Terms</Link>
        <Link to="privacyPolicy">| Privacy</Link>
      </div>
      <div className="footer-note">Copyright Nala Bheema Paakam 2022</div>
    </div>
  );
}

export default Footer;
