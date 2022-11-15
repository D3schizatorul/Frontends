import React from "react";

import supercute from "../assets/supercute.png";
import otherdeed from "../assets/otherdeed.png";
import bankrupt from "../assets/bankrupt.png";
import rPlanet from "../assets/rPlanet.png";
import kurt from "../assets/kurt.webp";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    trendingRank: "1",
    image: otherdeed,
    title: "Otherdeed for Otherside",
    price: "0.91",
    volume: "318",
    currency: "ETH",
    verified: "true"
  },
  {
    trendingRank: "2",
    image: bankrupt,
    title: "Bankrupt FTX Yacht Club",
    price: "0.01",
    volume: "32",
    currency: "ETH",
    verified: "false"
  },
  {
    trendingRank: "3",
    image: kurt,
    title: "Kurt the Roadie",
    price: "0.06",
    volume: "14",
    currency: "ETH",
    verified: "true"
  },
  {
    trendingRank: "4",
    image: supercute,
    title: "Supercute World",
    price: "0.09",
    volume: "24",
    currency: "ETH",
    verified: "false"
  },
  {
    trendingRank: "5",
    image: rPlanet,
    title: "R Planet - Genesis Collection",
    price: "0.05",
    volume: "6",
    currency: "ETH",
    verified: "true"
  },
];

const Collection = () => {
  return (
    <div className="mx-10 mt-4">
      <div className="flex justify-between font-semibold text-xs text-gray-400 mb-3">
        <p>COLLECTION</p>
        <p>VOLUME</p>
      </div>
      <div>
        {collections.map((collection) => (
          <CollectionCard
            rank={collection.trendingRank}
            image={collection.image}
            title={collection.title}
            price={collection.price}
            volume={collection.volume}
            currency={collection.currency}
            verified={collection.verified}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
