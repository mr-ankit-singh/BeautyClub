import React from 'react'
import "./Slider.css"
import {Swiper ,SwiperSlide} from "swiper/react"
import { Pagination,Navigation } from 'swiper'
// Import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// Import Products
import {SliderProducts} from "../../data/products"

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper 
        className="mySwiper"
        modules={[Pagination,Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
        {
            SliderProducts.map((slide,i) => (
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}</span>
                        <div style={{cursor:'pointer'}}>Shop Now</div>
                    </div>
                    <img src={slide.img} alt="product" className="img-p"/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Slider
