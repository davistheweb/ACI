import React from "react";
import { MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact: React.FC = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-church-brown mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Apostolic Congress International
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-church-brown/20 shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-church-brown flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                International Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-church-brown mt-1" />
                <div>
                  <p className="font-semibold">House of Hope</p>
                  <p>1 Penarth Street, off Ilderton Road</p>
                  <p>London SE15 1TX, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-church-brown" />
                <p>+44 (0) 20 7277 5999</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-church-brown/20 shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-church-brown flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Africa Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-church-brown mt-1" />
                <div>
                  <p className="font-semibold">Jubilee City of Hope</p>
                  <p>Okohia Estate, Opposite Dreamland Hotel Junction</p>
                  <p>New Owerri, Imo State, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-church-brown" />
                <p>+234 808 296 2928</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
);
