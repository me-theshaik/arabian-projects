import React from 'react'
import styled from 'styled-components';
import video from "./components/assets/videos/dubaibg.mp4";
import Header from './components/Header'
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <BackgroundVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <Content>
          <Typo>
              <TypeAnimation
              sequence={[
                  'Welcome to Arabian Engineering Projects',
                  5000,
                  "Leave your College Project Stress on us. Our Team will do all possible help to you.",
                  5000,
                  'Sit back and relax....., Select a project you like and contact us. Our team will get it done for you.',
                  5000,
                  
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              />
          </Typo>
        </Content>
      </HomeContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  ResHeader{
    position: fixed;
  }
`

const Typo = styled.div`
    color: #c2272d;
    font-weight: bold;
    font-size: 36px;
    padding: 25px 30px;
    -webkit-text-stroke: 1px #ffffff;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;

}
`;

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;