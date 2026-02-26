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
    id: "817359",
    name: "Zahra Restaurant & Cafe",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/4/a005407d-a1b3-4ce3-95b4-82e7fb367781_817359.JPG",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    avgRating: 4.3,
    sla: { deliveryTime: 44 }
  },
  {
    id: "999580",
    name: "Thalaiva Biryani",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
    cuisines: ["Hyderabadi", "Lucknowi", "Kebabs"],
    avgRating: 4.2,
    sla: { deliveryTime: 18 }
  },
  {
    id: "64321",
    name: "Southern Masala",
    cloudinaryImageId: "14527e27a298304dd07904f777372cb5",
    cuisines: ["Andhra", "South Indian"],
    avgRating: 4.1,
    sla: { deliveryTime: 28 }
  },
  {
    id: "1053751",
    name: "Honest Bowl",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/24/2875df7a-1a18-4d34-bfb4-cff3bd67e44e_0f07b466-4323-4766-b759-929ce6e015fb.jpeg",
    cuisines: ["North Indian", "High Protein"],
    avgRating: 4.1,
    sla: { deliveryTime: 17 }
  },
  {
    id: "750696",
    name: "Kerala Coastal Restaurant",
    cloudinaryImageId: "9ae6376f73c5533cf9edf1f96c051d67",
    cuisines: ["Seafood", "South Indian"],
    avgRating: 4.1,
    sla: { deliveryTime: 39 }
  },
  {
    id: "1201370",
    name: "1881 Dum House",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/10/13/9d4313dc-e72c-4915-a52d-ae411890ae62_9ae0f4a1-e997-43c2-8140-6716ad568024.jpg",
    cuisines: ["Awadhi", "Biryani"],
    avgRating: 4.4,
    sla: { deliveryTime: 25 }
  },
  {
    id: "8620",
    name: "Biryani Blues",
    cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
    cuisines: ["Hyderabadi", "Kebabs"],
    avgRating: 4.3,
    sla: { deliveryTime: 13 }
  },
  {
    id: "200001",
    name: "Royal Mughlai Kitchen",
    cloudinaryImageId: "9f2b5f58dfba7bda1ef8c2ef7fbcff42",
    cuisines: ["Mughlai", "North Indian"],
    avgRating: 4.5,
    sla: { deliveryTime: 30 }
  },
  {
    id: "200002",
    name: "Spice Route Express",
    cloudinaryImageId: "v1662113398/restaurant/spice_route",
    cuisines: ["Biryani", "Chinese"],
    avgRating: 4.0,
    sla: { deliveryTime: 22 }
  },
  {
    id: "200003",
    name: "Nawab’s Feast",
    cloudinaryImageId: "v1662113398/restaurant/nawab_feast",
    cuisines: ["Lucknowi", "Awadhi"],
    avgRating: 4.6,
    sla: { deliveryTime: 35 }
  },
  {
    id: "200004",
    name: "Tandoori Junction",
    cloudinaryImageId: "v1662113398/restaurant/tandoori_junction",
    cuisines: ["North Indian", "Tandoor"],
    avgRating: 4.2,
    sla: { deliveryTime: 20 }
  },
  {
    id: "200005",
    name: "Urban Biryani Hub",
    cloudinaryImageId: "v1662113398/restaurant/urban_biryani",
    cuisines: ["Biryani"],
    avgRating: 3.9,
    sla: { deliveryTime: 26 }
  },
  {
    id: "200006",
    name: "Desi Masala House",
    cloudinaryImageId: "v1662113398/restaurant/desi_masala",
    cuisines: ["North Indian", "Thali"],
    avgRating: 4.1,
    sla: { deliveryTime: 32 }
  },
  {
    id: "200007",
    name: "Bombay Spice Kitchen",
    cloudinaryImageId: "v1662113398/restaurant/bombay_spice",
    cuisines: ["Street Food", "Biryani"],
    avgRating: 4.3,
    sla: { deliveryTime: 24 }
  },
  {
    id: "200008",
    name: "The Royal Dum Biryani",
    cloudinaryImageId: "v1662113398/restaurant/royal_dum",
    cuisines: ["Hyderabadi", "Mughlai"],
    avgRating: 4.7,
    sla: { deliveryTime: 27 }
  }
];






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







const Body = () => {
  console.log("Total restaurants:", ObjData.length);

  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {ObjData.map((resItem) => (
          <ResCard key={resItem.id} Data={resItem} />
        ))}
      </div>
    </div>
  );
};





const AppLayout = () =>(
    <>
<Header/>
<Body/>
</>
);


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)