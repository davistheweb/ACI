import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const CallToAction: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
        Join Our Global Network
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Become part of a global community committed to advancing the unity of
        Christian faith and discipling the nations through apostolic leadership.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/membership">
          <Button
            // variant="churchPrimary"
            size="lg"
          >
            Apply for Membership
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            // variant="churchOutline"
            size="lg"
          >
            Get More Information
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
