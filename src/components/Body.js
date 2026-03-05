import React from "react";
import { restaurantList } from "../data/mockData";
import { SearchBar } from "./SearchBar";
import { ResCard } from "./ResCard";

export const Body = () => {
  return (
    <main className="body">
      <SearchBar />
      <div className="res-container" id="restaurants">
        {restaurantList.map((r) => (
          <ResCard key={r.id} resData={r} />
        ))}
      </div>
    </main>
  );
};

