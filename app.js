import React from "react"
import ReactDOM from "react-dom/client"
import { restaurantList,CDN_URL } from "./mockData"


const Header = () =>{
  return (
    <header className="header">
      <div className="headerInner">
        <img className="ImgLogo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
       
      
       <ul className="menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Join us</li>
        </ul>

      </div>
    </header>
  )
}

const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchBox">
        <input
          type="text"
          className="searchInput"
          placeholder="Search for restaurants and food"
        />
        <span className="searchIcon">🔍</span>
      </div>
    </div>
  );
};



const ResCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          className="res-img"
          src={CDN_URL + resData.imageId}
          alt={resData.name}
        />
        <div className="rating-badge">⭐ {resData.rating}</div>
      </div>

      <div className="res-des">
        <h3 className="res-name">{resData.name}</h3>
        <p className="res-cuisine">
          {resData.cuisines.join(", ")}.{resData.areaName}
        </p>
        <p className="res-time">
          {resData.deliveryTime}mins
        </p>
        <p className="rec-cost">{resData.costForTwo}</p>
      </div>
    </div>
  );
};



const Body = () =>{
  return (
  <div className="body">
      <SearchBar/>
    
  <div className="card-container">
    {restaurantList.map((res)=>(
      <ResCard key={res.id} resData={res}/>
    ))}
   

  </div>
  </div>
  )
}

const AppLayout = () =>{
  return (
    <>
    <Header/>
    <Body/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
  <AppLayout/>
  </>
)









