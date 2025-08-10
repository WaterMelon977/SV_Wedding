import React from 'react';
import styled from 'styled-components';

const YOUTUBELIVELINK = process.env.REACT_APP_YOUTUBELIVELINK;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 1rem 0;
  
  /* Ensure full viewport height on mobile */
  @media (max-width: 599px) {
    min-height: 100vh;
    /* Modern viewport unit fallback */
    min-height: 100dvh;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
  }

  @media (min-width: 600px) {
    padding: 2rem 0;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  @media (max-width: 599px) {
    font-size: 1.1rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
  }
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 200px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.3);
  background: #000;
  
  @media (max-width: 599px) {
    width: 92vw;
    max-width: 92vw;
    height: auto;
    /* Ensure it fits within mobile 100vh layout */
    max-height: 55vh;
  }

  @media (min-width: 600px) {
    width: 90vw;
    max-width: 700px;
    min-height: 350px;
  }
  @media (min-width: 900px) {
    max-width: 900px;
    min-height: 500px;
  }
`;

const YouTubeLive = () => {
  // If the env variable is the string 'null' or null, treat as not set
  const isLinkNull = !YOUTUBELIVELINK || YOUTUBELIVELINK === 'URL' || YOUTUBELIVELINK === 'null' || YOUTUBELIVELINK === null;

  const iframeSrc = isLinkNull
    ? 'https://www.youtube.com/embed/FtChfxO4lJM'
    : YOUTUBELIVELINK;

  return (
    <Wrapper id='wrapper1'>
      <Title>Can't attend the event? You can still join us live and virtually attend the event</Title>
      <ResponsiveIframe
        src={iframeSrc}
        title="YouTube Live Stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </Wrapper>
  );
};

export default YouTubeLive;