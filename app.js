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


const ObjData = [
  {
    "id": "750696",
    "name": "Kerala Coastal Restaurant",
    "cloudinaryImageId": "9ae6376f73c5533cf9edf1f96c051d67",
    "locality": "Old Rajinder Nagar",
    "areaName": "CHANKYA PURI",
    "costForTwo": "₹200 for two",
    "cuisines": ["South Indian", "Chinese", "Seafood", "North Indian", "Biryani"],
    "avgRating": 4.1,
    "totalRatingsString": "1.8K+",
    "sla": {
      "deliveryTime": 37,
      "slaString": "35-45 mins",
      "lastMileTravelString": "5.0 km"
    },
    "isOpen": true,
    "ctaLink": "swiggy://menu?restaurant_id=750696&source=collection&query=Biryani",
    "promoted": true
  },
  {
    "id": "1053751",
    "name": "Honest Bowl",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/24/2875df7a-1a18-4d34-bfb4-cff3bd67e44e_0f07b466-4323-4766-b759-929ce6e015fb.jpeg",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹200 for two",
    "cuisines": ["North Indian", "High Protein", "Biryani"],
    "avgRating": 4.0,
    "totalRatingsString": "141",
    "sla": {
      "deliveryTime": 19,
      "slaString": "15-20 mins",
      "lastMileTravelString": "2.0 km"
    },
    "isOpen": true,
    "ctaLink": "swiggy://menu?restaurant_id=1053751&source=collection&query=Biryani",
    "promoted": false
  },
  {
    "id": "768706",
    "name": "Temple street",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/28/882d650a-0d61-4d5a-9601-b2389fabe29c_caa42513-1fea-4d32-9f96-b7b34b4d697b.JPG",
    "locality": "Padam Singh Road",
    "areaName": "Karol Bagh",
    "costForTwo": "₹250 for two",
    "cuisines": ["South Indian", "North Indian", "Street Food", "Fast Food", "Biryani", "Desserts", "Chaat", "Chinese"],
    "avgRating": 4.4,
    "totalRatingsString": "1.6K+",
    "sla": {
      "deliveryTime": 34,
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.5 km"
    },
    "isOpen": true,
    "ctaLink": "swiggy://menu?restaurant_id=768706&source=collection&query=Biryani",
    "promoted": true,
    "veg": true
  },
  {
    "id": "999580",
    "name": "Thalaiva Biryani",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹250 for two",
    "cuisines": ["Biryani", "Mughlai", "Lucknowi", "Hyderabadi", "Kebabs", "Desserts", "Beverages"],
    "avgRating": 4.2,
    "totalRatingsString": "416",
    "sla": {
      "deliveryTime": 17,
      "slaString": "15-20 mins",
      "lastMileTravelString": "2.0 km"
    },
    "isOpen": true,
    "ctaLink": "swiggy://menu?restaurant_id=999580&source=collection&query=Biryani",
    "promoted": false
  },
  {
    "id": "8620",
    "name": "Biryani Blues",
    "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹400 for two",
    "cuisines": ["Biryani", "Hyderabadi", "Lucknowi", "Kebabs", "Desserts", "Beverages"],
    "avgRating": 4.3,
    "totalRatingsString": "32K+",
    "sla": {
      "deliveryTime": 12,
      "slaString": "10-15 mins",
      "lastMileTravelString": "0.3 km"
    },
    "isOpen": true,
    "ctaLink": "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
    "promoted": true,
    "externalGoogleRating": {
      "rating": "4.1",
      "ratingCount": "3.6K+"
    }
  }
]





const ResCard = (props)=> {
    const {Data} = props;
    const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  Data.cloudinaryImageId;
    return (
        <div className="res-card">
            <img className="res_img" src={imgUrl} alt= {Data.name}/>
            <div className="res-info">
            <h3>{Data.name}</h3>
            <h4>{Data.cuisines.join(", ")}</h4>
            <h4>⭐{Data.avgRating} </h4>
            <h4>Delivery:{Data.sla.deliveryTime} Min</h4>
            </div>

        </div>
    )
}







const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="res-container">
                {ObjData.map((resItem)=> (
                  <ResCard key={resItem.id} Data = {resItem}/>
                ))}
               
                

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