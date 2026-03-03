import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItems from "../ProductIteam";

const ProductSlider = (props) => {
  return (
    <div className="productSlider">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItems/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
