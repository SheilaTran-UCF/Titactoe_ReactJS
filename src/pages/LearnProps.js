import React from "react";
import CardEl from "../components/LearnProps/Card";

const arr = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

const LearnProps = () => {
  return (
    <div className="p-5">
      {arr.map((item, index) => (
        <CardEl text={item} key={index} />
      ))}
    </div>
  );
};

export default LearnProps;
