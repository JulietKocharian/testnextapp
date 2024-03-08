import { ScrollToLeft, ScrollToRight, ScrollToTop } from "./arrows/Arrow"

export const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <ScrollToRight/>,
    prevArrow: <ScrollToLeft/>,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          prevArrow: <ScrollToLeft />,
          nextArrow: <ScrollToRight />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          vertical: true,
          slidesToShow: 3,
          draggable: true,
          prevArrow: null,
          slidesToScroll: 1,
          verticalSwiping: true,
          nextArrow: <ScrollToTop/>,
        },
      },
    ],
  };
  