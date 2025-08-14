import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { Check } from "lucide-react";

export const MembershipTypes: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Membership Options
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the membership type that best fits your ministry needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "Individual Ministers",
            price: "₦5,000",
            ukPrice: "£25",
            description: "For individual gospel ministers and church leaders",
            features: [
              "Access to all ACI programs",
              "Networking opportunities",
              "Certificate eligibility",
              "Representation support",
              "Annual renewal required",
            ],
          },
          {
            title: "Churches & Ministries",
            price: "₦25,000",
            ukPrice: "£50",
            description:
              "For churches, ministries, and religious organizations",
            features: [
              "Institutional membership",
              "Multiple minister coverage",
              "Enhanced networking",
              "Priority program access",
              "Organizational representation",
            ],
            popular: true,
          },
        ].map((type, index) => (
          <Card
            key={index}
            className={`border-church-brown/20 hover:shadow-warm transition-all duration-300 relative ${
              type.popular ? "border-church-brown shadow-elegant" : ""
            }`}
          >
            {type.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-church-brown text-white">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-church-brown">
                {type.title}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-church-brown">
                  {type.price}
                </div>
                <div className="text-lg text-muted-foreground">
                  UK: {type.ukPrice}
                </div>
              </div>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {type.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-church-brown flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/membership/application">
                <Button className="w-full">Apply Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
