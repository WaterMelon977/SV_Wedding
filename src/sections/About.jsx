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
  @media (max-width: 48em) {
    width: 90vw;
    min-height: 150vh;
    margin-bottom: 8rem;
  }

  @media (max-width: 30em) {
    width: 100vw;
    min-height: 170vh;
    margin-bottom: 10rem;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-family:  Lora;
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  strong {
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Dancing Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  
  top: 1rem;
  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
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
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
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
