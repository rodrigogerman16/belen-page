import React from "react";

const Courses = () => {
  return (
    <div className="px-6 py-12 h-full md:px-12 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:w-3/4 lg:w-3/4">
        <div className="grid lg:grid-cols-2 lg:gap-12 xl:gap-12 gap-2 items-center">
          <div className="mb-12 h-full lg:mb-0 ">
            <video
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src="/courses.mp4"
              muted
              loop
              autoPlay
            />
          </div>
          <div className="flex flex-col text-center justify-between h-full w-full xl:w-5/6 md:justify-self-end md:text-right">
            <span className="text-pink-500 text-lg md:text-xl font-bold">
              “You are never too old to set another goal or to dream a new
              dream.”
            </span>

            <h1 className="text-xl font-semibold tracking-tight">
              - Malala Yousafzai
            </h1>
            <div className="pt-5">
              <h3 className="font-semibold text-lg">What you will learn?</h3>
              <p className="text-justify text-sm">
                The courses may focus on mastering the basic steps, improving
                posture and alignment, and learning to move with rhythm and
                musicality. As students progress, they may also work on more
                advanced skills such as turns, jumps, and partner work.
              </p>

              <p className="text-justify text-sm">
                In addition to physical skills, dance courses may also focus on
                cultivating creativity, expression, and performance skills.
                Students may learn how to tell a story through dance, interpret
                music, and connect with their audience. Dance courses offer a
                fun and engaging way to improve physical fitness, build
                confidence, and express oneself through movement.
              </p>

              <p className="text-justify text-sm">
                Overall, dance courses can vary depending on the level, style,
                and goals of the students. But they all share a common objective
                of helping students improve their dance skills and develop their
                unique style of movement. Whether you are a beginner or an
                experienced dancer, taking a dance course is a great way to
                learn new techniques, challenge yourself, and explore the world
                of dance.
              </p>
            </div>
            <div className="flex gap-4 self-center md:self-end pt-10 mb-10 lg:mb-0">
              <a
                href="references"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-max "
              >
                References
              </a>
              <a
                href="contact"
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-max "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
