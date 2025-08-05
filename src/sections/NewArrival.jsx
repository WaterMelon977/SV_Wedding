import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/g1.JPG';
import img2 from '../assets/Images/g2.JPG';
import img3 from '../assets/Images/g3.JPG';
import img4 from '../assets/Images/g4.JPG';
import img5 from '../assets/Images/g5.JPG';
import img6 from '../assets/Images/g6.JPG';
import img7 from '../assets/Images/g7.JPG';
import img8 from '../assets/Images/g8.JPG';
import img9 from '../assets/Images/g9.JPG';
import img10 from '../assets/Images/g10.JPG';
import img11 from '../assets/Images/g11.JPG';
import img12 from '../assets/Images/g12.JPG';
import img13 from '../assets/Images/pw1.JPG';
import img14 from '../assets/Images/pw2.JPG';
import img15 from '../assets/Images/pw4.JPG';
import img16 from '../assets/Images/pw5.JPG';
import img17 from '../assets/Images/pw6.JPG';
import img18 from '../assets/Images/pw7.JPG';
import img19 from '../assets/Images/pw8.JPG';
import GalleryOverlay from '../components/GalleryOverlay.jsx';



const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */
  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
  pointer-events: none;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    border: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 80vw;

  }
  @media (max-width: 30em) {
  width: 90vw;

  }
  
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Dancing Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 20%;
  right: 0;
  z-index: 11;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
    cursor: pointer;
  }
`;
const Photos = ({ img, onClick }) => {
  return (
    <Item onClick={onClick}>
      <img src={img} style={{ objectFit: 'cover' }} alt="gallery_pics" />
      <h2 style={{ color: 'white', textAlign: 'center' ,fontFamily: 'Dancing Script'}}>Click image for Gallery mode</h2>
    </Item>
  );
};

const img_list = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

const NewArrival = () => {
  const [selectedImage, setSelectedImage] = useState(null);
   gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);


  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
let t1= gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 20}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=600%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log('Image clicked:', index);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Snapshots
      </Title>

      <Container ref={ScrollingRef}>
        {img_list.map((img, index) => (
          <Photos key={index} img={img} onClick={() => handleImageClick(index)} />
        ))}
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        From laughter-filled rituals to quiet stolen glances — our big day was nothing short of magical.
        <br />
        <br />

We've gathered some of our favorite memories in this photo gallery, and we'd love for you to relive those precious moments with us.
        <br />
        <br />

<strong>Click</strong> on any picture to enter gallery mode — the smiles, the chaos, the love… it's all there, waiting for you.
        <br />
        <br />

Whether you were with us in person or in spirit, we hope these images bring a little joy to your heart — just like you brought to ours.
      </Text>
      <GalleryOverlay
        images={img_list}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        onClose={handleCloseOverlay}
      />
    </Section>
  );
};

export default NewArrival;

