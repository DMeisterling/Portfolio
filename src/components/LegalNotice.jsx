import React from "react";

const LegalNotice = () => {
  return (
    <div
      name="impressum"
      className="h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:to-dark-emerald bg-gradient-to-b  from-slate-200 via-slate-300 to-slate-200"
    >
      <div class="mx-auto flex flex-col items-center justify-center h-80 px-4 text-center">
        <h2 class="text-3xl sm:text-7xl md:text-7xl font-bold border-b-4 border-l-4 border-gray-500 pb-4 px-2">
          Impressum
        </h2>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center h-80 px-4">
        <div className="text-xl sm:text-2xl md:text-2xl pb-4 px-2 font">
          <h2 className="border-b-4 border-gray-500 pb-2 font-bold">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </h2>
          <br />
          <p>
            Daniel Meisterling
            <br />
            Marie-Luise-Flei&szlig;er-Weg 11
            <br />
            84489 Burghausen
          </p>
          <br />
          <h2 className="border-b-4 border-gray-500 pb-2 font-bold">Kontakt</h2>
          <p className="pt-2">
            Telefon: +49 173 8419767
            <br />
            E-Mail: dan-meisterling@t-online.de
          </p>

          <p>
            Quelle: &nbsp;
            <a
              href="https://www.e-recht24.de"
              className="border-b"
              target="_blank"
              rel="noreferrer"
            >
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
