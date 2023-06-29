"use client";
import { signOut } from "next-auth/react";
const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-3xl">Hi User!</h1>
      <button className="bg-sky-500 text-white p-4 rounded-lg" onClick={() => signOut()}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
