// eslint-disable-next-line
import React, { useEffect } from "react";
import { Tooltip } from "@material-ui/core";

import "../styles/navbar.css";

import { useNavigate, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
var lUser = {};
// var loginUser = window.localStorage.getItem("isLoggedIn");
function NavBar({ user, setUser, recipeData }) {
  const navigate = useNavigate();
  useEffect(() => {
    lUser = JSON.parse(window.localStorage.getItem("Luser"));
    setUser(lUser);
    console.log("lUser:", lUser);
  }, []);
  function handleAdd(event) {
    event.preventDefault();

    if (window.localStorage.getItem("isLoggedIn")) {
      console.log("hi");
      navigate("/main/user");
    } else {
      console.log("bye");
      navigate("/main/login");
    }
  }

  function handleSignOut(event) {
    setUser({});
    window.localStorage.removeItem("luser");
    window.localStorage.removeItem("isLoggedIn");
    navigate("/main");
    navigate(0);
  }

  return (
    <div className="whole">
      <nav className="myNav navbar navbar-expand-lg navbar-light ">
        <div className="navbar-brand">
          <Link to="/">
            <img
              className="logo"
              src="/icons/NBP_logo_preview_rev_1.png"
              alt="Nbp Logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse  navbar-collapse row "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  ml-0 col-lg-6 col-md-6 col-sm-6  ">
            <li className="nav-item active first-part-nav ">
              <Link className="nav-link" to="/main">
                <h2 className="content">Home</h2>
              </Link>
            </li>

            <li className="nav-item active first-part-nav ">
              <Tooltip
                title="All Recipes"
                arrow
                enterDelay={300}
                leaveDelay={200}
              >
                <Link className="nav-link" to="/main/allrecipes">
                  <h2 className="content">Recipes</h2>
                </Link>
              </Tooltip>
            </li>
            <li className="nav-item active first-part-nav ">
              <Link className="nav-link" to="/main/about">
                <h2 className="content">About</h2>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav left-nav col-lg-6 col-md-6 col-sm-6 row justify-content-between">
            <li className="nav-item active">
              <SearchBar placeholder="Search Recipes..." data={recipeData} />
            </li>

            <li className="nav-item active">
              {window.localStorage.getItem("isLoggedIn") ? (
                <div className="scnd-part-nav">
                  <div className="user-profile ">
                    <Tooltip
                      title="To user Page"
                      arrow
                      enterDelay={300}
                      leaveDelay={200}
                    >
                      <Link to="/main/user">
                        <img
                          referrerPolicy="no-referrer"
                          className="profile-nav "
                          src={user.picture}
                          alt={user.name}
                        />
                      </Link>
                    </Tooltip>
                  </div>

                  <button
                    className="signOut-btn"
                    onClick={(e) => handleSignOut(e)}
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <button
                  className="signin btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={handleAdd}
                >
                  LogIn
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="hr"></div>
    </div>
  );
}
export default NavBar;
