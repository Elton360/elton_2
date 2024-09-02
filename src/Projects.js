import React, { useRef, useState } from "react";
import {
  Items,
  LeftScrollButton,
  RightScrollButton,
} from "./styles/ProjectSection";
import Project from "./Project";
import profile from "./config/profile";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { projects } = profile;

const Projects = () => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollByAmount = (newAmount) => {
    containerRef.current.scrollBy({ left: newAmount, behavior: "smooth" });
    setScrollAmount((amount) => amount + newAmount);
  };

  return (
    <Items ref={containerRef}>
      <LeftScrollButton
        onClick={() => scrollByAmount(346)}
        $scrollAmount={scrollAmount}
      >
        <LeftOutlined />
      </LeftScrollButton>
      {projects.map((props) => (
        <Project key={props.imageSrc} {...props} />
      ))}
      <RightScrollButton
        onClick={() => scrollByAmount(-346)}
        $scrollAmount={scrollAmount}
      >
        <RightOutlined />
      </RightScrollButton>
    </Items>
  );
};

export default Projects;
