import React from "react";

const LegalNotice = () => {
  return (
    <section className="section-bg w-full px-4 pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-screen-md break-words">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Impressum
        </h1>
        <div className="pt-8 text-lg leading-relaxed sm:text-xl">
          <h2 className="border-b-2 border-emerald-500 pb-2 font-bold">
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
          <h2 className="border-b-2 border-emerald-500 pb-2 font-bold">Kontakt</h2>
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
    </section>
  );
};

export default LegalNotice;
