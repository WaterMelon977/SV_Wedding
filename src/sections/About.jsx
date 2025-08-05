import React from "react";
import styled from "styled-components";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from "../assets/Images/couple.jpg";
import img2 from "../assets/Images/garland.jpg";


const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  background-color: ${props => props.theme.body};
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: center top;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    will-change: transform;
  }

  .desktop-img {
    display: block;
  }
  .mobile-img {
    display: none;
  }

  @media (max-width: 48em) {
    .desktop-img {
      display: none;
    }
    .mobile-img {
      display: block;
    }
  }
`;

const Left = styled.div`
  width: 60%;
  max-width: 800px;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  top: 15%;
  z-index: 2;
  margin: -100 auto;
  background: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  word-break: break-word;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;

  strong {
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  @media (max-width: 64em) {
    width: 80%;
    padding: 2rem 1rem;
    font-size: ${(props) => props.theme.fontmd};
  }
  
  @media (max-width: 48em) {
    width: 90%;
    padding: 1.5rem 0.5rem;
    font-size: ${(props) => props.theme.fontsm};
  }
  
  @media (max-width: 30em) {
    width: 95%;
    padding: 1rem 0.2rem;
    font-size: 1rem;
  }
`;

const About = () => {
  const sectionRef = React.useRef(null);
  const backgroundRef = React.useRef(null);
  const contentRef = React.useRef(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    
    const mediaQuery = window.matchMedia('(max-width: 48em)');
    const imageSelector = mediaQuery.matches ? '.mobile-img' : '.desktop-img';
    const image = backgroundRef.current.querySelector(imageSelector);

    // Pin the content
    const pinTl = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
    });

    // Background Image zoom
    const zoomTl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    });

    if (image) {
      zoomTl.fromTo(image, { scale: 1 }, { scale: 1.2, ease: "none" });
    }


    return () => {
      pinTl.kill();
      zoomTl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} id="fixed-target" className="about">
      <BackgroundImages ref={backgroundRef}>
        <img src={img2} alt="Desktop Background" className="background-image desktop-img" />
        <img src={img1} alt="Mobile Background" className="background-image mobile-img" />
      </BackgroundImages>

      <Left ref={contentRef} className="about-content">
        <h3 style={{ margin: '2rem 0', textAlign: 'center', fontFamily: 'Dancing Script' }}>We whole heartedly invite you for the celebration of love & togetherness</h3>

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
    </Section>
  );
};

export default About;
