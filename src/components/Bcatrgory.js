// eslint-disable-next-line
import React, { useEffect } from "react";
import "../styles/bcategory.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Bcatrgory({ recipeData }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const myCategory = localStorage.getItem("catName");
  return (
    <div>
      <div className="catBar text-center">
        <h2 className="h1text">{myCategory.toUpperCase()} Recipes</h2>
      </div>
      <div className="allRecipes">
        <div className="catRecipes">
          {recipeData.map(function (recipe) {
            if (recipe.category === myCategory) {
              return (
                <div
                  className="bcategory"
                  data-aos="fade-right"
                  key={recipe.id}
                >
                  <div className="allrecipecard card">
                    <img
                      className="images"
                      src={recipe.image}
                      alt={recipe.name}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{recipe.name}</h5>

                      <p className="card-text  ">by {recipe.author}</p>
                      <div className="row  justify-content-around">
                        <Link
                          to={`/main/${recipeData.findIndex(
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Bcatrgory;
