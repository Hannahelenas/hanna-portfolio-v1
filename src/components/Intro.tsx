import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  introSection,
  introTextContent,
  imageWrapper,
  imageCircle,
  button,
  secondaryButton,
  linkButtons,
} from "../styles/Intro.module.css";
interface IntroProps {
  heading: string;
  name: string;
  introText: string;
  image?: IGatsbyImageData;
  imageAlt: string;
}

const Intro: React.FC<IntroProps> = ({
  heading,
  name,
  introText,
  image,
  imageAlt,
}) => {
  return (
    <section className={introSection} id="home">
      <div className={introTextContent}>
        {/* <h2>{heading}</h2> */}
        <h1>{name}</h1>
        <ReactMarkdown>{introText}</ReactMarkdown>
        <div className={linkButtons}>
          <a href="#projects" className={button}>
            See My Portfolio
          </a>
          <a href="#contact" className={secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
      {image && (
        <div className={imageWrapper}>
          <GatsbyImage image={image} alt={imageAlt} className={imageCircle} />
        </div>
      )}
    </section>
  );
};

export default Intro;
