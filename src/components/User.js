import React from "react";
import "../styles/user.css";
import { useNavigate } from "react-router-dom";
import UserRecipes from "./userRecipes";
function User({ user, recipeData }) {
  const navigate = useNavigate();
  return (
    <div className="main-user">
      {user && (
        <div className="user-page">
          <div className="top-bar row justify-content-between align-items-center">
            <button
              className="add-recipe"
              onClick={() => navigate("/main/addrecipe")}
            >
              Add Recipe <span class="material-symbols-outlined">add</span>
            </button>

            <h2 className="h1text">Your Recipes</h2>
            <div className="user-profile ">
              <img
                className="profile-pic "
                referrerPolicy="no-referrer"
                src={user.picture}
                alt={user.name}
              />
              <h6 className="text-center">{user.name}</h6>
            </div>
          </div>

          <div className="my-recipes">
            <UserRecipes userid={user.email} recipes={recipeData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
