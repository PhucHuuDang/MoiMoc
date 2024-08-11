import { Logo } from "@/components/_global-components-reused/logo";
import { Navbar } from "@/components/_global-components-reused/navbar";
import { Cover } from "@/components/aceternity-ui/cover";
import { TypewriterEffectSmooth } from "@/components/aceternity-ui/typewriter-effect";
import { CircleUI } from "@/components/custom/circle-ui";
import { NewlyProduct } from "@/components/custom/newly-product";
import { BestSellingProducts } from "@/components/home-ui/best-selling-products";
import { Confirm } from "@/components/home-ui/confirm";
import { DemoProducts } from "@/components/home-ui/demo-product";
import { ProductIntroduction } from "@/components/home-ui/product-introduction";
import BlurFade from "@/components/magic/blur-fade";
import Image from "next/image";

export default function HomePage() {
  const words = [
    {
      text: "Tự nhiên...",
      className: "whitespace-nowrap text-3xl font-light text-white ",
    },
    {
      text: "như chính bạn!",
      className:
        "whitespace-nowrap text-5xl font-light text-white text-[#87d5a4] ",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}

      <div className="relative w-full">
        <Image
          src="/images/banner-home.jpeg"
          alt="banner"
          height={0}
          width={1000}
          className="z-10 aspect-video h-[100vh] w-full object-cover pt-16"
        />

        <div className="absolute bottom-56 left-48">
          <div className="text-center text-white">
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-4">
        <NewlyProduct />
        <CircleUI className="-right-40 -top-20" />
      </div>

      <div className="relative overflow-hidden px-10 py-5">
        <BlurFade inView delay={0.25}>
          <ProductIntroduction />
        </BlurFade>
        <DemoProducts />
        <CircleUI className="-left-40 top-0 size-[800px] overflow-hidden" />
      </div>

      <div className="mt-6">
        <Confirm />
      </div>

      <div className="mt-6">
        <BlurFade inView delay={0.25}>
          <BestSellingProducts />
        </BlurFade>
      </div>
    </div>
  );
}
