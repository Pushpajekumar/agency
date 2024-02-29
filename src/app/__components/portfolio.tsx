"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

function Portfolio() {
  return <HeroParallax products={products} />;
}

export default Portfolio;
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/boston-public-library-0dMTIQIG1sM-unsplash.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/assets/intricate-explorer-oytqNjYUjbk-unsplash.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/assets/neom-WZCMd9K-sHY-unsplash.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/assets/intricate-explorer-oytqNjYUjbk-unsplash.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/assets/pawel-czerwinski-YlXdoyiYYW8-unsplash.jpg",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/boston-public-library-0dMTIQIG1sM-unsplash.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/assets/intricate-explorer-oytqNjYUjbk-unsplash.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/assets/neom-WZCMd9K-sHY-unsplash.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/assets/intricate-explorer-oytqNjYUjbk-unsplash.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/assets/pawel-czerwinski-YlXdoyiYYW8-unsplash.jpg",
  },
];
