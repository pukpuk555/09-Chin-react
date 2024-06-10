import React from "react";
import NavTwo from "./NavTwo";

function Welcome() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-4xl mb-3">React - Asessment</h3>
        <div className="flex flex-col items-center">
          <NavTwo />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
