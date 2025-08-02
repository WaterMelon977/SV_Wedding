import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MainVideo from "../assets/reel2.mp4";
import mobileVideo from "../assets/reel-mobile.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  padding: 0 1rem;
  text-align: center;

  .title-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    word-break: keep-all;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-family: "Dancing Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 0.1em;
    white-space: pre;
    line-height: 1.1;
    @media (max-width: 48em) {
      font-size: calc(2.5rem + 6vw);
    }
    @media (max-width: 30em) {
      font-size: calc(2rem + 8vw);
      line-height: 1.2;
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Dancing Script";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;
    @media (max-width: 48em) {
      font-size: calc(1.2rem + 2vw);
    }
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 0.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 4, // was 5
      staggerChildren: 0.1, // was 0.3
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  const [videoSrc, setVideoSrc] = useState(MainVideo);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // 48em = 768px
        setVideoSrc(mobileVideo);
      } else {
        setVideoSrc(MainVideo);
      }
    };

    // Set initial video source
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div className="title-row">
          {"Sandhya & Vishal".split("").map((char, index) => (
            <motion.h1
              key={index}
              variants={item}
              data-scroll
              data-scroll-delay="0"
              data-scroll-speed="2"
              animate={{
                opacity: 1,
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
                rotateX: 0,
                transition: {
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              initial={{ 
                opacity: 0,
                y: 50,
                scale: 0.5,
                rotateX: 45
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                textShadow: "0 0 8px rgb(255,255,255)",
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }}
              font-family="Dancing Script"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                display: 'inline-block'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.h1>
          ))}
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0"
          data-scroll-speed="1"
          whileInView={{ 
            opacity: 1,
            y: 0,
            scale: 1
          }}
          initial={{ 
            opacity: 0,
            y: 30,
            scale: 0.8
          }}
          transition={{
            duration: 0.5,
            delay: 1.5
          }}
          font-family="Dancing Script"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          We're getting married
        </motion.h2>
      </Title>

      <video 
        src={videoSrc} 
        type="video/mp4" 
        autoPlay 
        muted 
        loop
        playsInline 
      />
    </VideoContainer>
  );
};

export default CoverVideo;
