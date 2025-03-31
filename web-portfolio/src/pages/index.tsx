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
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="relative w-fit">
          <img 
            className="absolute -bottom-2 left-1/3 -translate-x-1/2 sm:-bottom-1 lg:-bottom-1
            transition-transform duration-300 ease-in-out hover:scale-110 w-5 sm:w-12 md:w-20 lg:w-24 rounded-full z-10"
            src={ghostImage}
            onMouseEnter={() => setGhostImage("/image-assets/ghostClosedEye.svg")} 
            onMouseLeave={() => setGhostImage("/image-assets/ghostOpenEye.svg")}
            alt="Ghost"
          />
          <div className={`${title({ size: "main" })} neometric text-center relative z-1 text-base_Black`}>
            arnav.
          </div>
        </div>  
      </section>
    </DefaultLayout>
  );
}

