import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 gap-8">
      <article>
        <section>
          <div className="flex flex-col font-inter py-5 lg:flex">
            <h2 className="text-[18px]">Web developer.</h2>
            <h1 className="text-[26px] text-primary">Michael Geraghty</h1>
          </div>
        </section>
        <section>
          <span>
            Front-end web developer graduate, working on my web design & UI/UX
            one project at a time.{" "}
          </span>
        </section>
        <section>
          <div>
            <div className="flex justify-evenly">
              <div className="flex flex-col items-center shadow-sm shadow-primary rounded-full p-4">
                <div>
                  <FontAwesomeIcon icon={faMailBulk} className="w-5"/>
                </div>
                {/* <span className="text-[14px]">E-mail</span> */}
              </div>
              <div className="flex flex-col items-center shadow-sm shadow-primary rounded-full p-4">
                <div>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                {/* <span className="text-[14px]">LinkedIn</span> */}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
