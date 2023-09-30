import RegistrationForm from "./components/RegistrationForm";
import Loginform from "./components/Loginform";
import PasswordReset from "./components/PasswordReset";
import Footer from "./components/Footer";
import Brokers from "./routes/Brokers";
import AutoPilotpro from "./routes/AutoPilotpro";
import Support from "./routes/Support";
import Checkout from "./routes/Checkout";
import General from "./routes/General";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../src/routes/Home";
import PlansPage from "./routes/PlansPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MultipurposePage from "./routes/MultipurposePage";
import AccountPage from "./routes/AccountPage";
import DashBoard from "./routes/DashBoard";
import LogComponent from "./components/LogComponent";
import LogProfile from "./components/LogProfile";
import { useDispatch, useSelector } from 'react-redux'




function App() {

   const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
   const selectedPlan = useSelector((state) => state.selectedPlan.selectedPlan);
   const user = useSelector((state) => state.user.value);

  return (
   
     <Router>
      {/* <DashBoard/> */}
     <div className="App" >
    {/* {generalLoginCheck.toString()}<br/>
    {selectedPlan.toString()}<br/>
    {user.firstname}<br/>
    {user.lastname}<br/>
    {user.email}<br/>
    {user.password}<br/>
    {user.investmentDate}<br/>
    {user.investmentPlan}<br/>
    {user.investmentEnabled}<br/>
    {user.investmentAmount}<br/>
    {user.totalProfit}<br/>
    {user.withdrawalableAmount}<br/>
    {user.accountBalance}<br/> */}
    
    


        
         {generalLoginCheck?(<DashBoard/>):
         (
            <div>
                <Navbar/>
            <Switch>
             <Route exact path="/">
               <Home/>
              </Route>
  
             <Route path="/contact">
                <Support/>
             </Route>
             <Route path="/investment">
                <PlansPage/>
             </Route>
             <Route path="/checkout">
                <Checkout/>
             </Route>
             <Route path="/autopilotpro">
                <AutoPilotpro/>
             </Route>
             <Route path="/brokers">
                <Brokers/>
             </Route>
             <Route path="/accountpage">
                <AccountPage/>
             </Route>
             
              
            </Switch> 
           </div>
         )}
        
        
      </div>
     </Router>
    
    
  );
}

export default App;
