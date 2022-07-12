import React from "react";
import axios from 'axios';
import styles from "./Options.css";



const Options = ({ options }) => {

  const postingValues = (e) => {
    console.log(e.target.value)
    axios.post('/value', {value:e.target.value})
  };
  const markup = options.map((option) => (
    <button key={option.id} value={option.value} className={styles.option + " btn"} onClick={(e)=>{option.handler();postingValues(e);}}>
      {option.name}
    </button>
  ));

  return <div className={styles.options}>{markup}</div>;
};

export default Options;
