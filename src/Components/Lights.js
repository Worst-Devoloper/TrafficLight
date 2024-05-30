import React from "react";
import { useState, useEffect } from "react";

const Light = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

const trafficLight = () => {
  const [active, setactive] = useState(Light.yellow);

  useEffect(() => {
    switch (active) {
      case Light.red:
        setTimeout(() => {
          setactive(Light.yellow);
        }, 4000);
        break;
      case Light.yellow:
        setTimeout(() => {
          setactive(Light.green);
        }, 500);
        break;
      case Light.green:
        setTimeout(() => {
          setactive(Light.red);
        }, 3000);
        break;
    }
  }, [active]);

  return (
    <div className="wrapper">
      <div
        className="light red"
        style={active !== Light.red ? { opacity: 0.5 } : null}
      >
        {" "}
        R
      </div>
      <div
        className="light yellow"
        style={active !== Light.yellow ? { opacity: 0.5 } : null}
      >
        {" "}
        Y{" "}
      </div>
      <div
        className="light green"
        style={active !== Light.green ? { opacity: 0.5 } : null}
      >
        {" "}
        G{" "}
      </div>
    </div>
  );
};
export default trafficLight;
