import { Particles } from "@/components/Particles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookIcon } from "lucide-react";
import {Link} from "react-router-dom";
import ReactWrapBalancer from "react-wrap-balancer";


export function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <Particles className="absolute inset-0 -z-10 " />

        <div className="pt-24 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 ">
                <Link
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
                  to="https://github.com/Praashh/MERN-Starter/"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Share your Interview X-Peerience{" "}
                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      &gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-extrabold tracking-tight text-transparent text-5xl md:text-6xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
              data-aos="fade-down"
            >
              <ReactWrapBalancer>
                Tech Interview Experiences for Developers!
              </ReactWrapBalancer>
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
                Get insights into the interview process at top tech companies.
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                to="/create-post"
              >
                Get Started{" "}
                <ArrowLeft className="w-3 h-3 rotate-180 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>

              <Link
                className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-200 hover:text-white bg-zinc-900 hover:bg-opacity-30"
                to="/feed"
              >
                <Button variant={"ghost"}>
                  Read Experiences {" "} <BookIcon className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
