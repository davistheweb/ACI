import React from "react";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { Services } from "./Services";
import { Mission } from "./Mission";
import { Contact } from "./Contact";

export const Home: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Hero />
      <AboutSection />
      <Services />
      <Mission />
      <Contact />
    </div>
  );
};
