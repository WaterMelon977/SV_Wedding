import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
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
// import ImageOverlay from '../components/ImageOverlay.jsx';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Dancing Script';
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  text-align: center;
  margin-bottom: 3rem;
  z-index: 15;
  color:white;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 100%;
  max-width: 600px;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  text-align: center;
  margin: 2rem auto;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    padding: 0 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 5;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 48em) {
    width: 100%;
    height: 70vh;
    object-fit: contain;
    object-position: center;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 30em) {
    height: 60vh;
    object-fit: contain;
  }

  @media (max-width: 20em) {
    height: 50vh;
    object-fit: contain;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 48em) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  pointer-events: auto;
  z-index: 10;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  pointer-events: none;
  z-index: 6;
`;

const img_list = [img1, img3, img4, img5, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

const NewArrival = () => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [overlayIndex, setOverlayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img_list.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const handleImageClick = (index) => {
  //   setOverlayIndex(index);
  //   setSelectedImage(img_list[index]);
  // };

  // const handleCloseOverlay = () => {
  //   setSelectedImage(null);
  // };

  // const handleOverlayNext = () => {
  //   const nextIndex = overlayIndex === img_list.length - 1 ? 0 : overlayIndex + 1;
  //   setOverlayIndex(nextIndex);
  //   setSelectedImage(img_list[nextIndex]);
  // };

  // const handleOverlayPrevious = () => {
  //   const prevIndex = overlayIndex === 0 ? img_list.length - 1 : overlayIndex - 1;
  //   setOverlayIndex(prevIndex);
  //   setSelectedImage(img_list[prevIndex]);
  // };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === img_list.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? img_list.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Section id="new-arrival" className="new-arrival">
      <Container>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Snapshots
        </Title>

        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {img_list.map((img, index) => (
              <CarouselSlide key={index}>
                <CarouselImage 
                  src={img} 
                  alt={`Gallery image ${index + 1}`}
                  // onClick={() => handleImageClick(index)}
                />
                <ImageCounter>
                  {index + 1} / {img_list.length}
                </ImageCounter>
              </CarouselSlide>
            ))}
          </CarouselTrack>

          <NavigationButton 
            className="prev" 
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            ‹
          </NavigationButton>
          
          <NavigationButton 
            className="next" 
            onClick={goToNext}
            disabled={currentIndex === img_list.length - 1}
          >
            ›
          </NavigationButton>
        </CarouselContainer>

        <DotsContainer>
          {img_list.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>

        <Text>
          From laughter-filled rituals to quiet stolen glances — our big day was nothing short of magical.
          <br />
          <br />
          We've gathered some of our favorite memories in this photo gallery, and we'd love for you to relive those precious moments with us.
          <br />
          <br />
          <strong>Click</strong> on any picture to view it in full size — the smiles, the chaos, the love… it's all there, waiting for you.
          <br />
          <br />
          Whether you were with us in person or in spirit, we hope these images bring a little joy to your heart — just like you brought to ours.
        </Text>
      </Container>
    </Section>
  );
};

export default NewArrival;

