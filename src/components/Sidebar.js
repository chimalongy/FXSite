import React ,{useState}from 'react'
import "../styles/Sidebar.css"

export default function Sidebar() {
    let [showSidebar, setShowSideBar]= useState(false);
  function  handleShowSideBar(){
    setShowSideBar(true);
  }
  return (
  
         <div className={showSidebar?"sidebar-container-on":"sidebar-container-off"}>
        <h1>Side Bar</h1>
        <button onClick={setShowSideBar(false)}>Cancel</button>
    </div>
    
  )
}
