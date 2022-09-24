import React, { useEffect } from "react";
import "../styles/allRecipes.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function AllRecipes({ recipes }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="allRecipes">
      <div className="my-recipes ">
        {recipes.map(function (recipe) {
          return (
            <div className="recipecard" data-aos="flip-left">
              <div className="allrecipecard card" key={recipe.id}>
                <img className="cardimage" src={recipe.image} alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>

                  <p className="card-text  ">by {recipe.author}</p>
                  <div className="row  justify-content-around">
                    <Link
                      to={`/main/${recipes.findIndex(
                        (x) => x.id === recipe.id
                      )}`}
                    >
                      <button className="read-recipe  btn btn-primary">
                        read recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllRecipes;
