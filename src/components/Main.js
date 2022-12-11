import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Categories from "./Categories";
import axios from "axios";

import RecipesOfTheDay from "./RecipesOfTheDay";
// URL Server
// https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import "../styles/Main.css";
import Home from "./home";
import Footer from "./Footer";
import ChickenRecipes from "./chickenRecipes";
import Login from "./Login";
import UpdateRecipe from "./UpdateRecipe";
import WithInHour from "./WithInHour";
import AllRecipes from "./AllRecipes";
import About from "./About";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Bcatrgory from "./Bcatrgory";

import User from "./User";
function Main() {
  const [recipes, setRecipe] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes")
      .then((res) => {
        setRecipe(res.data);
      });
  }, [useParams]);

  console.log(recipes);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="main"
          element={
            <>
              <div className="HTML">
                <>
                  <div className="NavBar">
                    <NavBar
                      user={user}
                      setUser={setUser}
                      recipeData={recipes}
                    />
                  </div>
                  <div className="empty"></div>
                  <Outlet />
                </>
              </div>
            </>
          }
        >
          <Route
            index
            element={
              <div className="Body">
                <h2
                  className="text-center browse "
                  style={{ color: "#ffad60", fontSize: "38px" }}
                >
                  Browse Recipe Categories
                </h2>
                <Categories />
                <RecipesOfTheDay recipeData={recipes} />
                <ChickenRecipes recipeData={recipes} />
                <WithInHour recipeData={recipes} />
                <Footer />
              </div>
            }
          />

          <Route path=":id" element={<Recipe recipeData={recipes} />} />

          <Route
            path="login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="updateRecipe"
            element={<UpdateRecipe user={user} recipeData={recipes} />}
          ></Route>
          <Route path="allrecipes" element={<AllRecipes recipes={recipes} />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacyPolicy" element={<Privacy />} />
          <Route path="category" element={<Bcatrgory recipeData={recipes} />} />
          <Route
            path="user"
            element={<User user={user} recipeData={recipes} />}
          />
          <Route
            path="addrecipe"
            element={<AddRecipe user={user} recipeData={recipes} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
