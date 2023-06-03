import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './components/Header';

// style="background-image: url(ece1.png); height: 300px;" onmouseover="this.style.backgroundImage='url(ece2.gif)';" onmouseout="this.style.backgroundImage='url(ece1.png)';"

function Projects() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <Title>Categories of Projects</Title>
        <ProjectComp>
          <Banner src='./images/tesla.png' />
          <Description>
            <Heading>Web Development</Heading>
            <MainDes>Experience cutting-edge web development services at Arabian Engineering Projects. Our skilled team utilizes the latest technologies, including HTML 5, CSS 3, and JavaScript, along with powerful frameworks such as React JS, Node JS, and Next JS, to create stunning and interactive websites that meet your specific needs. Trust us to bring your digital vision to life and provide a seamless user experience.</MainDes>
            <BuyButton to={'https://wa.me/+917287006488'} >PURCHASE THIS PROJECTS</BuyButton>
          </Description>
        </ProjectComp>
        <ProjectComp>
          <Banner src='./images/aiml2.png' />
          <Description>
            <Heading>Artificial Intelligence & Machine Learning "AI-ML"</Heading>
            <MainDes>Unlock the potential of Artificial Intelligence and Machine Learning with our AIML services at Arabian Engineering Projects. Our expert team leverages the power of Python, along with cutting-edge libraries such as TensorFlow, OpenCV, Numpy, and Pandas, to develop intelligent solutions that drive innovation and efficiency in various domains. Trust us to deliver tailor-made AI and ML solutions that meet your unique requirements and propel your business forward.</MainDes>
            <BuyButton to={'https://wa.me/+917287006488'} >PURCHASE THIS PROJECTS</BuyButton>
          </Description>
        </ProjectComp>
        <ProjectComp>
          <Banner src='./images/ece1.png' />
          <Description>
            <Heading>Embedded Systems</Heading>
            <MainDes>Discover the realm of Embedded Systems Projects with Arabian Engineering Projects. Our skilled team specializes in utilizing popular platforms such as Arduino, Raspberry Pi (all models), Node MCU, and NVIDIA Jetson Nano to develop innovative and efficient embedded systems solutions. Whether it's prototyping, automation, or IoT applications, we are committed to delivering cutting-edge projects that leverage the power of embedded systems technology.</MainDes>
            <BuyButton to={'https://wa.me/+917287006488'} >PURCHASE THIS PROJECTS</BuyButton>
          </Description>
        </ProjectComp>
      </HomeContainer>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  height: 100vh;
  ResHeader{
    position: fixed;
  }
`;
const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 300px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;
const Heading = styled.h1`
  color: #c2272d;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const MainDes = styled.p`
  margin: 10px;
  padding: 10px;
  @media screen and (max-width: 768px) {
  font-size: 10px;
  }
`;
const Title = styled.h1`
  color: #c2272d;
  margin-top: 150px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const ProjectComp = styled.div`
  width: 90vw;
  margin: 50px 0;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  flex-direction: column;
  min-height: 300px;
  }
`;
const Banner = styled.img`
  height: 300px;
  width: auto;
  left: 0;
`;
const Description = styled.div`
justify-content: center;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;
const BuyButton = styled(Link)`
  color: #ffffff;
  background-color: #c2272d;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;

  &:hover {
  background-color: #e44d52;
  }

  @media screen and (max-width: 768px) {
  margin-top: 20px;
  width: 100%;
  }
`;
