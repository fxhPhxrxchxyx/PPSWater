import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import ad1 from "../../pic/ppssalogan.jpg";
import ad2 from "../../pic/freeservice.jpg";
import ad3 from "../../pic/produce.jpg";
const AdSwiper = () => {
  return (
    <Swiper
      style={{ paddingBottom: "32px" }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={ad1}
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={ad2}
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={ad3}
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AdSwiper;
