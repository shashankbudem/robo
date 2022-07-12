import React from "react";
import Options from "../Options/Options";

const Gender= (props) => {
  const options = [
    {
      name: "Female",
      handler: props.actionProvider.incomeHandler,
      value: "1",
      id: 12,
    },
    {
      name: "Male",
      handler: props.actionProvider.incomeHandler,
      value: "0",
      id: 22,
    },
   
   
  ];

  return <Options options={options} />;
};

export default Gender;