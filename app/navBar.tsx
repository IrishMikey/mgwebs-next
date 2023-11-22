"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

export default function NavBar() {
  let [isOpen, setIsOpen] = useState(false);

  let [clientHeight, setClientHeight] = useState(Number);
  let [titleFontSize, setTitleFontSize] = useState(24);

  const handleScroll = () => {
    setClientHeight(window.scrollY);
    if (clientHeight > 160) {
      setTitleFontSize(22);
    } else {
      setTitleFontSize(24);
    }
    // console.log(clientHeight)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="fixed z-20 flex w-screen flex-co p-1 px-4 text-darkText bg-dark shadow-md shadow-[#272727] md:flex-row md:items-center md:justify-between lg:px-10">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/"
          style={{
            fontSize: `${titleFontSize}px`,
          }}
          className=" text-[24px] transition-all ease-in-out lg:text-[42px]"
        >
          MGWebs
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 z-10 cursor-pointer text-xl md:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      {/* Moblie nav */}
      <div
        className={
          "fixed top-0 mx-auto flex h-full w-full bg-dark pt-4 transition-all duration-500 ease-in md:hidden " +
          (isOpen ? "left-0" : "left-[-770px]")
        }
      >
        <ul className="flex w-full flex-col gap-8 md:flex-row md:gap-2 ">
          <h4 className="px-8  text-[35px] text-primary">MGWebs</h4>
          <div>
            <li className="duration-400  flex w-full  text-[28px] font-bold uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/"
                className=" block w-full px-8 py-4"
              >
                Home
              </Link>
            </li>
            <li className="duration-400 flex w-full  text-[28px] font-bold uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="#about"
                className=" block w-full px-8 py-4 pointer-events-none"
              >
                About
              </Link>
            </li>
            <li className="duration-400  flex w-full  text-[28px] font-bold uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="#tools"
                className=" block w-full px-8 py-4 pointer-events-none"
              >
                Tools
              </Link>
            </li>
            <li className="duration-400  flex w-full text-[28px] font-bold uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="#Contact"
                className=" block w-full px-8 py-4 pointer-events-none"
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="flex justify-evenly">
                <Link target="_blank" href="mailto:mikeygeraghty@gmail.com">
                  <div className="flex flex-col items-center shadow-sm shadow-primary rounded-full p-4">
                    <FontAwesomeIcon icon={faMailBulk} className="w-5" />
                    {/* <span className="text-[14px]">E-mail</span> */}
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/michaeldanielgeraghty/"
                >
                  <div className="flex flex-col items-center shadow-sm active:shadow-primary rounded-full p-4">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </Link>
              </div>
            </li>
          </div>
        </ul>
      </div>
      {/* Nav */}
      <div className="h-full">
        <ul className="hidden h-full gap-2 md:flex md:flex-row md:justify-between lg:gap-8  ">
          <li className="duration-600  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in hover:bg-darkText hover:text-primary">
            <Link href="/" onClick={() => setTitleFontSize(36)}>
              Home
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all  ease-in-out hover:bg-darkText hover:text-primary">
            <Link href="#about" className="pointer-events-none ">
              About
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
            <Link href="#tools" className="pointer-events-none ">
              Tools
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
            <Link href="#projects" className="pointer-events-none ">
              Projects
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in-out hover:bg-darkText hover:text-primary">
            <Link href="#contact" className="pointer-events-none ">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
