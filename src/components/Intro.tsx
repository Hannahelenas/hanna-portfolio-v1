import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  introSection,
  introTextContent,
  imageWrapper,
  imageCircle,
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
    <section className={introSection}>
      <div className={introTextContent}>
        <h2>{heading}</h2>
        <h1>{name}</h1>
        <ReactMarkdown>{introText}</ReactMarkdown>
      </div>
      {image && (
        <div className={imageWrapper}>
          <GatsbyImage
            image={image}
            alt={imageAlt}
            className={imageCircle}
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Intro;
