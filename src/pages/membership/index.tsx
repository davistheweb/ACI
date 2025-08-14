import React from "react";
import { Hero } from "./Hero";
import { MembershipRequirements } from "./MembershipRequirements";
import { MembershipBenefits } from "./MembershipBenefits";
import { MembershipTypes } from "./MembershipTypes";
import { FeeStructure } from "./FeeStructure";
import { CallToAction } from "../about/CallToAction";

export const Membership: React.FC = () => (
  <div className="min-h-screen pt-16">
    <Hero />
    <MembershipRequirements />
    <MembershipBenefits />
    <MembershipTypes />
    <FeeStructure />
    <CallToAction />
  </div>
);
