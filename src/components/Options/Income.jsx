import React from "react";
import Options from "../Options/Options";

const Income= (props) => {
  const options = [
    {
      name: "<10,00,000",
      handler: props.actionProvider.financialGoals,
      id: 1,
    },
    {
      name: "10,00,000-20,00,000",
      handler: props.actionProvider.financialGoals,
      id: 2,
    },
    {
      name: ">20,00,000",
      handler: props.actionProvider.financialGoals,
      id: 3,
    },
   
  ];

  return <Options options={options} />;
};

export default Income;