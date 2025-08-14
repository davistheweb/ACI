import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MembershipBenefitsParagraphs } from "@/data";

export const MembershipBenefits: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Membership Benefits
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enjoy comprehensive support and opportunities as part of our global
          network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MembershipBenefitsParagraphs.map((benefit, index) => (
          <Card
            key={index}
            className="text-center border-church-brown/20 hover:shadow-warm transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-center text-church-brown mb-4">
                {benefit.icon}
              </div>
              <CardTitle className="text-xl text-church-brown">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {benefit.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
