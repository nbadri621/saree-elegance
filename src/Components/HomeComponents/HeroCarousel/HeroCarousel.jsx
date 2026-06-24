import React, { useEffect, useState } from "react";
import "./HeroCarousel.css";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Luxury Silk Sarees",
    subtitle: "Elegance In Every Drape",
    desc: "Premium silk sarees crafted for weddings and celebrations.",
    image:
      "https://imgs.search.brave.com/zDfu-MBEHf4jL3lXSjnOjMYQggF4UOVlnXCsYRRBTWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5rYXJ0bWF4/LmluL2xpdmUvY292/ZXIvNDk1eDY2MC9z/aXRlcy85czE0NU15/WnJXZElBd3BVMEpZ/Uy9wcm9kdWN0LWlt/YWdlcy9icm93bl93/ZWRkaW5nX3dlYXJf/c2F0aW5famFjcXVh/cmRfc2lsa19zYXJl/ZV8xNzcyNjk0ODQw/XzI2NzExLmpwZw",
  },

  {
    title: "Bridal Collection",
    subtitle: "Made For Royal Moments",
    desc: "Exclusive bridal sarees inspired by timeless traditions.",
    image:
        "https://imgs.search.brave.com/3xwJrXz__Mc6FfxV-FY0nmP3WDf5SuoRPBxhsPaHlvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5rYXJ0bWF4/LmluL2xpdmUvY292/ZXIvNDk1eDY2MC9z/aXRlcy85czE0NU15/WnJXZElBd3BVMEpZ/Uy9wcm9kdWN0LWlt/YWdlcy9iZWlnZV9z/b2Z0X3Bpbmtfc2hh/ZGVkX3BlYWNvY2tf/bW90aWZfYmFuYXJh/c2lfc2lsa19kZWxp/Z2h0XzE3NzIxOTU4/NzNfODIxMF9jb3B5/XzMuanBn",
  },

  {
    title: "Designer Sarees",
    subtitle: "Modern Meets Tradition",
    desc: "Luxury designer collections with contemporary fashion.",
    image:
        "https://imgs.search.brave.com/8POfWSVfG98NwuTkRg3JSRTmu1P6v5ufkcxYMUsGKcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGliYXMuaW4vY2Ru/L3Nob3AvZmlsZXMv/OTQ3NzJQXzIuanBn/P3Y9MTc2MzEwODcw/NSZ3aWR0aD0xMDgw",
  },
];

const HeroCarousel = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="modern-carousel">

      <div className="carousel-container">

        {/* LEFT CONTENT */}

        <div className="carousel-left">

          <p className="tag">
            Luxury Saree Collection
          </p>

          <h1>
            {slides[current].subtitle}
          </h1>

          <span>
            {slides[current].desc}
          </span>

          <Link to="/collections">
          <button>
            Explore Collections
          </button>
          </Link>

          {/* DOTS */}

          <div className="dots">

            {slides.map((_, index) => (

              <div
                key={index}
                className={
                  current === index
                    ? "dot active-dot"
                    : "dot"
                }
                onClick={() => setCurrent(index)}
              ></div>

            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="carousel-right">

          <img
            src={slides[current].image}
            alt=""
          />

        </div>

      </div>

    </section>

  );
};

export default HeroCarousel;