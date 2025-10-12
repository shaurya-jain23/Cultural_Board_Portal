import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
