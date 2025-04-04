import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "Summer Collection",
      subtitle: "New Arrivals 2024",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2056851839/display_1500/stock-vector--d-yellow-great-discount-sale-background-illustration-of-large-sale-word-with-shopping-cart-gift-2056851839.jpg",
      cta: "Shop Now",
    },
    {
      title: "Winter Sale",
      subtitle: "Up to 50% Off",
      image:
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cta: "Discover Deals",
    },
    {
      title: "Accessories",
      subtitle: "New Trendy Collection",
      image:
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
      cta: "Explore More",
    },
  ];

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative h-[600px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="mb-4 text-4xl font-bold uppercase tracking-wide md:text-6xl">
                      {slide.title}
                    </h2>
                    <p className="mb-8 text-xl md:text-2xl">{slide.subtitle}</p>
                    <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 md:px-10 md:py-4 md:text-base">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots Style */}
      <style jsx global>{`
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: white;
        }
      `}</style>
    </div>
  );
};

// Custom Arrow Components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white bg-opacity-30 p-2 hover:bg-opacity-50 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white bg-opacity-30 p-2 hover:bg-opacity-50 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default Hero;
