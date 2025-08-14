import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FeeStructure: React.FC = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-6">
          Fee Structure
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparent pricing for all our services and programs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Nigeria Fees */}
        <Card className="border-church-brown/20 shadow-warm">
          <CardHeader>
            <CardTitle className="text-2xl text-church-brown text-center">
              Nigeria Fees (₦)
            </CardTitle>
            <CardDescription className="text-center">
              Fees for ACI Nigeria 2025-2027
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: "Membership Fee", price: "₦5,000" },
                {
                  service: "Bishops (Churches & Ministries) Fee",
                  price: "₦25,000",
                },
                { service: "Ministerial License", price: "₦10,000" },
                { service: "Ordination", price: "₦30,000" },
                { service: "Apostolic Installation", price: "₦50,000" },
                {
                  service: "Ecclesiastic/Bishopric Adoption",
                  price: "₦50,000*",
                },
                { service: "Bishops Consecration", price: "₦200,000**" },
                { service: "Archbishops Enthronement", price: "₦350,000**" },
              ].map((fee, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-church-brown/10 last:border-b-0"
                >
                  <span className="text-muted-foreground">{fee.service}</span>
                  <span className="font-semibold text-church-brown">
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground space-y-2">
              <p>* After membership fee of ₦25,000</p>
              <p>** Including administration and certifications</p>
            </div>
          </CardContent>
        </Card>

        {/* UK Fees */}
        <Card className="border-church-brown/20 shadow-warm">
          <CardHeader>
            <CardTitle className="text-2xl text-church-brown text-center">
              UK Fees (£)
            </CardTitle>
            <CardDescription className="text-center">
              International fees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: "Churches & Ministries", price: "£50" },
                { service: "Ministers", price: "£25" },
                { service: "Ministerial License", price: "£50" },
                { service: "Ordination", price: "£200" },
                { service: "Bishops Consecration", price: "£1,000***" },
                { service: "Archbishops Enthronement", price: "£1,500***" },
              ].map((fee, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-church-brown/10 last:border-b-0"
                >
                  <span className="text-muted-foreground">{fee.service}</span>
                  <span className="font-semibold text-church-brown">
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground space-y-2">
              <p>*** Including Gazetting and Certifications</p>
              <p>
                Academic awards given to qualified students and distinguished
                ministry servants
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
