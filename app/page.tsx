import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col font-inter pt-[46px] p-4 lg:items-center ">
      <article className="flex min-h-[90svh] flex-col gap-6 xl:gap-16 xl:w-[1024px]">
        <section id="backToTop" className="flex flex-col gap-7">
          <div className="flex flex-col  py-8 lg:flex">
            <h1 className="text-[36px] text-primary font-bold">MGWebs</h1>
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
              <button className="bg-primary text-[22px] hover:bg-dark hover:text-secondary border-secondary text-dark font-bold py-2 px-4 rounded">
                Contact
              </button>
            </Link>
          </div>
        </section>
      </article>
      <article className="flex min-h-[90svh] flex-col gap-6 xl:w-[1024px]">
        <section className="flex flex-col  gap-1">
          <div className="flex flex-col font-inter py-4 lg:flex">
            <h2 className="text-[36px] font-bold text-primary">Projects</h2>
          </div>
          <div className=" xl:w-[60%]">
            <span className="text-[20px] xl:text-[28px]">
              Explore my portfolio and lets turn your vision into a captivating
              reality 🌠
            </span>
          </div>
        </section>
        <section className="flex flex-col justify-center gap-6 xl:flex-row xl:flex-1 xl:items-center">
          <div className="flex flex-col gap-2 xl:flex-grow">
            <span className="text-[#a7a7a7]">BGRSolutions</span>
            <Link
              href="https://bgrsolutions.net"
              className="hover:scale-105 transition active:scale-95"
            >
              <div className="h-[218px] max-w-[385px] xl:h-[292px] xl:max-w-none  hover:border-2 border-primary bg-cover bg-center bg-no-repeat bg-[url('/imgs/bgrsolutions-ss.png')] rounded active:scale-90 transition-all"></div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 xl:flex-grow">
            <span className="text-[#a7a7a7]">CloudNineTenerife</span>
            <Link
              href="https://cloudninetenerife.es"
              className="hover:scale-105 transition active:scale-95"
            >
              <div className="h-[218px] max-w-[385px] xl:h-[292px] xl:max-w-none  hover:border-2 border-primary bg-cover bg-center bg-no-repeat bg-[url('/imgs/cloudnine-ss.png')] rounded active:scale-90 transition-all"></div>
            </Link>
          </div>
        </section>
      </article>
      <article id="contact" className="flex min-h-[90svh] flex-col gap-6 scroll-m-5 xl:w-[1024px]">
        <section className="flex flex-col flex-1 gap-20">
          <div className="flex flex-col font-inter py-5 lg:flex">
            <h2 className="text-[36px] font-bold text-primary">Contact</h2>
            <span className="text-[20px]">Lets work together 🏗️</span>
          </div>

          <div className="flex flex-col flex-1 items-center ">
            <ul className="flex flex-col  w-[80vw] xl:w-full ">
                <Link
                  className="flex hover:text-primary  border-b hover:border-primary transition-all active:text-primary flex-co items-center gap-4"
                  href="mailto:mikeygeraghty@gmail.com"
                >
              <li className="flex justify-between  py-3 px-2 transition-all">
                  <FontAwesomeIcon className="text-[25px]" icon={faEnvelope} />
                  <span className="text-[20px]">Email</span>
              </li>
                </Link>
                <Link
                  className="flex hover:text-primary border-b hover:border-primary  active:text-primary flex-co items-center gap-4"
                  href="https://x.com/michaeldgeraghty"
                >
                  <FontAwesomeIcon className="text-[25px]" icon={faXTwitter} />
              <li className="flex justify-between py-3 px-2 transition-all">
                  <span className="text-[20px]">Twitter</span>
              </li>
                </Link>
                <Link
                  className="flex hover:text-primary border-b hover:border-primary  active:text-primary flex-co items-center gap-4"
                  href="https://linkedin.com/in/michaeldanielgeraghty"
                  target="_blank"
                >
              <li className="flex justify-between  py-3 px-2 transition-all">
                  <FontAwesomeIcon className="text-[25px]" icon={faLinkedin} />
                  <span className="text-[20px]">LinkedIn</span>
              </li>
                </Link>
            </ul>
          </div>
        </section>
        <section className="flex flex-col"></section>
      </article>

      <footer className="rounded-lg m-4 dark:bg-gray-800 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex md:items-center md:justify-between">
          <ul className="flex items-center justify-between flex-1 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                2023 MGWebs
              </span>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#backToTop" className="hover:underline me-4 md:me-6">
                Back To Top
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
