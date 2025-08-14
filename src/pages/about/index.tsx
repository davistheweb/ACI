import React from "react";
import { Hero } from "./Hero";
import { AboutACI } from "./AboutACI";
import { Objectives } from "./Objectives";
import { Offices } from "./Offices";
import { CallToAction } from "./CallToAction";

export const About: React.FC = () => (
  <div className="min-h-screen pt-16">
    <Hero />
    <AboutACI />
    <Objectives />
    <Offices />
    <CallToAction />
  </div>
);
