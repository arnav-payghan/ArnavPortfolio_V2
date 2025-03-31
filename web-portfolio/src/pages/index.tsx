// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { useState } from "react";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import FloatingWords from "@/components/FloatingWords";

export default function IndexPage() {
  const [ghostImage, setGhostImage] = useState("/image-assets/ghostOpenEye.svg");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10 relative">
        <div className="absolute inset-0 z-3 pointer-events-none">
          <FloatingWords />
        </div>
        <div className="relative w-fit z-2">
          <img 
            className="absolute -bottom-2 left-1/3 -translate-x-1/2 sm:-bottom-1 lg:-bottom-1
            transition-transform duration-300 ease-in-out hover:scale-110 w-5 sm:w-12 md:w-20 lg:w-24 rounded-full z-10"
            src={ghostImage}
            onMouseEnter={() => setGhostImage("/image-assets/ghostClosedEye.svg")} 
            onMouseLeave={() => setGhostImage("/image-assets/ghostOpenEye.svg")}
            alt="Ghost"
          />
          <div className={`${title({ size: "main" })} neometric text-center relative z-1 text-base_Black  `}>
            <span className="">
              arnav.  { /* NEED TO MAKE THIS RESPONSIVE */}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-24 translate-y-20 left-1 z-10 flex items-center gap-2 text-white text-sm md:text-base lg:text-lg xl:text-xl">
          <img 
            src="/image-assets/scrollDownArrow.svg" 
            alt="Scroll Down Arrow"
            className="w-1 h-1 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-6 xl:h-6"
          />
          <span className="noirden text-text_Black text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Scroll to view more.
          </span>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10 relative">

      </section>
    </DefaultLayout>
  );
}

