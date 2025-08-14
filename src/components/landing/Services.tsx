import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { ServicesContent } from "@/data";

export const Services: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive services to support the growth and
          development of church leaders and Christian ministries worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ServicesContent.map((service, index) => (
          <Card
            key={index}
            className="border-church-brown/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl text-church-brown">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {service.description}
              </CardDescription>
              <Link to={service.link}>
                <Button
                  // variant="churchOutline"
                  size="sm"
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
