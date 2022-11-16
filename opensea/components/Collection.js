import React from "react";

import supercute from "../assets/supercute.png";
import otherdeed from "../assets/otherdeed.png";
import bankrupt from "../assets/bankrupt.png";
import rPlanet from "../assets/rPlanet.png";
import kurt from "../assets/kurt.webp";
import nyolings from "../assets/nyolings.png";
import ducks from "../assets/ducks.png";
import fudders from "../assets/fudders.webp";
import rockerPunks from "../assets/rockerPunks.png";
import moonbirds from "../assets/moonbirds.png";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    trendingRank: "1",
    image: otherdeed,
    title: "Otherdeed for Otherside",
    price: "0.91",
    volume: "318",
    currency: "ETH",
    verified: "true",
  },
  {
    trendingRank: "2",
    image: bankrupt,
    title: "Bankrupt FTX Yacht Club",
    price: "0.01",
    volume: "32",
    currency: "ETH",
    verified: "false",
  },
  {
    trendingRank: "3",
    image: kurt,
    title: "Kurt the Roadie",
    price: "0.06",
    volume: "14",
    currency: "ETH",
    verified: "true",
  },
  {
    trendingRank: "4",
    image: supercute,
    title: "Supercute World",
    price: "0.09",
    volume: "24",
    currency: "ETH",
    verified: "false",
  },
  {
    trendingRank: "5",
    image: rPlanet,
    title: "R Planet - Genesis",
    price: "0.05",
    volume: "6",
    currency: "ETH",
    verified: "true",
  },
  {
    trendingRank: "6",
    image: nyolings,
    title: "Nyolings",
    price: "0.04",
    volume: "86",
    currency: "ETH",
    verified: "true",
  },
  {
    trendingRank: "7",
    image: ducks,
    title: "Down Market Ducks",
    price: "0.01",
    volume: "2",
    currency: "ETH",
    verified: "false",
  },
  {
    trendingRank: "8",
    image: fudders,
    title: "Fudders by BANKSY",
    price: "0.03",
    volume: "4",
    currency: "ETH",
    verified: "false",
  },
  {
    trendingRank: "9",
    image: rockerPunks,
    title: "RockerPunks",
    price: "0.01",
    volume: "2",
    currency: "ETH",
    verified: "false",
  },
  {
    trendingRank: "10",
    image: moonbirds,
    title: "Moonbirds",
    price: "7.50",
    volume: "46",
    currency: "ETH",
    verified: "true",
  },
];

const Collection = () => {
  return (
    <div className="lg:flex lg:justify-between">
      <div className="lg:w-full mx-6 lg:mx-12 mt-4">
        <div className="flex justify-between font-semibold text-xs text-gray-400 mb-3">
          <p className="w-3/5">COLLECTION</p>
          <div className="xl:w-2/5 xl:flex">
            <p className="hidden xl:block w-full ml-10">FLOOR PRICE</p>
            <p className="xl:w-full xl:flex xl:justify-end">VOLUME</p>
          </div>
        </div>
        <div>
          {collections.map((collection) =>
            collection.trendingRank <= 5 ? (
              <CollectionCard
                rank={collection.trendingRank}
                image={collection.image}
                title={collection.title}
                price={collection.price}
                volume={collection.volume}
                currency={collection.currency}
                verified={collection.verified}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="hidden lg:block w-full mx-6 lg:mx-12 mt-4">
        <div className="flex justify-between font-semibold text-xs text-gray-400 mb-3">
          <p>COLLECTION</p>
          <div className="xl:w-2/5 xl:flex">
            <p className="hidden xl:block w-full ml-10">FLOOR PRICE</p>
            <p className="xl:w-full xl:flex xl:justify-end">VOLUME</p>
          </div>
        </div>
        <div>
          {collections.map((collection) =>
            collection.trendingRank > 5 && collection.trendingRank <= 10 ? (
              <CollectionCard
                rank={collection.trendingRank}
                image={collection.image}
                title={collection.title}
                price={collection.price}
                volume={collection.volume}
                currency={collection.currency}
                verified={collection.verified}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
