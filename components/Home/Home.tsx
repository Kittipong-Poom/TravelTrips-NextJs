"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import AOS from "aos";
import "aos/dist/aos.css";
import LinearProgressCountUp from "@/components/LinearProgressCountUp/LinearProgress";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const loader = async () => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");
    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedHome", "true");
      }, 3200);
      return () => clearTimeout(timer);
    }
  };
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    loader();
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      {loading ? (
        <LinearProgressCountUp />
      ) : (
        <>
          <Hero />
          <Destination />
          <Hotel />
          <WhyChoose />
          <Review />
          <News />
        </>
      )}
    </div>
  );
};

export default Home;
