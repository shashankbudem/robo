import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
// import Todos from './components/Todos/Todos';
import GeneralOptions from './components/Options/Generaloptions';
import Financial from './components/Options/Financial';
// import Investing from './components/Options/Risktolerance';
import Investingduration from './components/Options/Investingduration';
import Income from './components/Options/Income';
import Gender from './components/Options/Gender';
import Agerange from './components/Options/Agerange';
import Risktolerance from './components/Options/Risktolerance';
import Portfolio from './components/Options/Portfolio';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello User, I'm Your Personalised Financial Advisor, Robo.`),
    createChatBotMessage(`Let us start our journey by letting me know about you.`),
    createChatBotMessage(`What is your Name?`)
  ],
  botName:"ROBO FIRST",
  state: {
    todos:[]
  },
  widgets:[
    {
      widgetName:"options",
      widgetFunc: (props) => <GeneralOptions {...props}/>
    },
    {
      widgetName:"portfolio",
      widgetFunc: (props) => <Portfolio {...props}/>
    },
    {
      widgetName:"fingoals",
      widgetFunc: (props) => <Financial {...props}/>
    },
    {
      widgetName:"typoinvest",
      widgetFunc: (props) => <Risktolerance {...props}/>
    },
    {
      widgetName:"investtime",
      widgetFunc: (props) => <Investingduration {...props}/>
    },
    {
      widgetName:"incomeearn",
      widgetFunc: (props) => <Income {...props}/>
    },
    {
      widgetName:"typgender",
      widgetFunc: (props) => <Gender {...props}/>
    },
    {
      widgetName:"agerng",
      widgetFunc: (props) => <Agerange {...props}/>
    }
  ],

};

export default config;