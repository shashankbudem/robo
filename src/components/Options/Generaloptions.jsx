import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Employment",
      handler: props.actionProvider.incomeHandler,
      id: 1,
    },
    {
      name: "Capital gains",
      handler: props.actionProvider.incomeHandler,
      id: 2,
    },
    {
      name: "Business",
      handler: props.actionProvider.incomeHandler,
      id: 3,
    },
    {
      name: "Real Estate",
      handler: props.actionProvider.incomeHandler,
      id: 5,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
