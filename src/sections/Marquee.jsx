import React, { useState } from 'react';
import styled from 'styled-components';
import img_web from "../assets/Images/temple2.JPG";
import img_mobile from "../assets/Images/g8.JPG";
import { useLocomotiveScroll } from 'react-locomotive-scroll';



const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  
  background-image: url(${img_web});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 48em){
    background-image: url(${img_mobile});
  } 
`;

const Container = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
  }
  @media (max-width: 48em){
    width: 90vw;
  }
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Dancing Script';
  color: ${(props) => props.theme.text};
  /* position: absolute; */
  white-space: nowrap;
  // text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxxl};
}
@media (max-width: 64em){
    margin: 1rem 0;
}
 
@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};
}

  span {
    display: block;
    background-color: ${(props) => props.theme.body};

    padding: 1rem 2rem;
    
  }
`;

const Marquee = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <Container id="direction">
        <Banner>
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="8"
          data-scroll-target="#direction"
          style={{ cursor: 'pointer', fontFamily: 'Dancing Script' }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#home')}
        >
            Video Glimpse
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
            style={{ cursor: 'pointer', fontFamily: 'Dancing Script' }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#venue')}
          >
            Events and Venue
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
            style={{ cursor: 'pointer', fontFamily: 'Dancing Script' }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('#wrapper1')}
          >
            Watch Live
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
            style={{ cursor: 'pointer', fontFamily: 'Dancing Script' }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll('.new-arrival')}
          >
            Snapshots
          </span>
        </Banner>
        {/* <Banner data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            Capturing the love story
          </span>
        </Banner> */}
      </Container>
    </Section>
  );
};

export default Marquee;
