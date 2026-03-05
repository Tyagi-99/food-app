import React from "react";
import { CDN_URL } from "../data/mockData";

export const ResCard = ({ resData }) => {
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
        <p className="res-time">{resData.deliveryTime}mins</p>
        <p className="rec-cost">{resData.costForTwo}</p>
      </div>
    </div>
  );
};

