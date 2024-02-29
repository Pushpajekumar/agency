"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SparklesCore } from "@/components/ui/sparkles";

const Services = () => {
  return (
    <section className="pb-20 bg-black">
      <div className="h-[25rem]  w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Services
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Web development and designing
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/assets/website-development.png"
                height="500"
                width="500"
                className=" h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="web development"
                quality={100}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Services;
