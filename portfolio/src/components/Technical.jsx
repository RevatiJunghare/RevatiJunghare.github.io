import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js2 from "../assets/js2.png";
import react2 from "../assets/react2.png";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import next from "../assets/next.png";
import mongo from "../assets/mongo.png";
import git2 from "../assets/git2.png";
import tailwind from "../assets/tailwind.png";
import git_rev from "../assets/git_rev.png"
import vscode_rev from "../assets/vscode_rev.png"

const Technical = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js2,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react2,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: typescript,
      title: "Typescript",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: next,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 8,
      src: mongo,
      title: "Mondo DB",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: git_rev,
      title: "GitHub",
      style: "shadow-yellow-400",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-pink-500",
    },
    {
        id: 11,
        src: vscode_rev,
        title: "VS Code",
        style: "shadow-blue-500",
      },
  ];

  return (
    <div
      name="skills" id="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen" style={{height:"160vh"}}>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technical;
