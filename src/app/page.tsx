import Image from "next/image";
import links from "./links.json";
import bubbles from "./components/bubbles";
export default function Home() {
  return (
    <main className="absolute w-full h-full bg-gradient-to-br from-[#4B0082] via-pink-800 to-[#B1068C] overflow-hidden">
      <div className="p-10 flex justify-center">
        <div>
          <div className="">{bubbles()}</div>
          <div className="relative z-20 sm:grid-cols-4 lg:grid-cols-6 grid grid-cols-3 gap-2  pb-10">
            {links.map((link: LinkType) => (
              <a
                target="_blank"
                href={link.url}
                className="bg-white border hover:border-teal-400 hover:delay-200 hover:border-1 p-2 rounded-xl h-full flex flex-col justify-between items-center text-center"
                key={link.name}
              >
                <Image className="items-center" src={link.image} alt="image" width={250} height={250} />

                <p className="relative text-black">{link.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

type LinkType = {
  name: string;
  url: string;
  image: string;
};
