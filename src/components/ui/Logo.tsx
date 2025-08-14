import React from "react";
import { aciLogo } from "@/assets";
export const Logo: React.FC = () => {
  return (
    <div>
      <img
        src={aciLogo}
        alt="Aci logo"
        draggable={false}
        className="w-16 h-14"
      />
    </div>
  );
};
