import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import useSound from 'use-sound';
import cheeringSound from '../assets/sounds/Drum.mp3';


import silo from "../assets/Images/silo.jpg";
import ring from "../assets/Images/ring.jpg";
import hero from "../assets/Images/heropic.jpg";
// removed unused: bride, groom imports


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
  width: max-content; /* fit to items width on desktop */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: visible; /* this container drives horizontal animation, but prevent global scroll */
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 18rem; /* larger images on desktop */
  /* background-color: black; */
  margin-right: 3rem;
  position: relative; /* Ensure absolutely positioned children anchor to item */
  text-align: center;
  padding-bottom: 2.5rem; /* space for label to sit inside item on desktop */
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
    width: 12rem;
    padding-bottom: 0; /* label becomes static on mobile */
  }
`;

const BlessText = styled(motion.h1)`
  font-family: "Dancing Script";
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  position: absolute;
  bottom: 0; /* keep inside item to avoid clipping */
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 0 2px rgba(255,255,255,0.5);
  pointer-events: none; /* keep image click area uninterrupted */
  z-index: 2;

  @media (max-width: 48em) {
    position: static;
    transform: none;
    bottom: auto;
    margin-top: 0.75rem;
    font-size: ${(props) => props.theme.fontsm};
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
      <BlessText
        animate={{
          scale: [1, 1.08, 1],
          textShadow: [
            "0 0 2px rgba(255,255,255,0.5)",
            "0 0 8px rgba(255,215,0,0.8)",
            "0 0 2px rgba(255,255,255,0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {title}
      </BlessText>
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

    if (!element || !scrollingElement) return;

    const waitForImages = (container) =>
      Promise.all(
        Array.from(container.querySelectorAll('img')).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((res) => {
                const cb = () => {
                  img.removeEventListener('load', cb);
                  img.removeEventListener('error', cb);
                  res();
                };
                img.addEventListener('load', cb);
                img.addEventListener('error', cb);
              })
        )
      );

    let tl;

    const createTimeline = () => {
      if (!element || !scrollingElement) return;
      if (tl) {
        tl.kill();
        tl = undefined;
      }

      const viewportWidth = element.clientWidth;
      const isMobile = window.matchMedia('(max-width: 48em)').matches;
      const leftPercent = isMobile ? 0.4 : 0.35; // matches Left widths
      const visibleWindow = viewportWidth - viewportWidth * leftPercent;
      // Scroll enough so the last image can be fully visible within the visible window (right of the fixed left panel)
      const totalScrollX = Math.max(0, scrollingElement.scrollWidth - visibleWindow);

      // Pin the section and set its height to the horizontal content width
      tl = gsap.timeline();

      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => `+=${totalScrollX}`,
          scroller: ".App",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
        // Height needs to account for pinning duration: content width + viewport height minus visible area to keep pin until 3rd image fully shows
        height: () => `${scrollingElement.scrollWidth + window.innerHeight}px`,
        ease: "none",
      });

      tl.to(
        scrollingElement,
        {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: () => `+=${totalScrollX}`,
            scroller: ".App",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          x: () => -totalScrollX,
          ease: "none",
        },
        0
      );

      ScrollTrigger.refresh();
    };

    let isMounted = true;
    waitForImages(scrollingElement).then(() => {
      if (!isMounted) return;
      createTimeline();
    });

    const onResize = () => {
      createTimeline();
    };
    window.addEventListener('resize', onResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', onResize);
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Your presence is a gift for us - Jarabhala  Family
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
        {/* <Product img={bride} playCheer={playCheer} stopCheer={stopCheer} />
        <Product img={groom} playCheer={playCheer} stopCheer={stopCheer} /> */}
      </Right>
    </Section>
  );
};

export default Shop;
