import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://linkedin.com/in/daniel-meisterling",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> Github
        </>
      ),
      href: "https://github.com/DMeisterling",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:dan-meisterling@t-online.de",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-bl-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center lg:w-40 w-36 h-10 lg:px-4 px-2 mr-[-100px] hover:ml-[-100px] hover:rounded-sm duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
