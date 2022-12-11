// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "../styles/userRecipes.css";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import axios from "axios";

function UserRecipes({ userid }) {
  console.log(userid);
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get("https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes")
      .then((res) => {
        setRecipe(res.data);
      });
  }, []);
  const handleUpdate = (id) => {
    localStorage.setItem("ID", id);
    console.log(id);
  };
  const handledelete = (id) => {
    axios
      .delete(
        `https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes/${id}`
      )
      .then(() => {
        axios
          .get("https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes")
          .then((res) => {
            setRecipe(res.data);
          });
      });
  };
  return (
    // <div className="recipe-list row justify-content-center">
    <>
      {recipes.map(function (recipe) {
        if (recipe.author_id === userid) {
          return (
            <div className="recipecard">
              <div className="userRecipecard card" key={recipe.id}>
                <img className="cardimage" src={recipe.image} alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>

                  <p className="card-text  ">by {recipe.author}</p>
                  <div className="row  justify-content-around">
                    <Tooltip
                      title="View"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <Link
                        to={`/main/${recipes.findIndex(
                          (x) => x.id === recipe.id
                        )}`}
                      >
                        <span
                          className="material-symbols-outlined view"
                          type="button"
                        >
                          fullscreen
                        </span>
                      </Link>
                    </Tooltip>

                    <Tooltip
                      title="Update"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <Link to="/main/updateRecipe">
                        <span
                          className="material-symbols-outlined edit "
                          type="button"
                          onClick={() =>
                            handleUpdate(
                              recipes.findIndex((x) => x.id === recipe.id)
                            )
                          }
                        >
                          edit
                        </span>
                      </Link>
                    </Tooltip>
                    <Tooltip
                      title="delete"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <span
                        className="material-symbols-outlined delete "
                        type="button"
                        onClick={() => handledelete(recipe._id)}
                      >
                        delete
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      {/* // </div> */}
    </>
  );
}

export default UserRecipes;
