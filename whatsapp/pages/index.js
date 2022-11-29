import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Contacts from "../components/Contacts";
import Chat from "../components/Chat";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [activeChat, setActiveChat] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Whatsapp..." />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <div className="md:flex">
        <div className="md:min-w-[45%] md:w-[45%] lg:min-w-[35%] lg:w-[35%] xl:min-w-[30%] xl:w-[30%] 2xl:min-w-[25%] 2xl:w-[25%]">
          <Navbar />
          <Search />
          <Contacts activeChat={activeChat} setActiveChat={setActiveChat} />
        </div>
        <div className="hidden md:flex w-full">
          <Chat activeChat={activeChat} />
        </div>
      </div>
    </div>
  );
}
