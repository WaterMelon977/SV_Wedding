import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useSound from 'use-sound';
import cheeringSound from '../assets/sounds/Drum.mp3';


import silo from "../assets/Images/silo.jpg";
import ring from "../assets/Images/ring.jpg";
import hero from "../assets/Images/heropic.jpg";
import bride from "../assets/Images/slide1_bride.jpg";
import groom from "../assets/Images/slide2_groom.jpg";


const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  font-family: "Dancing Script";
  width: 30%;
  margin-bottom: 2rem;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, playCheer, stopCheer }) => {
  const title = "Click to bless the couple";
  const imgRef = React.useRef(null);

  const handleConfetti = async (e) => {
    const canvasConfetti = (await import('canvas-confetti')).default;
    const rect = imgRef.current.getBoundingClientRect();
    
    // Calculate the center of the image relative to the viewport
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Stop any playing sound and restart it
    stopCheer();
    playCheer();

    // Fire confetti at the image center
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#FF1493' , '#FF4500', '#47ff66ff', '#ff0000ff'],
      zIndex: 9999,
    });
  };

  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      onClick={handleConfetti}
      style={{ cursor: 'pointer' }}
    >
      <img ref={imgRef} width="400" height="600" src={img} alt={title} />
      <motion.h1 
        style={{
          fontFamily: "Dancing Script",
          display: "block",
          width: "100%",
          textAlign: "center",
          marginTop: "1rem",
          position: "absolute",
          bottom: "-2.5rem",
          // left: "50%",
          transform: "translateX(-50%)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          textShadow: [
            "0 0 2px rgba(255,255,255,0.5)",
            "0 0 8px rgba(255,215,0,0.8)",
            "0 0 2px rgba(255,255,255,0.5)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {title}
      </motion.h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  const [playCheer, { stop: stopCheer }] = useSound(cheeringSound, { 
    volume: 0.5,
    interrupt: true, // This allows the sound to be interrupted
  });

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Your presence is a gift for us - Jarabala Family
      </Title>
      <Left>
        <p>
          <br />
          It is with great joy ,we invite you to join us in celebrating the wedding of our beloved Daughter
          Sandhya with Vishal.
          
          <br />
          <br />
          Your presence and blessings are the most cherished gifts we could ask for as the couple embarks on this beautiful journey together.
          
         
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={silo} playCheer={playCheer} stopCheer={stopCheer} />
        <Product img={ring} playCheer={playCheer} stopCheer={stopCheer} />
        <Product img={hero} playCheer={playCheer} stopCheer={stopCheer} />
        <Product img={bride} playCheer={playCheer} stopCheer={stopCheer} />
        <Product img={groom} playCheer={playCheer} stopCheer={stopCheer} />
      </Right>
    </Section>
  );
};

export default Shop;
