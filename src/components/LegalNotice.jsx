import React from "react";

const LegalNotice = () => {
  return (
    <div name="impressum" className="h-screen w-full">
      <div class="mx-auto flex flex-col items-center justify-center h-80 px-4 text-center">
        <h2 class="text-3xl sm:text-7xl md:text-7xl font-bold border-b-4 border-l-4 border-gray-500 pb-4 px-2">
          Impressum
        </h2>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center h-80 px-4 text-center">
        <div className="text-xl sm:text-2xl md:text-2xl pb-4 px-2 font-thin">
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <br />
          <p>
            Daniel Meisterling
            <br />
            Marie-Luise-Flei&szlig;er-Weg 11
            <br />
            84489 Burghausen
          </p>
          <br />
          <h2 className="border-b pb-2">Kontakt</h2>
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
