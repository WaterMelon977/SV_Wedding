import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 400"
                  width="300px"
                  height="200px"
                  style={{ display: 'block' }}
                >
                  {/* S letter */}
                  <motion.text
                    x="30"
                    y="220"
                    fontFamily="'Dancing Script', 'Brush Script MT', cursive"
                    fontSize="120"
                    fill="#fff"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                  >
                    S
                  </motion.text>
                
                  {/* Heart - Emoji-like and large */}
                  <motion.path
                    d="M300 180 
                       C300 100, 420 100, 420 180 
                       C420 260, 300 320, 300 320 
                       C300 320, 180 260, 180 180 
                       C180 100, 300 100, 300 180Z"
                    fill="#e63946"
                    stroke="#fff"
                    strokeWidth="10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1, type: 'spring', stiffness: 180 }}
                  />
                
                  {/* V letter */}
                  <motion.text
                    x="480"
                    y="220"
                    fontFamily="'Dancing Script', 'Brush Script MT', cursive"
                    fontSize="120"
                    fill="#fff"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    V
                  </motion.text>
                </motion.svg>
        <h3 data-scroll data-scroll-speed="-1" style={{ fontFamily: "Dancing Script" }}>
          Sandhya & Vishal's Wedding
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            Video Glimpse
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            Invite 
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            Jarabala's Invite
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            Snapshots
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              Youtube live
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a
              href="https://github.com/WaterMelon977"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              Santhosh & Sumanth 
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
