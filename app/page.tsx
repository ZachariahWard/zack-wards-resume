import "./globals.css";
import Image from "next/image";
import profilePic from "@/public/smallProPic.jpg";
import SideCarousel from "@/components/SideCarousel";
import Link from "next/link";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <main className="grid grid-cols-12 bg-black text-white min-h-screen">
      <SideCarousel />
      <div className="order-1 lg:order-2 lg:col-start-4 lg:col-end-10 col-span-full justify-center">
        <h1 className="text-center text-6xl font-bold text-blue-400 py-3">
          Zack Ward
        </h1>
        <Image
          className="mx-auto rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={profilePic}
          priority
          width={300}
          height={300}
          alt="Picture of the author Zack Ward. He is a large man with a beard, a good smile, and a bright shirt."
        />
        <div className="col-start-2 col-end-5 justify-center bg-slate-900 rounded-full border-x-4 border-slate-700 px-12 py-9 m-5">
          <h2 className="text-center text-2xl mb-4 ">Software Engineer</h2>
          <h3 className="text-center content-center flex flex-row flex-wrap-reverse justify-around text-xl mb-4 px-12">
            <Link
              href="mailto:ZackWard.cs@gmail.com"
              className="hover:text-slate-400 text-center content-center pr-2"
            >
              ZackWard.cs@gmail.com
            </Link>
            <Link
              href="tel:15097236395"
              className="whitespace-nowrap hover:text-slate-400 text-center content-center pr-2"
            >
              (509) 723-6395
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Za2TNXbARlLpQe0r2hoFC2UWLSzY3DNv/view?usp=sharing"
              className="whitespace-nowrap hover:text-slate-400 text-center content-center pr-2"
            >
              Resume PDF
            </Link>
          </h3>
          <p className="flex-shrink w-auto mb-4">
            I am a full-time Christian, Dad, and Problem Solver. I am also a
            Software Engineer with experience in full-stack development, client
            communication, web design, the fundamentals of machine learning, and
            asking insightful questions.
          </p>
          <p className="flex-shrink w-auto mb-12">
            I am passionate about acquiring deep knowledge in full-stack
            engineering, UI/UX design, machine learning, and software
            architecture.
          </p>
        </div>
      </div>
      <Link
        href="https://drive.google.com/file/d/1Za2TNXbARlLpQe0r2hoFC2UWLSzY3DNv/view?usp=drive_link"
        passHref
      ></Link>
    </main>
  );
}
