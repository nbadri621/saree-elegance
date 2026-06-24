import React from "react";
import "./AboutUs.css";

import {
  Gem,
  IndianRupee,
  ShieldCheck,
  Truck,
  Sparkles,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: <Gem size={28} />,
    title: "Premium Silk Quality",
    desc: "Handpicked pure silk sarees with rich texture and long-lasting elegance.",
  },

  {
    icon: <IndianRupee size={28} />,
    title: "Affordable Luxury",
    desc: "Luxury designs starting at best prices without compromising quality.",
  },

  {
    icon: <ShieldCheck size={28} />,
    title: "100% Authentic",
    desc: "Verified authentic sarees sourced directly from traditional weavers.",
  },

  {
    icon: <Truck size={28} />,
    title: "Fast Delivery",
    desc: "Quick and safe delivery across India with secure packaging.",
  },

  {
    icon: <Sparkles size={28} />,
    title: "Exclusive Designs",
    desc: "Unique collections you won’t find in regular offline stores.",
  },

  {
    icon: <Leaf size={28} />,
    title: "Sustainable Weaving",
    desc: "Eco-friendly weaving methods supporting artisan communities.",
  },
];

const AboutUs = () => {
  return (
    <section className="about-section">

      <div className="about-header">

        <h2>About Our Saree Collection</h2>

        <p>
          We bring you a perfect blend of tradition, elegance, and modern luxury.
          Each saree is crafted to reflect timeless beauty and premium quality.
        </p>

      </div>

      <div className="about-grid">

        {features.map((item, index) => (
          <div className="about-card" key={index}>

            <div className="icon-box">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AboutUs;