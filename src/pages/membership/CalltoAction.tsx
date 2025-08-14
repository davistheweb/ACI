import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const CalltoAction: React.FC = () => (
  <section className="py-20 bg-church-brown text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Join ACI?
      </h2>
      <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
        Start your journey with Apostolic Congress International today and
        become part of a global network committed to discipling the nations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/membership/application">
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-church-brown"
          >
            Complete Application
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-church-brown"
          >
            Ask Questions
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
