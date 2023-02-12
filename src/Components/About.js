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
            <div className="pt-5">
              <h3 className="font-semibold text-lg">A little about me</h3>
              <p className="text-justify text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex gap-4 self-start pt-10 mb-10 lg:mb-0">
              <a href="courses" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-max ">
                Courses
              </a>
              <a href="contact" class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-max ">
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
