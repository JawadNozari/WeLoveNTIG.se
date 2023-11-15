import React from "react";

const links = [
  {
    name: "SchoolSoft",
    url: "https://sms.schoolsoft.se/nti/sso",
    icon: "fa-bell-school",
  },
  {
    name: "Classroom",
    url: "https://classNameroom.google.com/h",
    icon: "fa-school",
  },
  {
    name: "Schema",
    url: "https://web.skola24.se/timetable/timetable-viewer/it-gymnasiet.skola24.se/NTI%20S%C3%B6dert%C3%B6rn/",
    icon: "fa-alarm-clock",
  },
  {
    name: "Provschema",
    url: "https://provschema-elev.netlify.app/",
    icon: "fa-pencil",
  },
  {
    name: "Outlook",
    url: "https://outlook.com/ntig.se",
    icon: "fa-mailbox",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/",
    icon: "fa-mail-bulk",
  },
  {
    name: "Matteboken",
    url: "https://www.matteboken.se/",
    icon: "fa-calculator",
  },
  {
    name: "Fysikboken",
    url: "https://www.khanacademy.org/science/physics",
    icon: "fa-atom",
  },
  {
    name: "Kemiboken",
    url: "https://www.khanacademy.org/science/chemistry",
    icon: "fa-flask",
  },
  {
    name: "Studieteknik",
    url: "https://www.gymnasieguiden.se/reportage/tips-om-studieteknik",
    icon: "fa-book",
  },
  {
    name: "Skrivguiden",
    url: "https://skrivguiden.se/",
    icon: "fa-paragraph",
  },
  {
    name: "Lunch",
    url: "https://skolmaten.se/nti-gymnasiet-sodertorn/",
    icon: "fa-cheese",
  },
];

export default function Index() {
  return (
    <div>
      <div className="table">
        <div className="text-lg">
          <h1 id="typedtext">Hej</h1>
        </div>
        <div className="table">
          {links.map((link) => (
            <div className="table-cell" key={link.name}>
              <a target="_blank" href={link.url} className={`fa ${link.icon}`}>
                <p>{link.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
