import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/smallProPic.jpg";
import ListItems from "@/components/listItems";
import "./globals.css";

export default function Home() {
  return (
    <main className="grid grid-cols-6 bg-black text-white min-h-screen">
      <div className="col-1 grid grid-cols-12 bg-slate-900 rounded-full mr-20 border-r-4 border-slate-700">
        <div className="bg-slate-900 h-full col-span-6">
          <ListItems />
        </div>{" "}
      </div>
      <div className="col-start-2 col-end-5 justify-center">
        <h1 className="text-center text-6xl font-bold text-blue-400 py-4">
          Zack Ward
        </h1>
        <Image
          className="mx-auto rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={profilePic}
          width={300}
          height={300}
          alt="Picture of the author Zack Ward. He is a large man with a beard, a good smile, and a bright shirt."
        />
        <div className="col-start-2 col-end-5 justify-center bg-slate-900 rounded-full border-x-4 border-slate-700 px-16 py-8 m-4">
          <h2 className="text-center text-2xl mb-4 ">Software Engineer</h2>
          <p className="text-center mb-4">
            I have a Bachelors of Science in Computer Science from Eastern
            Washington University.
          </p>
          <p></p>
          <p className="flex-shrink w-auto text-left pb-4">
            I am eager to find a workplace that values continuous learning and
            development, both personally and professionally. During my six-month
            internship at{" "}
            <Link
              href="https://intellitect.com/"
              className="font-semibold text-blue-400"
            >
              IntelliTect
            </Link>{" "}
            in Spokane, I had the opportunity to work with two teams in a
            Scrum-based agile development environment. This experience taught me
            the importance of effective communication and the value of seeking
            help when needed. I am grateful for the skills I gained during my
            internship and am excited to bring them to a new opportunity.
          </p>
        </div>
      </div>
    </main>
  );
}
