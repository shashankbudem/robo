import React from "react";
import Options from "../Options/Options";


const Agerange = (props) => {
  const options = [
    {
      name: "Below 18",
      handler: props.actionProvider.typeofGender,
      id: 1,
    },
    {
      name: "18-24",
      handler: props.actionProvider.typeofGender,
      id: 2,
    },
    {
      name: "25-40",
      handler: props.actionProvider.typeofGender,
      id: 3,
    },
    {
      name: "40-60",
      handler: props.actionProvider.typeofGender,
      id: 5,
    },
    {
        name: "60 above",
        handler: props.actionProvider.typeofGender,
        id: 6,
      },
  ];

  return <Options options={options} />;
};

export default Agerange;