import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Avatar from "boring-avatars";
import { paletteArr } from "../components/colorPelette";

const Home: NextPage = () => {
  const [color, setColor] = useState<any>(
    paletteArr[Math.floor(Math.random() * paletteArr.length)]
  );
  const [avatar, setAvatar] = useState<any>({
    ava1: Math.random().toString(),
    ava2: Math.random().toString(),
    ava3: Math.random().toString(),
    ava4: Math.random().toString(),
    ava5: Math.random().toString(),
  });

  const [selectedAvatar, setSelectedAvatar] = useState<any>({
    avatarNameValue: null,
    avatarColorScheme: [],
  });

  const toggleColorPaletteAndAvatar = () => {
    setColor(paletteArr[Math.floor(Math.random() * paletteArr.length)]);
    setAvatar({
      ava1: Math.random().toString(),
      ava2: Math.random().toString(),
      ava3: Math.random().toString(),
      ava4: Math.random().toString(),
      ava5: Math.random().toString(),
    });
  };
  return (
    <div className="h-screen text-center flex flex-col">
      <h1 className="flex-none text-3xl my-4 text-semibold">
        Random Boring Avatar Generator
      </h1>
      <div className=" grow flex flex-col items-center justify-center space-x-2">
        <Head>
          <title>Random Boring</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex items-center justify-center flex-wrap space-x-2">
          <button
            className=" focus:border focus:border-4 focus:border-gray-400 focus:rounded-full"
            onClick={() =>
              setSelectedAvatar({
                avatarNameValue: avatar.ava1,
                avatarColorScheme: color,
              })
            }
          >
            <Avatar
              size={60}
              name={avatar.ava1}
              variant="beam"
              colors={color}
            />
          </button>
          <button
            className=" focus:border focus:border-4 focus:border-gray-400 focus:rounded-full"
            onClick={() =>
              setSelectedAvatar({
                avatarNameValue: avatar.ava2,
                avatarColorScheme: color,
              })
            }
          >
            <Avatar
              size={60}
              name={avatar.ava2}
              variant="beam"
              colors={color}
            />
          </button>
          <button
            className=" focus:border focus:border-4 focus:border-gray-400 focus:rounded-full"
            onClick={() =>
              setSelectedAvatar({
                avatarNameValue: avatar.ava3,
                avatarColorScheme: color,
              })
            }
          >
            <Avatar
              size={60}
              name={avatar.ava3}
              variant="beam"
              colors={color}
            />
          </button>
          <button
            className=" focus:border focus:border-4 focus:border-gray-400 focus:rounded-full"
            onClick={() =>
              setSelectedAvatar({
                avatarNameValue: avatar.ava4,
                avatarColorScheme: color,
              })
            }
          >
            <Avatar
              size={60}
              name={avatar.ava4}
              variant="beam"
              colors={color}
            />
          </button>
          <button
            className=" focus:border focus:border-4 focus:border-gray-400 focus:rounded-full"
            onClick={() =>
              setSelectedAvatar({
                avatarNameValue: avatar.ava5,
                avatarColorScheme: color,
              })
            }
          >
            <Avatar
              size={60}
              name={avatar.ava5}
              variant="beam"
              colors={color}
            />
          </button>
        </div>
        <button
          className="text-white bg-gray-700 rounded px-2 py-2 mx-2 my-6 text-xl hover:bg-gray-900"
          onClick={toggleColorPaletteAndAvatar}
        >
          Random Avatar
        </button>

        {selectedAvatar.avatarNameValue && (
          <div className="flex flex-col items-center">
            <h3 className="my-2">Selected Avatar</h3>
            <button>
              <Avatar
                size={60}
                name={selectedAvatar.avatarNameValue}
                variant="beam"
                colors={selectedAvatar.avatarColorScheme}
              />
            </button>
          </div>
        )}
      </div>
      <footer className="flex-none py-2">
        Made by{" "}
        <a
          className="underline underline-offset-4 hover:decoration-gray-300"
          href="https://logan1x.github.io"
        >
          Khushal Sharma
        </a>
      </footer>
    </div>
  );
};

export default Home;
