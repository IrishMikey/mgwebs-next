import { faMailBulk, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faMailchimp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 pt-[46px] p-4">
      <article className="flex min-h-[82vh] flex-col gap-6">
        <section className="flex flex-col gap-7">
          <div className="flex flex-col font-inter py-8 lg:flex">
            <h1 className="text-[36px] text-primary font-bold">MGWebs</h1>
            <h2 className="text-[26px]">Web development.</h2>
          </div>
          <div className="max-w-[83vw]">
            <span className="text-[26px]">
              Discover sleek and functional web solutions, the perfect blend of
              creativity with code to craft seamless online experiences.
            </span>
          </div>
        </section>
        <section className="flex flex-1 flex-col justify-between">
          <div>
            <Link href="#contact" target="_blank">
              <button className="bg-primary text-[22px] hover:bg-dark hover:text-secondary border-secondary text-dark font-bold py-2 px-4 rounded">
                Contact
              </button>
            </Link>
          </div>
        </section>
      </article>
      <article className="flex min-h-[82vh] flex-col gap-6">
        <section className="flex flex-col flex-1 gap-7">
          <div className="flex flex-col font-inter py-5 lg:flex">
            <h1 className="text-[36px] font-bold">Projects</h1>
          </div>
          <div>
            <span className="text-[20px]">
              Explore my portfolio and let's turn your vision into a captivating
              reality
            </span>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-col">
            <div>CloudNineTenerife</div>
            <Link href="https:www.cloudninetenerife.es">
              <div className="h-[250px] w-[90vw] bg-contain bg-no-repeat bg-[url('/imgs/cloudnine-ss.png')] rounded active:scale-90 transition-all"></div>
            </Link>
          </div>
        </section>
      </article>
      <article className="flex min-h-[82vh] flex-col gap-6">
        <section className="flex flex-col flex-1 gap-7">
          <div className="flex flex-col font-inter py-5 lg:flex">
            <h1 className="text-[36px] font-bold">Contact</h1>
          </div>
          <div>
            <span className="text-[20px]">Lets work together 🏗️</span>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-col">
            <ul className="flex flex-col">
              <li>
                <Link
                  className="flex hover:text-primary active:text-primary flex-co items-center"
                  href="mailto:mikeygeraghty@gmail.com"
                >
                  <FontAwesomeIcon className="text-[42px]" icon={faMailBulk} />
                  <span className="text-[32px]">Email</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex hover:text-primary active:text-primary flex-co items-center"
                  href="https://x.com/michaeldgeraghty"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex hover:text-primary active:text-primary flex-co items-center"
                  href="https://linkedin.com/in/michaeldanielgeraghty"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
