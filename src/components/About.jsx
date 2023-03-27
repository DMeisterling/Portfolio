import React from "react";

const About = () => {
  return (
    <div name="über mich" className="w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Über mich
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem non
          eum corrupti quidem, laborum quo nulla animi nobis a nostrum
          blanditiis. Qui alias omnis culpa nesciunt commodi excepturi,
          aspernatur beatae.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          incidunt at in ratione velit distinctio voluptates pariatur harum,
          labore odit ea amet esse optio deserunt commodi totam! Ea, commodi
          similique repudiandae necessitatibus dicta natus sed, voluptatum
          adipisci id vitae magni nam sequi distinctio mollitia. Odit maiores
          accusantium ipsum enim earum!
        </p>
      </div>
    </div>
  );
};

export default About;
