import React from "react";
import Options from "../Options/Options";

const Investingduration= (props) => {
  const options = [
    {
      name: "1-20 years",
      handler: props.actionProvider.replytoQstn,
      id: 1,
    },
    {
      name: "20-40 years",
      handler: props.actionProvider.replytoQstn,
      id: 2,
    },
    {
      name: "40-60 years",
      handler: props.actionProvider.replytoQstn,
      id: 3,
    },
    {
      name: "60-80 years",
      handler: props.actionProvider.replytoQstn,
      id: 4,
    },
   
  ];

  return <Options options={options} />;
};

export default Investingduration;
