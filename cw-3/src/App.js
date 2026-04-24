import React, { useState } from "react";
import LightSwitch from "./child";   // file name is child.js

function Room() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div>
      <h2>
        {isLightOn ? "The room is bright" : "The room is dark"}
      </h2>

      <LightSwitch isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;