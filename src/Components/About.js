import React from "react";

const About = () => {
  return (
    <div class="px-6 py-12 h-full md:px-12 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:w-3/4 lg:w-3/4">
        <div class="grid lg:grid-cols-2 lg:gap-12 xl:gap-12 gap-2 items-center">
          <div className="flex flex-col text-left justify-between h-full w-full xl:w-5/6 md:justify-self-start">
            <h1 class="text-xl md:text-3xl xl:text-3xl font-bold tracking-tight">
              Belen Tejedor
              <br />
              <span class="text-pink-500 text-lg">
                Dancer - Coreographer - Model
              </span>
            </h1>
            <div>
              <h3 className="font-semibold text-lg">A little about me</h3>
              <p className="text-justify text-sm">
              Hi there, I'm a professional dancer, born in Argentina and currently living in Madrid - Spain. As a two-time Bachata world champion, I have dedicated my life to perfecting my craft and pushing the boundaries of what's possible on the dance floor.
              </p>
              <p className="text-justify text-sm">
              Now I travel every weekend to events all around the world, where I perform and teach. Furthermore, prominent dance brands have elected to select me as their brand ambassador, bestowing upon me the honor of showcasing their products and serving as the embodiment of their advertising campaigns.
              </p>
              <p className="text-justify text-sm">
              Dancing has always been my greatest passion, and nothing brings me more joy than expressing myself through movement and music.
              </p>              
            </div>
            <div className="flex gap-4 self-start pt-10 mb-10 lg:mb-0">
              <a
                href="courses"
                class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-max "
              >
                Courses
              </a>
              <a
                href="contact"
                class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-max "
              >
                Contact
              </a>
            </div>
          </div>

          <div class="mb-12 h-full lg:mb-0 ">
            <img
              src="/img-about.png"
              class="w-full h-full object-cover rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
