import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
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
      <section>
        <p>About me</p>
      </section>
      <section>
        <p>My skills</p>
      </section>
      <section>
        <p>Projects</p>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hanna Klang Eriksson</title>;
