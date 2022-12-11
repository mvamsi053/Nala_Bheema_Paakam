import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AddRecipe.css";
import { useNavigate } from "react-router-dom";
function AddRecipe({ user, recipeData }) {
  const navigate = useNavigate();
  const url = "https://nbp-backend-dce6f6jtu-mvamsi053.vercel.app/recipes";
  const [ingArray, setIngArray] = useState("");
  const defalutImage =
    "https://cdn1.iconfinder.com/data/icons/hotel-restaurant/512/16-512.png";

  const [procArray, setProcArray] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [addrecipe, setAddRecipe] = useState({
    id: "",
    recipeName: "",
    image: "",
    category: "BreakFast",
    authorName: user.name,
    cookingTime: "",
    noOfServings: "",
    about: "",
    ingredients: "",
    procedure: "",
    author_id: "",
  });

  const handlePublish = (e) => {
    e.preventDefault();
    setAddRecipe({
      ...addrecipe,
      author_id: user.email,
      id: Math.max(...recipeData.map((o) => o.id)) + 1,
      ingredients: ingArray.split(/\r?\n/),
      procedure: procArray.split(/\r?\n/),
    });
    setFormErrors(validate(addrecipe));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      addrecipe.author_id
    ) {
<<<<<<< HEAD
      axios
        .post(url, {
          id: addrecipe.id,
          recipeName: addrecipe.recipeName,
          image: addrecipe.image,
          category: addrecipe.category,
          authorName: addrecipe.authorName,
          cookingTime: addrecipe.cookingTime,
          noOfServings: addrecipe.noOfServings,
          about: addrecipe.about,
          ingredients: addrecipe.ingredients,
          procedure: addrecipe.procedure,
          author_id: addrecipe.author_id,
        })
        .then((res) => {
          console.log(res);
          navigate("/main/user");
          navigate(0);
        });

      console.log(addrecipe);
=======
      axios.post(url, {
        id: addrecipe.id,
        recipeName: addrecipe.recipeName,
        image: addrecipe.image,
        category: addrecipe.category,
        authorName: addrecipe.authorName,
        cookingTime: addrecipe.cookingTime,
        noOfServings: addrecipe.noOfServings,
        about: addrecipe.about,
        ingredients: addrecipe.ingredients,
        procedure: addrecipe.procedure,
        author_id: addrecipe.author_id,
      }).then((res) => {
          console.log(res);
          navigate("/main/user");
          navigate(0);
        });   

>>>>>>> 0068d248851d9b9597afae45aa48446e23ca3d47
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const imageRegx = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    if (!values.recipeName) {
      errors.recipeName = "recipe name is required*";
    }
    if (!values.image) {
      errors.image = "please paste image url";
    }
    if (!values.category) {
      errors.category = "please choose category";
    }
    if (!values.authorName) {
      errors.authorName = "author name is required*";
    }
    if (!values.cookingTime) {
      errors.cookingTime = "please provide cooking time";
    }
    if (!values.noOfServings) {
      errors.noOfServings = "please provide no of servings";
    }
    if (!values.about) {
      errors.about = "please say something about your recipe";
    }
    if (!values.ingredients) {
      errors.ingredients = "ingredients are required*";
    }
    if (!values.procedure) {
      errors.procedure = "procedure is required*";
    }
    return errors;
  };
  return (
    <div className="addform">
      <form onSubmit={handlePublish} className="AddRecipeForm">
        <h2 className="addrecipeh2">Add Recipe</h2>
        <div className="txt_field">
          <input
            id="recipeName"
            name="recipeName"
            value={addrecipe.recipeName}
            onChange={(e) =>
              setAddRecipe({ ...addrecipe, recipeName: e.target.value })
            }
            className="input-text"
            type="text"
          />
          <span className="empty-span"></span>
          <label className="txt-label"> Recipe Name</label>
        </div>
        <p className="warning">{formErrors.recipeName}</p>
        <div className="txt_field">
          <input
            className="input-text"
            type="text"
            accept="image/*"
            id="imageurl"
            name="imageurl"
            value={addrecipe.image}
            placeholder="copy original image address"
            onChange={(e) =>
              setAddRecipe({ ...addrecipe, image: e.target.value })
            }
          />
          <span className="empty-span"></span>
          <label className="txt-label"> Image Url</label>
        </div>
        {/* <small className="form-text text-muted">
          should ends with jpg/jpeg/png
        </small> */}
        <p className="warning">{formErrors.image}</p>
        <div className="image-div">
          <img
            className="image-preview"
            src={addrecipe.image || defalutImage}
            alt={addrecipe.recipeName}
          />
          <small className="form-text text-muted">Your image look like</small>
        </div>

        <div className="form-group ">
          <label className="choose">Choose Category:</label>
          <select
            className=" form-control select-category"
            id="category"
            name="category"
            defaultValue={addrecipe.category}
            // value={addrecipe.category}
            onChange={(e) =>
              setAddRecipe({ ...addrecipe, category: e.target.value })
            }
          >
            <option className="myOption" value="breakfast">
              BreakFast
            </option>
            <option className="myOption" value="lunch">
              Lunch
            </option>
            <option className="myOption" value="snacks">
              Snacks
            </option>
            <option className="myOption" value="cakes">
              Cakes
            </option>
            <option className="myOption" value="biryani">
              Biryani
            </option>
            <option className="myOption" value="chicken">
              Chicken
            </option>
            <option className="myOption" value="dessert">
              Dessert
            </option>
          </select>
          <p className="warning"> {formErrors.category}</p>
        </div>

        <div className="txt_field">
          <input
            className=" input-text"
            type="text"
            id="authorname"
            defaultValue={user.name}
            name="authorname"
            // value={addrecipe.authorName}
            onChange={(e) =>
              setAddRecipe({ ...addrecipe, authorName: e.target.value })
            }
          />
          <span className="empty-span"></span>
          <label className="txt-label">Author Name</label>
        </div>
        <p className="warning">{formErrors.authorName}</p>

        <div className="txt_field">
          <input
            id="preptime"
            name="preptime"
            value={addrecipe.cookingTime}
            onChange={(e) =>
              setAddRecipe({
                ...addrecipe,
                cookingTime: e.target.value,
              })
            }
            className=" input-text"
            type="number"
          />
          <span className="empty-span"></span>
          <label className="txt-label">Cooking time (mins)</label>
        </div>
        <p className="warning">{formErrors.cookingTime}</p>
        <div className="txt_field">
          <input
            className=" input-text"
            type="number"
            id="servings"
            name="servings"
            value={addrecipe.noOfServings}
            onChange={(e) =>
              setAddRecipe({ ...addrecipe, noOfServings: e.target.value })
            }
          />
          <span className="empty-span"></span>

          <label className="txt-label">No of Servings</label>
        </div>
        <small className="form-text text-muted">Mention a number</small>

        <p className="warning">{formErrors.noOfServings}</p>
        <div className="txtarea_field">
          <textarea
            name="about"
            id="about"
            value={addrecipe.about}
            onChange={(e) =>
              setAddRecipe({
                ...addrecipe,
                about: e.target.value,
              })
            }
            cols="30"
            rows="5"
            className="textArea"
          ></textarea>
          <label className="txtArea-label">About Recipe</label>
          <span className="empty-span"></span>
        </div>
        <p className="warning">{formErrors.about}</p>
        <div className="txtarea_field  ">
          <textarea
            name="ingredients"
            id="ingredients"
            value={ingArray}
            onChange={(e) => setIngArray(e.target.value)}
            cols="20"
            rows="15"
            className="textArea "
          ></textarea>
          <label className="txtArea-label">Ingredients</label>
          <span className="empty-span "></span>
        </div>
        <small className="form-text text-muted">
          Enter each ingredient in a new line
        </small>
        <p className="warning">{formErrors.ingredients}</p>
        <div className="txtarea_field">
          <textarea
            cols="40"
            rows="10"
            name="procedure"
            id="procedure"
            value={procArray}
            onChange={(e) => setProcArray(e.target.value)}
            className="textArea"
          ></textarea>
          <label className="txtArea-label">Procedure</label>
          <span className="empty-span "></span>
        </div>
        <small className="form-text text-muted">
          Enter each step in a new line
        </small>
        <p className="warning">{formErrors.procedure}</p>
        <button className="publisn-btn">
          <span>Publish </span>
          <span className="material-symbols-outlined">upload</span>
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
// Tested this application with various google accounts.
// Experimented with CRUD operations.
// Tested with some manual testing methods.
// Tested the responsiveness of web site.
