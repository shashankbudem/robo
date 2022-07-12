import React from "react";
import Options from "./Options";

const Risktolerance= (props) => {
  const options = [
    {
      name: "1",
      handler: props.actionProvider.investingTime,
      id: 1,
      value: 1,
    },
    {
      name: "2",
      handler: props.actionProvider.investingTime,
      id: 2,
      value: 2,
    },
    {
      name: " 3",
      handler: props.actionProvider.investingTime,
      id: 3,
      value: 3,
    },
    {
      name: "4",
      handler: props.actionProvider.investingTime,
      id: 4,
      value: 4,
    },
    {
      name: "5",
      handler: props.actionProvider.investingTime,
      id: 5,
      value: 6,
    },
    {
      name: "6",
      handler: props.actionProvider.investingTime,
      id: 6,
      value: 6,
    },
    {
      name: "7",
      handler: props.actionProvider.investingTime,
      id: 7,
      value: 7,
    },
    {
      name: "8",
      handler: props.actionProvider.investingTime,
      id: 8,
      value: 8,
    },
    {
      name: "9",
      handler: props.actionProvider.investingTime,
      id: 9,
      value: 9,
    },
    {
      name: "10",
      handler: props.actionProvider.investingTime,
      id: 10,
      value: 10,
    },
  ];

  return <Options options={options} />;
};

export default Risktolerance;