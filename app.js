import React from "react";
import ReactDOM from "react-dom/client";






const Header = () => (
  <div className="header">
    <img
      className="logo"
      src="https://cdn6.f-cdn.com/contestentries/1318421/28372416/5aedd3a7adb01_thumb900.jpg"
      alt="logo"
    />

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Join Us</li>
      </ul>
    </div>
  </div>
);

const ResCard = ()=> {
    return (
        <div className="res-card">
            <img className="res_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ae6376f73c5533cf9edf1f96c051d67"/>
            <div className="res-info">
            <h3>Al-Noor</h3>
            <h4>Start Ratind: 4.4</h4>
            <h4>Biryani , north Indian taste, famous Chaha </h4>
            <h4>Deleviry time : 20 min</h4>
            </div>

        </div>
    )
}


const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>

            </div>

        </div>
    )
}





const AppLayout = () =>(
    <>
<Header/>
<Body/>
</>
);


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)