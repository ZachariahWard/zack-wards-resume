import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/smallProPic.jpg";
import ListItems from "@/components/listItems";
import "./globals.css";

export default function Home() {
  return (
    <main className="grid grid-cols-12 bg-black text-white min-h-screen">
      <div className="order-2 lg:order-1 grid grid-cols-12 col-start-1 lg:col-end-4 col-end-11 bg-slate-900 rounded-full mr-20 border-r-4 border-slate-700">
        <div className="bg-slate-900 flex-initial h-full lg:col-span-4 col-span-4 -mr-16 pl-4 py-2">
          <ListItems />
        </div>
      </div>
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
          <p className="flex-shrink w-auto text-justify mb-4">
            I am a full-time Christian, Dad, and Problem Solver. I am also a
            Software Engineer with experience in full-stack development, client
            communication, web design, the fundamentals of machine learning, and
            asking insightful questions.
          </p>
          <p className="flex-shrink w-auto text-justify mb-12">
            I am passionate about acquiring deep knowledge in full-stack
            engineering, UI/UX design, machine learning, and software
            architecture.
          </p>
        </div>
      </div>
    </main>
  );
}
