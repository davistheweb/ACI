import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Features } from "@/data";

export const AboutSection: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          What is Apostolic Congress International?
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Apostolic Congress International is a non-governmental organisation,
          Global inter-Denominational Christian organisation. It is a network
          comprising of independent church leaders and ministers of the gospel
          with similar doctrinal leaning. The network has its international head
          office at London England. The major task before the organisation is to
          provide apostolic leadership to churches, ministries, and Governmental
          officials to enable them to fulfil their God-given roles.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Features.map((feature, index) => (
          <Card
            key={index}
            className="text-center border-church-brown/20 hover:shadow-warm transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-center text-church-brown mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-xl text-church-brown">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
