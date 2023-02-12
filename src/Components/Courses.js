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
