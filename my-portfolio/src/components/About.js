import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Safad T M.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a college student who is enthusiastic about Flutter development. While pursuing my academic journey, I've taken the initiative to teach myself Flutter, driven by a genuine passion for mobile app development. This self-taught journey has become a parallel track to my formal education, allowing me to balance theoretical knowledge from college courses with practical, hands-on experience in Flutter. It's a fulfilling combination that empowers me to apply what I learn in class to real-world projects. I take pride in my ability to adapt and stay current with industry trends, finding joy in exploring the capabilities of Flutter. This dual commitment, both through self-teaching and formal education, reflects my dedication to mastering Flutter and creating impactful mobile experiences. </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./code.gif"
          />
        </div>
      </div>
    </section>
  );
}