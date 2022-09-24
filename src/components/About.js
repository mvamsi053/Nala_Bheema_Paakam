import React, { useState } from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";
import Contcatus from "./Contcatus";

function About() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="About">
      <div className="footer-content">
        <div className="logo">
          <img
            className="footer-logo"
            src="/icons/NBP_logo_preview_rev_1.png"
            alt="Nbp Logo"
          />
        </div>
        <h3 className="footer-header">About Nala Bheema Paakam</h3>
        <p>
          Nala Bheema Paakam is an online recipe book.You can not only read here
          but also add your own recipes.Let's make people to know your new
          recipes.
        </p>
        <h4 className="footer-foot">About this Project</h4>
        <p>
          Nala Bheema Paakam is a Mini-Project built by Vamsi Madugundu
          CSE-E3,Rk Valley,RGUKT AP under the guidence of B.Lingamurthy Software
          Engineer,Rk Valley,RGUKT AP.
        </p>
      </div>
      <div className="footer-links row ">
        <p type="button" onClick={() => setModalShow(true)}>
          Contact US
        </p>
        <Contcatus show={modalShow} onHide={() => setModalShow(false)} />
        <Link to="/main/terms">| Terms</Link>
        <Link to="/main/privacyPolicy">| Privacy</Link>
      </div>
    </div>
  );
}

export default About;
