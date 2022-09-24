import React, { useEffect } from "react";
import "../styles/recipe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";

// const [recipe1, recipe2] = recipeData;

function Recipe({ recipeData }) {
  const { id } = useParams();
  const recipe1 = recipeData[id];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  console.log("recipe:" + recipe1.id);
  return (
    <div className="recipe row " key={recipe1._id}>
      <div className="left-pannel col-lg-5 col-md-12 col-sm-12 col-12">
        <div className="recipe-img-div">
          <img
            src={recipe1.image}
            className="recipe-image"
            alt={recipe1.name}
            data-aos="slide-down"
          />
        </div>
        <h1 className="headings my-3 ">{recipe1.name}</h1>
        <div className="time row justify-content-between my-2 ">
          <h5 className="d-inline-flex sub-timer align-items-center ">
            <span className="material-symbols-outlined">timer</span>
            {recipe1.cookingTime} minutes
          </h5>
          <h5 className="d-inline-flex sub-servings align-items-center ">
            <span className="material-symbols-outlined">restaurant</span>
            {recipe1.servings} servings
          </h5>
        </div>
        <div className="about">
          <p>{recipe1.about}</p>
        </div>
      </div>
      <div className="right-pannel col-lg-7 col-md-12 col-sm-12 col-12 ">
        <h2 className="headings">Ingredients</h2>
        <div data-aos="slide-up">
          {recipe1.ingredients.map((ingredient, i) => {
            return (
              <p className="right-para" key={i}>
                {ingredient}{" "}
              </p>
            );
          })}
        </div>
        <h2 className="headings">Directions</h2>
        <div data-aos="slide-left">
          {recipe1.process.map((steps, i) => {
            return (
              <p className="right-para" key={i}>
                {steps}{" "}
              </p>
            );
          })}
        </div>
        <button
          className="print d-inline-flex align-items-center"
          onClick={window.print}
        >
          <span className="print-text material-symbols-outlined mr-2">
            print
          </span>
          Print this recipe
        </button>
      </div>
      <footer className="footer  ">
        <p className="col-12">This recipe by {recipe1.author}</p>
        <p className="col-12">
          © 2022 Nala Bheema Paakam | Learn & Share Cooking| All Rights
          Reserverd
        </p>
      </footer>
    </div>
  );
}

export default Recipe;
