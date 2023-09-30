import React from 'react'
import "../styles/UserDashboard.css"
import { useSelector } from 'react-redux';


export default function UserDashboard() {
const user = useSelector((state)=>state.user.value);

    function DashBoardCard(props){
        return(
            <div className='dash-board-card'>
                <div>{props.icon}</div>
                <h3>{props.Title}</h3>
                <h1><sup>$</sup>{props.value}</h1>
            </div>
        )
    }

   


  return (
    <div>

        <div className='dash-board-card-container'>
            <DashBoardCard icon={<i class="fa-solid fa-chart-line"></i>} Title={"TOTAL PROFITS"} value={user.totalProfit}/>
            <DashBoardCard icon={<i class="fa-solid fa-file-invoice-dollar"></i>} Title={"AVAILABLE BALANCE"} value={user.accountBalance}/>
            <DashBoardCard icon={<i class="fa-solid fa-chart-simple"></i>} Title={"TOTAL INVESTMENTS"} value={user.investmentAmount}/>
            <DashBoardCard icon={<i class="fa-solid fa-comments-dollar"></i>} Title={"CAN WITHDRAW"} value={user.withdrawalableAmount}/>
        </div>

        <div>
        
        </div>

    </div>
  )

}
