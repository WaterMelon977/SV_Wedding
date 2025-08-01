import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/couple.jpg";
import img2 from "../assets/Images/slide1_bride.jpg";
import img3 from "../assets/Images/slide2_groom.jpg";

const Section = styled.section`
  min-height: 130vh;
  width: 80vw;
  margin: 0 auto 6rem auto;
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 95vw;
    min-height: 140vh;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  @media (max-width: 48em) {
    width: 100vw;
    min-height: 120vh;
    margin-bottom: 6rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 0.5rem;
  }
  @media (max-width: 30em) {
    min-height: 100vh;
    margin-bottom: 4rem;
    gap: 0.5rem;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-family: Lora, serif;
  font-weight: 300;
  position: sticky;
  top: 6rem;
  // z-index: 5;
  margin-top: 10%;
  background: rgba(255,255,255,0.7);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  word-break: break-word;

  strong {
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  @media (max-width: 64em) {
    width: 90%;
    margin-top: 2rem;
    padding: 1.5rem 1rem;
    font-size: ${(props) => props.theme.fontmd};
    position: static;
    top: unset;
  }
  @media (max-width: 48em) {
    width: 98%;
    margin-top: 1rem;
    padding: 1rem 0.5rem;
    font-size: ${(props) => props.theme.fontsm};
    background: rgba(255,255,255,0.9);
    position: static;
    top: unset;
  }
  @media (max-width: 30em) {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem 0.2rem;
    font-size: 1rem;
    border-radius: 8px;
    position: static;
    top: unset;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    margin-bottom: 1rem;
  }

  .small-img-1, .small-img-2 {
    width: 60%;
    max-width: 220px;
    position: static;
    margin: 0.5rem 0;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  @media (max-width: 64em) {
    width: 100%;
    img {
      max-width: 320px;
    }
    .small-img-1, .small-img-2 {
      max-width: 160px;
    }
  }
  @media (max-width: 48em) {
    img {
      max-width: 220px;
    }
    .small-img-1, .small-img-2 {
      max-width: 120px;
    }
  }
  @media (max-width: 30em) {
    img {
      max-width: 140px;
    }
    .small-img-1, .small-img-2 {
      max-width: 80px;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Dancing Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 0;
  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    position: static;
    margin-bottom: 1rem;
    text-align: center;
    top: unset;
    left: unset;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    position: static;
    margin-bottom: 1rem;
    text-align: center;
    top: unset;
    left: unset;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    position: static;
    margin-bottom: 0.5rem;
    text-align: center;
    top: unset;
    left: unset;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        We whole heartedly invite <br/>
        you for the celebration of <br/>
        love & togetherness
      </Title>
      

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We've looked at thousands of scans… but never has anything felt more certain than this: we found the one in each other.

With hearts full of love (and just a hint of nerves!),
We, Sandhya & Vishal, two radiologists by profession and soulmates by fate, are overjoyed to invite you to celebrate the beginning of our forever.
<br />
        <br />
📅 Date: <strong>August 10, 2025</strong>
<br/>
📍 Location: <strong>Railway Officers club, kasturibaipet, Vijayawada</strong>

<br />
        <br />
This isn't just a date on the calendar — it's a day that will forever be etched in our hearts, and it would mean the world to have you there beside us.

Come witness our vows, dance with us, laugh with us, cry happy tears (we probably will too!), and help us write the most beautiful chapter in our story yet.
<br />
        <br />

With love and anticipation,
<strong>Sandhya & Vishal</strong>
<br />
        <br />


      </Left>

      <Right>
        <img width="400" height="800" src={img1} alt="About Us" />
        <img
          width="400"
          height="800"
          // className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="800"
          // className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;
