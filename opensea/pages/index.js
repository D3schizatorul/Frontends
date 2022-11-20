import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.js";
import Explore from "../components/Explore.js";
import Trending from "../components/Trending.js";
import Collection from "../components/Collection.js";
import Notables from "../components/Notables.js";
import Footer from "../components/Footer.js";
import WhatSection from "../components/WhatSection.js";
import Sidebar from "../components/Sidebar.js";

export default function Home() {
  const [cartModal, setCartModal] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div>
      <Head>
        <title>Opensea</title>
        <meta name="description" content="Opensea clone" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <div className="grad h-[50vh]">
          <Navbar
            setCartModal={setCartModal}
            setHamburgerMenu={setHamburgerMenu}
            hamburgerMenu={hamburgerMenu}
          />
          <CSSTransition
            in={hamburgerMenu}
            appear={true}
            timeout={500}
            classNames="menu-primary"
            exit={true}
            unmountOnExit
          >
            <Sidebar setHamburgerMenu={setHamburgerMenu} />
          </CSSTransition>
          <div className={`${!hamburgerMenu ? "" : "opacity-40"}`}>
            <Explore />
            <Trending />
            <Collection />
            <Notables />
            <WhatSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
