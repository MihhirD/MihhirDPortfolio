import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FullStack Development",
          "AWS | IAM | Practitioner",
          "MERN Stack Developer",
          "Product Management",
          "Consultancy",
          "Strategy Operator",
          "Team Management",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
