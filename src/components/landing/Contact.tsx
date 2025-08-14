import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export const Contact: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
        Ready to Join Our Network?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Become part of a global community of church leaders and ministers
        committed to discipling the nations through faith and love.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/membership">
          <Button
            //  variant="churchPrimary"
            size="lg"
          >
            Join ACI Today
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            // variant="churchOutline"
            size="lg"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
