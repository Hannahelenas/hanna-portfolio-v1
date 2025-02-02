import * as React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { imageWrapper, imageCircle } from "../styles/Intro.module.css";
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
    <section>
      <h2>{heading}</h2>
      <h1>{name}</h1>
      <ReactMarkdown>{introText}</ReactMarkdown>
      {image && (
        <div className={imageWrapper}>
          <GatsbyImage image={image} alt={imageAlt} className={imageCircle} />
        </div>
      )}
    </section>
  );
};

export default Intro;
