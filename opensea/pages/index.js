import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.js";
import Explore from "../components/Explore.js";
import Trending from "../components/Trending.js";
import Collection from "../components/Collection.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Opensea</title>
        <meta name="description" content="Opensea clone" />
        <link rel="icon" href="/favicon.png" />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div className="grad h-[50vh]">
          <Navbar />
          <Explore />
          <Trending />
          <Collection />
        </div>
        {/* Notable Collection */}
      </div>
    </div>
  );
}
