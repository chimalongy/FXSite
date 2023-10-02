import React from 'react'
import "../styles/DashBoardTransactions.css"
import { useSelector } from 'react-redux';


function DashBoardTransactions() {
    const user = useSelector((state) => state.user.value);
    const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
    const data = user.transactions;
    return (
        <div>


           {data===undefined?(
            <div>
                
                 <h1>You do not have any transactions yet</h1>


            </div>
           ):(<div>
                  <table>
                <tr>

                    <th>Payment For</th>
                    <th>Transaction Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>


                </tr>
                <tr>

                    <td>{data.paymentfor}</td>
                    <td>{data.transactionDate}</td>
                    <td>${data.amount}</td>
                    <td>{data.paymentMethod}</td>
                    <td>{data.confirmed == "FALSE" ? "Not Confirmed" : "Confirmed"}</td>

                </tr>
            </table>
           </div>)}

        </div>
    )
}

export default DashBoardTransactions