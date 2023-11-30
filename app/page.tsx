import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-inter flex flex-col p-4 pt-[46px] lg:items-center ">
      <article className="flex min-h-[90svh] flex-col gap-6 xl:w-[1024px] xl:gap-16">
        <section id="backToTop" className="flex flex-col gap-7">
          <div className="flex flex-col  py-8 lg:flex">
            <h1 className="text-[36px] font-bold text-primary">MGWebs</h1>
            <h2 className="text-[26px]">Web development.</h2>
          </div>
        </section>
        <section className="flex flex-1 flex-col gap-4">
          <div className="max-w-[83vw] xl:w-[80%]">
            <span className="text-[26px] xl:text-[28px]">
              Discover sleek and functional web solutions, the perfect blend of
              creativity with code to craft seamless online experiences.
            </span>
          </div>
          <div>
            <Link href="#contact">
              <button className="rounded border-secondary bg-primary px-4 py-2 text-[22px] font-bold text-dark hover:bg-dark hover:text-secondary">
                Contact
              </button>
            </Link>
          </div>
        </section>
      </article>
      <article
        id="projects"
        className="flex min-h-[94svh] flex-col gap-6 xl:w-[1024px]"
      >
        <section className="flex flex-col  gap-1">
          <div className="font-inter flex flex-col py-4 lg:flex">
            <h2 className="text-[36px] font-bold text-primary">Projects</h2>
          </div>
          <div className=" xl:w-[60%]">
            <span className="text-[20px] xl:text-[28px]">
              Explore my portfolio and lets turn your vision into a captivating
              reality 🌠
            </span>
          </div>
        </section>
        <section className="flex flex-col items-center gap-6 xl:flex-1 xl:flex-row xl:items-center">
          <div className="flex w-full flex-col gap-2 xl:flex-grow">
            <span className="text-[#a7a7a7]">BGRSolutions</span>
            <Link
              href="https://bgrsolutions.net"
              className="transition hover:scale-105 active:scale-95"
            >
              <div className="h-[185px] w-full max-w-[385px] rounded border-primary bg-[url('/imgs/bgrsolutions-ss.png')]  bg-contain bg-center bg-no-repeat transition-all hover:border-2 active:scale-90 xl:h-[292px] xl:w-[519px] xl:max-w-none"></div>
            </Link>
          </div>
          <div className="flex w-full flex-col gap-2 xl:flex-grow">
            <span className="text-[#a7a7a7]">CloudNineTenerife</span>
            <Link
              href="https://cloudninetenerife.es"
              className="transition hover:scale-105 active:scale-95"
            >
              <div className="h-[185px] w-full max-w-[385px] rounded border-primary bg-[url('/imgs/cloudnine-ss.png')]  bg-contain bg-center bg-no-repeat transition-all hover:border-2 active:scale-90 xl:h-[292px] xl:w-[519px] xl:max-w-none"></div>
            </Link>
          </div>
        </section>
      </article>
      <article
        id="contact"
        className="flex min-h-[90svh] scroll-m-5 flex-col gap-6 xl:w-[1024px]"
      >
        <section className="flex flex-1 flex-col gap-20">
          <div className="font-inter flex flex-col py-5 lg:flex">
            <h2 className="text-[36px] font-bold text-primary">Contact</h2>
            <span className="text-[20px] xl:text-[28px]">
              Lets work together 🏗️
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center ">
            <ul className="flex w-[80vw]  flex-col xl:w-full ">
              <Link
                className="flex-co flex  items-center  border-b hover:border-primary hover:text-primary active:text-primary"
                href="mailto:mikeygeraghty@gmail.com"
              >
                <li className="flex justify-between gap-2 px-2 py-3 transition-all">
                  <FontAwesomeIcon className="text-[25px]" icon={faEnvelope} />
                  <span className="text-[20px]">Email</span>
                </li>
              </Link>
              <Link
                className="flex-co flex items-center border-b hover:border-primary hover:text-primary active:text-primary"
                href="https://x.com/michaeldgeraghty"
              >
                <li className="flex justify-between gap-2 px-2 py-3 transition-all">
                  <FontAwesomeIcon className="text-[25px]" icon={faXTwitter} />
                  <span className="text-[20px]">Twitter</span>
                </li>
              </Link>
              <Link
                className="flex-co flex items-center border-b hover:border-primary hover:text-primary active:text-primary"
                href="https://linkedin.com/in/michaeldanielgeraghty"
              >
                <li className="flex justify-between gap-2 px-2 py-3 transition-all">
                  <FontAwesomeIcon className="text-[25px]" icon={faLinkedin} />
                  <span className="text-[20px]">LinkedIn</span>
                </li>
              </Link>
            </ul>
          </div>
        </section>
        <section className="flex flex-col"></section>
      </article>

      <footer className="dark:bg-gray-800 m-4 rounded-lg ">
        <div className="mx-auto flex w-full max-w-screen-xl p-4 md:items-center md:justify-between">
          <ul className="text-gray-500 dark:text-gray-400 flex flex-1 items-center justify-between gap-8 text-sm font-medium sm:mt-0">
            <li>
              <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
                2023 MGWebs
              </span>
            </li>
            <li>
              <a href="#backToTop" className="me-4 hover:underline md:me-6">
                Back To Top
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
