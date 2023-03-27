import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Kontakt
          </p>
          <p className="py-6">Kontaktieren Sie mich</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ee69fc10-2066-4b66-857d-707c186d2845"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name eingeben"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email eingeben"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Nachricht eingeben"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
