import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AddRecipe.css";
import { useNavigate } from "react-router-dom";
function UpdateRecipe({ user, recipeData }) {
  const navigate = useNavigate();
  const defalutImage =
    "https://cdn1.iconfinder.com/data/icons/hotel-restaurant/512/16-512.png";

  const [ingArray, setIngArray] = useState("");
  const [procArray, setProcArray] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const updateRecipe = recipeData[localStorage.getItem("ID")];
  console.log(updateRecipe);
  const url = `https://safe-beach-82078.herokuapp.com/recipes/${updateRecipe._id}`;

  const [addrecipe, setAddRecipe] = useState({
    id: updateRecipe.id,
    recipeName: updateRecipe.name,
    image: updateRecipe.image,
    category: updateRecipe.category,
    authorName: updateRecipe.author,
    cookingTime: updateRecipe.cookingTime,
    noOfServings: updateRecipe.servings,
    about: updateRecipe.about,
    ingredients: updateRecipe.ingredients,
    procedure: updateRecipe.process,
    author_id: updateRecipe.author_id,
  });

  const handlePublish = (e) => {
    e.preventDefault();

    setFormErrors(validate(addrecipe));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      addrecipe.author_id
    ) {
      axios.put(url, {
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
      });

      console.log(addrecipe);
      navigate("/main/user");
      navigate(0);
    }
  }, [formErrors]);

  const validate = (values) => {
    const imageRegx = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    const errors = {};
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
        <h2 className="addrecipeh2">Update Recipe</h2>
        <div className="txt_field">
          <input
            id="recipeName"
            name="recipeName"
            defaultValue={addrecipe.recipeName}
            // value={addrecipe.recipeName}
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
            defaultValue={addrecipe.image}
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
            defaultValue={addrecipe.authorName}
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
            defaultValue={addrecipe.cookingTime}
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
            defaultValue={addrecipe.noOfServings}
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
            defaultValue={addrecipe.about}
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
            defaultValue={addrecipe.ingredients}
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
            defaultValue={addrecipe.procedure}
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
          <span>Update </span>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </form>
    </div>
  );
}

export default UpdateRecipe;
