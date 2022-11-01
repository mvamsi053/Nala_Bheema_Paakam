import React from "react";
import Icons from "./Icons";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="text text-center ">
        <div className="home-header">
          {/* <img className="cap" src="/icons/cap.svg" alt="cap" /> */}
          <h1 className=" heading    fw-bold ">Nala Bheema</h1>

          <h1 className=" heading  fw-bold ">Paakam</h1>
        </div>
        <h2 className="sub-heading ">
          <div className="homediv">Learn</div>
          <div className="homediv">
            <span className="last">& Share cooking</span>
          </div>
        </h2>
      </div>
      {/* cup */}
      <div id="container">
        <div className="steam" id="steam1"></div>
        <div className="steam" id="steam2"></div>
        <div className="steam" id="steam3"></div>
        <div clasNames="steam" id="steam4"></div>

        <div id="cup">
          <div id="cup-body">
            <div id="cup-shade"></div>
          </div>
          <div id="cup-handle"></div>
        </div>

        <div id="saucer"></div>

        <div id="shadow"></div>
      </div>

      <a style={{ textDecoration: "none" }} href="/Main">
        <button className="next btn btn-sm mx-auto ">
          <span class="material-symbols-outlined  ">arrow_right_alt</span>
          Vist our recipes
        </button>
      </a>
      <Icons />
      <footer className="blockquote-footer text-center">
        copyrights vamsi madugundu 2022
      </footer>
    </div>
  );
}
export default Home;
// This is my first realtime project. For this project I have learned required Web-Technologies like React,Node,Express and Mongodb from Udemy and freeCodeCamp.I have faced some problems while applying this to my project. I got solutions from my project guide and stackoverflow.
