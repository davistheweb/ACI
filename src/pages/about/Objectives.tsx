import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ObjectivesParagraphs } from "@/data";

export const Objectives: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Our Objectives
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          As a network of independent churches, church leaders, and gospel
          ministers, we are committed to these core objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ObjectivesParagraphs.map((objective, index) => (
          <Card
            key={index}
            className="border-church-brown/20 hover:shadow-warm transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="text-church-brown">{objective.icon}</div>
                <CardTitle className="text-lg text-church-brown">
                  {objective.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{objective.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
