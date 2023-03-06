import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              TwoDoors is the online store where vintage fashion meets personal
              growth. Our name comes from our belief that finding the perfect
              piece of clothing can be a transformative experience, opening
              doors to your inner self and a new way of communicating with the
              world. Our mission is to provide a curated collection of vintage
              clothing that not only looks great but also empowers you to
              express yourself and connect with others. Each item in our
              collection is hand-selected for its quality, style, and unique
              character, ensuring that you can find the perfect piece to unlock
              your personal style and confidence. We invite you to browse our
              collection and discover the magic of vintage fashion for yourself.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
