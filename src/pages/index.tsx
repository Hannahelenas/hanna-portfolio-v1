import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Intro from "../components/Intro";

interface ContentfulPageData {
  contentfulPage: {
    slug: string;
    pageTitle: string;
    pageIntroHeading: string;
    pageIntroText: {
      internal: {
        content: string;
      };
    };
    heroImage: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery<ContentfulPageData>(graphql`
    query {
      contentfulPage(slug: { eq: "/" }) {
        slug
        pageTitle
        pageIntroHeading
        pageIntroText {
          internal {
            content
          }
        }
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  `);

  if (!data || !data.contentfulPage) {
    return <p>Data missing.</p>;
  }

  const { pageTitle, heroImage, pageIntroHeading, pageIntroText } =
    data.contentfulPage;
  const image = getImage(heroImage);

  return (
    <Layout>
      <Intro
        heading={pageIntroHeading}
        name="Hanna Klang Eriksson"
        introText={pageIntroText.internal.content}
        image={image}
        imageAlt={pageTitle}
      />
      <section id="about">
        <h2>About me</h2>
      </section>
      <section>
        <h2>My skills</h2>
      </section>
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hanna Klang Eriksson</title>;
