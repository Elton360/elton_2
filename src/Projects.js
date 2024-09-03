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

const PROJECT_CARD_WIDTH = 382;

const Projects = () => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollByAmount = (newAmount) => {
    containerRef.current.scrollBy({ left: newAmount, behavior: "smooth" });
    setScrollAmount((amount) => amount + newAmount);
  };

  return (
    <div style={{ position: "relative" }}>
      <Items ref={containerRef}>
        <LeftScrollButton
          onClick={() => scrollByAmount(PROJECT_CARD_WIDTH)}
          $scrollAmount={scrollAmount}
        >
          <LeftOutlined />
        </LeftScrollButton>
        {projects.map((props, idx) => (
          <Project
            key={props.imageSrc}
            {...props}
            firstChild={idx === 0}
            lastChild={idx === projects.length - 1}
          />
        ))}
        <RightScrollButton
          onClick={() => scrollByAmount(-PROJECT_CARD_WIDTH)}
          $scrollAmount={scrollAmount}
        >
          <RightOutlined />
        </RightScrollButton>
      </Items>
    </div>
  );
};

export default Projects;
