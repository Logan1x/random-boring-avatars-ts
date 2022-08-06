import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Avatar from "boring-avatars";
import { paletteArr } from "../components/colorPelette";

const Home: NextPage = () => {
  const [color, setColor] = useState<any>(
    paletteArr[Math.floor(Math.random() * paletteArr.length)]
  );

  const toggleColorPalette = () => {
    setColor(paletteArr[Math.floor(Math.random() * paletteArr.length)]);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-x-2">
      <Head>
        <title>Random Boring</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex items-center justify-center  space-x-2">
        <Avatar
          size={60}
          name={Math.random().toString()}
          variant="beam"
          colors={color}
        />
        <Avatar
          size={60}
          name={Math.random().toString()}
          variant="beam"
          colors={color}
        />
        <Avatar
          size={60}
          name={Math.random().toString()}
          variant="beam"
          colors={color}
        />

        <Avatar
          size={60}
          name={Math.random().toString()}
          variant="beam"
          colors={color}
        />
        <Avatar
          size={60}
          name={Math.random().toString()}
          variant="beam"
          colors={color}
        />
      </div>
      <button
        className="text-white bg-gray-700 rounded px-2 py-1 mx-2 my-6 text-xl hover:bg-gray-900"
        onClick={toggleColorPalette}
      >
        Random Avatar
      </button>
    </div>
  );
};

export default Home;
