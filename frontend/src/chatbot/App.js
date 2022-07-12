import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
// import { css } from "@emotion/react";

import config from "../config";
import ActionProvider from "../ActionProvider";
import MessageParser from "../MessageParser";

import "./App.css";


function App() {

  return (
    <div className="App">
      
        <Chatbot
          headerText='ROBO FIRST'
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    </div>
  );
}

export default App;