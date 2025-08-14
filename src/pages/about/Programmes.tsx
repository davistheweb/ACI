import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgrammesParagraphs } from "@/data";

export const Programmes: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Our Programmes
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We engage in various programmes to fulfil our mission and serve the
          global Christian community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProgrammesParagraphs.map((programme, index) => (
          <Card
            key={index}
            className="border-church-brown/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl text-church-brown">
                {programme.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{programme.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
