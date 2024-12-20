import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Find out more about us",
};

function page() {
  return (
    <div className="flex justify-center flex-col max-w-[400px] my-20 mx-auto text-center">
      <h1 className="text-3xl text-center">Welcome to our about page</h1>

      <button className="bg-black text-white text-center p-3 rounded-md">
        <Link href={"/about/history"}> Find out more about us </Link>
      </button>
    </div>
  );
}

export default page;
