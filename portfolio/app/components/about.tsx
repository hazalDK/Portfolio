"use client";
import Image from "next/image";
import me from "../../public/me.jpg";

export default function About() {
  return (
    <>
      <div className="mt-30 flex flex-col md:flex-row justify-center items-center max-w-4xl w-full m-auto px-4">
        <a href="about">
          {/* Image */}
          <Image
            className="border border-black border-8 rounded-full mb-6 md:mb-0"
            width={400}
            height={400}
            src={me}
            alt="Profile picture"
          />

          {/* Text Content */}
          <div className="text-black text-center md:text-left md:ml-6">
            <p className="text-4xl font-extrabold mb-2">Hello!</p>
            <p className="text-2xl font-extrabold mb-4">A Bit About Me</p>
            <p className="text-lg md:text-xl mb-4">
              I am a software engineer who has worked a year as a Junior
              Software Engineer at Dunelm and I am currently working on my
              passion projects such as the pixel art game I am developing with a
              team for a book as a fan project and doing some freelance work
              developing websites
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
