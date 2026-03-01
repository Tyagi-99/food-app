import React from "react"
import ReactDOM from "react-dom/client"


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

const restaurant = {
  name: "Al Fahad",
  cuisine: "Biryani, Mughal, North Indian",
  location: "Meerut",
  rating: "4.3",
  deliveryTime: "44 mins",
  image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ae6376f73c5533cf9edf1f96c051d67"
};

const ResCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          className="res-img"
          src={resData.image}
          alt={resData.name}
        />
        <div className="rating-badge">⭐ {resData.rating}</div>
      </div>

      <div className="res-des">
        <h3 className="res-name">{resData.name}</h3>
        <p className="res-cuisine">
          {resData.cuisine}, {resData.location}
        </p>
        <p className="res-time">
          {resData.deliveryTime}
        </p>
      </div>
    </div>
  );
};



const Body = () =>{
  return (
  <div className="body">
    <ResCard resData={restaurant}/>
    <ResCard resData={restaurant}/>
    <ResCard resData={restaurant}/>
    <ResCard resData={restaurant}/>


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









