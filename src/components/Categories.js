import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/categories.css";
import { Link } from "react-router-dom";
import { Pagination, Navigation, Autoplay } from "swiper";
import categoryData from "./categorydata";

function Categories() {
  const handleCategory = (id) => {
    localStorage.setItem("catName", id);
    console.log(id);
  };
  return (
    <div className="Category ">
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
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {categoryData.map((category) => {
          return (
            <SwiperSlide className="image " key={category.id}>
              <Link to="category" className="cat-link">
                <img
                  src={category.img}
                  className="category-image"
                  alt={category.name}
                  type="button"
                  onClick={() => handleCategory(category.category)}
                />
                <h3>{category.name}</h3>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Categories;
