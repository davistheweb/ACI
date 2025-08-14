import React from "react";

export const Offices: React.FC = () => (
  <section className="py-20 bg-church-brown text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Offices</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          ACI operates from strategic locations to serve our global network
          effectively.
        </p>
      </div>

      {/* Office List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {[
          {
            title: "International Office",
            lines: [
              "House of Hope",
              "1 Penarth Street, off Ilderton Road",
              "London SE15 1TX, United Kingdom",
            ],
            phone: "+44 (0) 20 7277 5999",
          },
          {
            title: "Africa Office",
            lines: [
              "Jubilee City of Hope",
              "Okohia Estate, Opposite Dreamland Hotel Junction",
              "New Owerri, Imo State, Nigeria",
            ],
            phone: "+234 808 296 2928",
          },
        ].map((office, index) => (
          <div className="text-center" key={index}>
            <h3 className="text-2xl font-bold mb-4 text-church-gold">
              {office.title}
            </h3>
            <div className="space-y-2 opacity-90">
              {office.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="font-semibold">Tel: {office.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
