import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-pink-100">
      <section className="grid grid-cols-2 h-[50vh] items">
        <div className="flex flex-col justify-center items-center gap-3 px-3 ">
          <h1 className=" font-bold text-3xl ">THE BEST URL SHORTNER IN THE MARKET.</h1>
          <p className="text-lg px-50 justify-center">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div className="flex gap-3">
          <Link href="/">
            <button className="bg-pink-500 rounded-lg p-2 py-1 font-bold text-white ">
              Try Now
            </button>

          </Link>
          <Link href="/">
            <button className="bg-pink-500 rounded-lg p-2 py-1 font-bold  text-white">
              Github
            </button>
          </Link>
          </div>
        </div>
        <div className="flex justify-start relative ">
          <Image
            className="mix-blend-darken"
            alt="image of vector"
            src={"/vector1.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
