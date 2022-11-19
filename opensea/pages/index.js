import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.js";
import Explore from "../components/Explore.js";
import Trending from "../components/Trending.js";
import Collection from "../components/Collection.js";
import Notables from "../components/Notables.js";
import Footer from "../components/Footer.js";
import WhatSection from "../components/WhatSection.js";
import WhatCard from "../components/WhatCard.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Opensea</title>
        <meta name="description" content="Opensea clone" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <div className="grad h-[50vh]">
          <Navbar />
          <Explore />
          <Trending />
          <Collection />
          <Notables />
          <WhatSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
