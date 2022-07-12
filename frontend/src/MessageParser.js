import axios from 'axios';

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {
      // mssgs.push(message);
      console.log(message);
      message = message.toLowerCase();
  
      // if(/^([a-zA-Z\s]+)$/.test(lowercase)){
      //   this.actionProvider.askEmail();
      // }
      // if(lowercase.includes("@") && lowercase.includes(".com")){
      //   this.actionProvider.askAge();
      // }
      // if(/^([0-9]+)$/.test(lowercase)){
      //     this.actionProvider.typeofGender();
      // }
      // if(lowercase.includes("2x2")){
      //   this.actionProvider.typeofGender();
      // }

      if(/^([a-zA-Z\s]+)$/.test(message)){
        if(message.includes("suggest") || message.includes("fund") || message.includes("mutual fund")){
          if(message.includes("elss") || message.includes("tax saving")){
            this.actionProvider.suggestELSSFunds();
          }
          else if(message.includes("debt")){
            this.actionProvider.suggestDebtFunds();
          }
          else if(message.includes("large")){
            this.actionProvider.suggestLargeCapFunds();
          }
          else if(message.includes("flexi")){
            this.actionProvider.suggestFlexiCapFunds();
          }
          else if(message.includes("mid")){
            this.actionProvider.suggestMidCapFunds();
          }
          else if(message.includes("multi")){
            this.actionProvider.suggestMultiCapFunds();
          }
          else if(message.includes("small ")){
            this.actionProvider.suggestSmallCapFunds();
          }
          else if(message.includes("focused")){
            this.actionProvider.suggestFocusedCapFunds();
          }
          else if(message.includes("sectorial") || message.includes("thematic")){
            this.actionProvider.suggestSectorialFunds();
          }
          else if(message.includes("value") ){
            this.actionProvider.suggestValueFunds();
          }
          else if(message.includes("contra") ){
            this.actionProvider.suggestContraFunds();
          }
          else if(message.includes("dividend") ){
            this.actionProvider.suggestDividendFunds();
          }
        }
        else{
        this.actionProvider.askEmail();
        }
      }
      if(message.includes("@") && message.includes(".com")){
        this.actionProvider.askAge();
      }
      if(/^([0-9,]{6,})$/.test(message)){
        this.actionProvider.financialGoals();
          const value = {value:message.replaceAll(",","")};
          axios.post('/value', value)
      }
      if(/^([0-9\s]+)/.test(message) && message.includes("year")){
        const y = (/^([0-9]+)/.exec(message)[0])
        const years = {years:y};
        axios.post('/predict', years)
        this.actionProvider.replytoQstn();
    }
      if(/^([0-9]{2,3})$/.test(message)){
          this.actionProvider.typeofGender();
          const agee = {agee:message};
          axios.post('/agee', agee)
      }
    }
  }
  
  export default MessageParser;