import React from "react";
import { Link } from "react-router";
import { aciLogo } from "@/assets";
import { cn } from "@/lib/utils";

export const Logo: React.FC<{
  textColor: "text-white" | "text-church-brown" | "text-church-brown-light";
}> = ({ textColor }) => {
  return (
    <div>
      <Link
        to="/"
        className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
      >
        <div className="relative">
          <img
            src={aciLogo}
            alt="Aci logo"
            draggable={false}
            className="w-16 h-14"
          />
        </div>
        <div className="block">
          <h1
            className={cn(
              "text-xl lg:text-2xl font-bold tracking-tight",
              textColor,
            )}
          >
            ACI
          </h1>
          <p className={cn("text-xs -mt-1 font-medium", textColor)}>
            Apostolic Congress International
          </p>
        </div>
      </Link>
    </div>
  );
};
