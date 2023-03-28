import React from "react";
import HeroImage from "../assets/heroImage.png";

const LegalNotice = () => {
  return (
    <div name="impressum" className="h-screen w-full">
      <div class="fit mx-auto flex flex-col items-center justify-center h-80 px-4 text-center">
        <h2 class="text-3xl sm:text-7xl md:text-7xl font-bold border-b-4 border-l-4 border-gray-500 pb-4 px-2">
          Impressum
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center max-w-lg w-full">
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
