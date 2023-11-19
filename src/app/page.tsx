import Image from "next/image";

export default function Home() {
  return (
    <main className="absolute w-full h-full bg-gradient-to-br from-[#4B0082] via-pink-800 to-[#B1068C] overflow-hidden">
      <div className="p-10 flex justify-center">
        <div className="">
          <div className="">{bubbles()}</div>
          <div className="relative z-20 grid-cols-3 grid sm:grid-cols-4 gap-2 ">
            {links.map((link) => (
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
function bubbles() {
  return (
    <section>
      <div className="absolute w-full h-full overflow-hidden">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </section>
  );
}

const links = [
  {
    name: "SchoolSoft",
    url: "https://sms.schoolsoft.se/nti/sso",
    image: "/resources/schoolsoft.png",
  },
  {
    name: "Classroom",
    url: "https://classroom.google.com/h",
    image: "/resources/classroom.png",
  },
  {
    name: "Schema",
    url: "https://web.skola24.se/timetable/timetable-viewer/it-gymnasiet.skola24.se/NTI%20S%C3%B6dert%C3%B6rn/",
    image: "/resources/skola24.png",
  },
  {
    name: "Provschema",
    url: "https://provschema-elev.netlify.app/",
    image: "/resources/provschema.png",
  },
  {
    name: "Outlook",
    url: "https://outlook.com/ntig.se",
    image: "/resources/outlook.png",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/",
    image: "/resources/gmail.png",
  },
  {
    name: "Matteboken",
    url: "https://www.matteboken.se/",
    image: "/resources/matteboken.png",
  },
  {
    name: "Fysikboken",
    url: "https://www.khanacademy.org/science/physics",
    image: "/resources/fysikboken.png",
  },
  {
    name: "Kemiboken",
    url: "https://www.khanacademy.org/science/chemistry",
    image: "/resources/kemiboken.png",
  },
  {
    name: "Studieteknik",
    url: "https://www.gymnasieguiden.se/reportage/tips-om-studieteknik",
    image: "/resources/studieteknik.png",
  },
  {
    name: "Skrivguiden",
    url: "https://skrivguiden.se/",
    image: "/resources/skrivguiden.png",
  },
  {
    name: "Lunch",
    url: "https://skolmaten.se/nti-gymnasiet-sodertorn/",
    image: "/resources/skolmaten.png",
  },
];
