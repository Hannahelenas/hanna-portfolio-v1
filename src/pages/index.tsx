import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

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
    <main>
      <h1>{pageTitle}</h1>
      <h2>{pageIntroHeading}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: pageIntroText.internal.content }}
      />
      {image && <GatsbyImage image={image} alt={pageTitle} />}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Hanna Klang Eriksson</title>;
