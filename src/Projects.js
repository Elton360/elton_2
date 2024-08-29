import React from "react";
import { Items } from "./styles/ProjectSection";
import Project from "./Project";

const items = [
  {
    imageSrc: "work/ley.png",
    title: "Car Rental",
    link: "https://leyrental.com",
    isWebsite: true,
    description:
      "A car rental service that offers a wide range of vehicles for short-term and long-term rentals",
    tags: ["HTML", "CSS", "JavaScript", "Next", "Firebase"],
  },
  {
    imageSrc: "work/clubs.png",
    title: "E-Commerce",
    link: "https://clubstees.com",
    isWebsite: true,
    description:
      "An e-commerce platform specializing in trendy and customizable T-shirts and apparel.",
    tags: ["HTML", "CSS", "JavaScript", "Next", "Firebase"],
  },
  {
    imageSrc: "work/unique.png",
    title: "Restaurant",
    link: "https://uniquecaribbeanrestaurant.com",
    isWebsite: true,
    description:
      "A vibrant Caribbean restaurant offering a taste of the islands with a variety of dishes.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  },
  {
    imageSrc: "work/lausim.png",
    title: "Real Estate",
    link: "https://lausim.com",
    isWebsite: true,
    description:
      "A company that specializes in  housing and commercial properties throughout Miami-Dade County. ",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    imageSrc: "work/bethel.png",
    title: "Community",
    link: "https://eglisebethel.org",
    isWebsite: true,
    description:
      "A community-driven organization that brings people together through faith-based activities and events. ",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    imageSrc: "work/dasmain.png",
    title: "Music",
    link: "https://yeaboiii.com",
    isWebsite: true,
    description:
      "A musician and entertainer's portfolio and upcoming events based out of  South Florida.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <Items>
      {items.map((props) => (
        <Project {...props} />
      ))}
    </Items>
  );
};

export default Projects;
