import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "../styles/recipesOfTheDay.css";

function ChickenRecipes({ recipeData }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="swiper">
      <h1>EASY CHICKEN</h1>
      <p className="recipe-subtitle">
        Quick ane easy chicken recipes.With a melane of herbs and spices,and if
        your favourite meat is chicken.Then you need to try recipes out!
      </p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper recipeswiper"
      >
        {recipeData.map(function (recipe) {
          if (recipe.category === "chicken") {
            return (
              <SwiperSlide className="recipecard" key={recipe.id}>
                <div className="card " data-aos="flip-left">
                  <img className="cardimage" src={recipe.image} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title recipe-name ">{recipe.name}</h5>
                    <p className="card-text recipe-author  ">
                      by {recipe.author}
                    </p>
                    <Link
                      to={`${recipeData.findIndex((x) => x.id === recipe.id)}`}
                    >
                      <button className="read-recipe  btn btn-primary">
                        read recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          } else {
            return null;
          }
        })}
      </Swiper>
    </div>
  );
}

export default ChickenRecipes;
