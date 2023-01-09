import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { list350, list500, list600 } from "./PackageData";
import ProductCard from "./ProductCard";
import useBreakpoint from "../../hook/useBreakpoint";
import { Typography } from "@mui/material";
const ProductSwiper = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const breakpoint = useBreakpoint();
  return (
    <Fragment>
      <Typography
        color="text.primary"
        variant="h5"
        style={{
          fontFamily: "IBM Plex Sans Thai",
        }}
      >
        ขนาดบรรจุ 350 cc
      </Typography>
      <Swiper
        style={{ paddingBottom: "32px" }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={breakpoint < 600 ? 1 : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {list350.map((detail) => (
          <SwiperSlide key={detail.id}>
            <ProductCard detail={detail} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography
        color="text.primary"
        variant="h5"
        style={{
          fontFamily: "IBM Plex Sans Thai",
        }}
      >
        ขนาดบรรจุ 500 cc
      </Typography>
      <Swiper
        style={{ paddingBottom: "32px" }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={breakpoint < 600 ? 1 : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {list500.map((detail) => (
          <SwiperSlide key={detail.id}>
            <ProductCard detail={detail} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography
        color="text.primary"
        variant="h5"
        style={{
          fontFamily: "IBM Plex Sans Thai",
        }}
      >
        ขนาดบรรจุ 600 cc
      </Typography>
      <Swiper
        style={{ paddingBottom: "32px" }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={breakpoint < 600 ? 1 : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {list600.map((detail) => (
          <SwiperSlide key={detail.id}>
            <ProductCard detail={detail} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default ProductSwiper;
