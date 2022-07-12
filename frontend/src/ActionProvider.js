
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    

    incomeHandler=()=>{
        const message=this.createChatbotMessage("Great! what is your approx Investing amount? (Eg., 30,00,000 or 200000 or 500,000)");
        this.setChatBotMessage(message)
    }
    askEmail=()=>{
        const message=this.createChatbotMessage("Please enter your email id to proceed");
        this.setChatBotMessage(message)
    }
    financialGoals=()=> {
        const message=this.createChatbotMessage("What is your primary goal for investing?",{widget:"fingoals",});
        this.setChatBotMessage(message)
    }
    approachInvesting=()=>{
        const message=this.createChatbotMessage("Rate your risk tolerance between 1-10",{widget:"typoinvest",});
        this.setChatBotMessage(message)
    }
    typeofGender=()=>{
        const message=this.createChatbotMessage("Please select your gender",{widget:"typgender",});
        this.setChatBotMessage(message)
    }
    askAge=()=>{
        const message=this.createChatbotMessage("What is your age? (Enter the number)");
        this.setChatBotMessage(message)
    }
    replytoQstn=()=>{
        const message=this.createChatbotMessage("That's great to know! Please wait while we find the best investing solutions for you.",{widget:"portfolio",});
        this.setChatBotMessage(message)
    }
    investingTime=()=>{
        const message=this.createChatbotMessage("Amazing! So How long before you need to cash-in some or all your investments? (Only in years eg., 10 years or 1 year)");
        this.setChatBotMessage(message)
    }
    suggestELSSFunds=()=>{
        const message=this.createChatbotMessage("Mirae Asset Tax Saver Fund-Reg(Growth),IDFC Tax Advt(ELSS) Fund-Reg(Growth), DSP Tax Saver Fund-Reg(Growth), Kotak Tax Saver Fund(Growth)");
        this.setChatBotMessage(message)
    }
    suggestLargeCapFunds=()=>{
        const message=this.createChatbotMessage("ICICI Pru Bluechip Fund(Growth), Mirae Asset Large Cap Fund-Reg(Growth), Nippon India Large Cap Fund(Growth), Axis Bluechip Fund(Growth), HDFC Top 100 Fund(Growth)");
        this.setChatBotMessage(message)
    }
    suggestFlexiCapFunds=()=>{
        const message=this.createChatbotMessage("UTI Flexi Cap Fund-Reg(Growth), SBI Flexicap Fund-Reg(Growth), Franklin India Flexi Cap Fund(Growth), HDFC Flexi Cap Fund(Growth), ICICI Pru Flexicap Fund(Growth)");
        this.setChatBotMessage(message)
    }
    suggestMidCapFunds=()=>{
        const message=this.createChatbotMessage("Axis Midcap Fund(Growth), PGIM India Midcap Opp Fund-Reg(Growth), Kotak Emerging Equity Fund(Growth), Nippon India Growth Fund(Growth), Mirae Asset Midcap Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestDebtFunds=()=>{
        const message=this.createChatbotMessage("ICICI Prudential Banking & PSU Debt Fund(Growth), ICICI Prudential Corporate Bond Fund(Growth), IDFC Banking & PSU Debt Fund_Reg(Growth), Axis Treasury Advantage Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestMultiCapFunds=()=>{
        const message=this.createChatbotMessage("Aditya Birla SL Multi-Cap Fund-Reg(Growth), Invesco India Multicap Fund(Growth), ICICI Pru Multicap Fund(Growth), Edelweiss Flexi Cap Fund-Reg(Growth), Tata Flexi Cap Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestSmallCapFunds=()=>{
        const message=this.createChatbotMessage("Nippon India Small Cap Fund(Growth), Kotak Small Cap Fund(Growth), Axis Small Cap Fund-Reg(Growth), DSP Small Cap Fund-Reg(Growth), SBI Small Cap Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestFocusedCapFunds=()=>{
        const message=this.createChatbotMessage("SBI Focused Equity Fund-Reg(Growth), Mirae Asset Focused Fund-Reg(Growth), Invesco India Focused 20 Equity Fund-Reg(Growth), IIFL Focused Equity Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestSectorialFunds=()=>{
        const message=this.createChatbotMessage("ICICI Pru Banking & Fin Serv Fund(Growth), SBI Banking & Financial Services Fund-Reg(Growth), ICICI Pru Business Cycle Fund(Growth), Mirae Asset Banking and Financial Services Fund-Reg(Growth), Kotak Pioneer Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestValueFunds=()=>{
        const message=this.createChatbotMessage("ICICI Pru Value Discovery Fund(Growth), Tata Equity P/E Fund(Growth), L&T India Value Fund-Reg(Growth), UTI Value Opp Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    suggestContraFunds=()=>{
        const message=this.createChatbotMessage("Invesco India Contra Fund(Growth), SBI Contra Fund-Reg(Growth), Kotak India EQ Contra Fund(Growth)");
        this.setChatBotMessage(message)
    }
    suggestDividendFunds=()=>{
        const message=this.createChatbotMessage("HDFC Dividend Yield Fund-Reg(Growth), ICICI Pru Dividend Yield Equity Fund(Growth), Templeton India Equity Income Fund(Growth), UTI Dividend Yield Fund-Reg(Growth)");
        this.setChatBotMessage(message)
    }
    setChatBotMessage=(message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message]}))
    }
    addMessageToState=(message)=>{
        this.setState(prevState => ({
           ...prevState,
           messages: [...prevState.messages,message],  
        }))
    }
  }
  
export default ActionProvider;