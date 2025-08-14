import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, CreditCard } from "lucide-react";

export const MembershipRequirements: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-8 text-center">
          Membership Requirements
        </h2>

        <Card className="border-church-brown/20 shadow-warm mb-12">
          <CardContent className="p-8">
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  Membership is open to church leaders and Christian believers
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  Membership can be obtained via introduction by a member or by
                  direct enrollment
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  Open to any believer of the Gospel of the Lord Jesus Christ
                  who believes in the Holy Spirit of God and His Ministry
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  Membership is renewable bi-annually upon payment of designated
                  fee and good testimony of character
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  An identity card (ID card) is issued to all duly registered
                  members
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CreditCard className="w-6 h-6 text-church-brown mt-1 flex-shrink-0" />
                <p>
                  Non-payment of fees and dues constitutes a cancellation of
                  membership
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
