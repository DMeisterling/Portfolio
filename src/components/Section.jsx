const Section = ({ id, eyebrow, title, intro, className = "", children }) => {
  return (
    <section id={id} className={`w-full px-4 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-screen-lg">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
