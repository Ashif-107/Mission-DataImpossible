"use client";

import { questionTwo } from "@/server/actions";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const roboto = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Q2() {
  const [text, setText] = useState("");

  const currentQuestion = 2;
  const totalQuestions = 4;

  return (
    <div
      className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col ${roboto.className}`}
    >
      {/* Stars Background */}
      <div
        className="fixed w-full h-full z-10 animate-twinkle"
        style={{
          background: `
            radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 220px, #fff, rgba(0,0,0,0))
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Vertical Sidebar */}
      <div className="fixed right-0 top-0 h-full w-20 flex items-center justify-center p-6 z-10 text-white gap-8">
        {/* Question Counter */}
        <p className="mt-4 text-lg font-semibold">
          {currentQuestion} - {totalQuestions}
        </p>
        {/* Progress Bar Container */}
        <div className="flex flex-col items-center gap-2">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`h-24 w-1 rounded transition-all ${
                index < currentQuestion ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-white flex flex-col gap-10 justify-center items-center min-h-screen z-20">
        <p className="text-3xl font-bold">
          GUESS THE MOVIE!!
          </p>
        <div className="grid grid-cols-2 gap-7">
          <Image
            src="/Picture2.jpg"
            width={200}
            height={200}
            alt={"secondquestion"}
          ></Image>
          <Image
            src="/Picture3.jpg"
            width={200}
            height={200}
            alt={"secondquestion"}
          ></Image>
          <Image
            src="/Picture4.jpg"
            width={200}
            height={200}
            alt={"secondquestion"}
          ></Image>
          <Image
            src="/Picture5.jpg"
            width={200}
            height={200}
            alt={"secondquestion"}
          ></Image>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Your Answer Here..."
          className="w-[50%] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-900 text-black"
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              const status = await questionTwo(text);
              setText("");
              if (status === "wrong") {
                alert("Wrong Answer! Try Again!");
              }
            }
          }}
        />
      </div>
    </div>
  );
}
