import React from "react";
import Options from "../Options/Options";

const Financial = (props) => {
  const options = [
    {
      name: "General",
      handler: props.actionProvider.approachInvesting,
      value: 0,
      id: 1,
    },
    {
      name: "Retirement",
      handler: props.actionProvider.approachInvesting,
      value: 1,
      id: 2,
    },
    {
      name: "Children",
      handler: props.actionProvider.approachInvesting,
      value: 2,
      id: 3,
    },
    {
      name: "Vacation",
      handler: props.actionProvider.approachInvesting,
      value: 3,
      id: 4,
    },
  ];

  return <Options options={options} />;
};

export default Financial;
