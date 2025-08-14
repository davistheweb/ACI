import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const Mission: React.FC = () => (
  <section className="py-20 bg-church-brown text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          We are truly convinced that God's will is that all members of His
          Church should be united in discipline through the operation of the
          Holy Spirit and the leadership of the Apostles.
        </p>
        <p>
          We affirm that the final act of the Holy Spirit before the second
          coming of our Lord Jesus Christ will result in the preaching of the
          Gospel of the Kingdom of God for a witness to all nations, the nurture
          and discipling of the members of the body of Christ, and the Spiritual
          Unity of the Church body on earth under the Lordship of Jesus Christ
          our King and Saviour.
        </p>
      </div>
      <div className="mt-12">
        <Link to="/about">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-church-brown"
          >
            Learn More About ACI
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
