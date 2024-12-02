import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imgUrl } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgUrl.map((imgLink) => {
          return <img src={imgLink} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
