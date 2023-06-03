import React from 'react'
import styled from 'styled-components';
import video from "./components/assets/videos/dubaibg.mp4";
import Header from './components/Header'

function About() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <BackgroundVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <Content>
          <h2>ABOUT ARABIAN ENGINEERING PROJECTS</h2>
          <h3>Welcome to the Arabian Engineering Projects website! </h3>
          <p>At Arabian Engineering Projects, we are passionate about empowering engineering college students with hands-on experience and practical knowledge. We understand that engineering education goes beyond the classroom, and we believe that engaging in real-world projects is essential for every aspiring engineer.</p>
          <h3>Our Vision</h3>
          <p>Our vision is to bridge the gap between theoretical learning and practical application by providing a platform where engineering students can explore, learn, and excel in their chosen fields. We aim to foster a community of innovative thinkers and problem solvers who can shape the future of engineering in the Arabian region and beyond.</p>
          <h3>What we Offer</h3>
          <p>
            <ol>
              <li>Diverse Project Portfolio: We offer a wide range of engineering projects that cover various disciplines such as mechanical engineering, electrical engineering, civil engineering, and more. Our projects are carefully curated to provide students with valuable hands-on experience in their respective fields.</li>
              <li>Quality Resources: We understand the importance of reliable and comprehensive resources in the success of engineering projects. That's why we provide detailed project documentation, including step-by-step instructions, design files, and relevant reference materials, to ensure that students have all the necessary information to complete their projects successfully.</li>
              <li>Expert Guidance: We believe in the power of mentorship. Our team consists of experienced engineers and industry professionals who are dedicated to guiding and supporting students throughout their project journey. Whether you need advice on project selection, technical assistance, or troubleshooting, our experts are here to help you every step of the way.</li>
              <li>Community Collaboration: Arabian Engineering Projects is more than just a platform to buy projects. We foster a collaborative community where students can connect with like-minded individuals, share ideas, and learn from each other's experiences. Our discussion forums and interactive events provide opportunities for networking and knowledge exchange among engineering students.</li>
            </ol>
          </p>
          <h3>Why Choose Us</h3>
          <p>
            <ol>
              <li>Commitment to Quality: We are committed to delivering high-quality projects that meet industry standards and academic requirements. Our projects are designed to enhance your technical skills and showcase your abilities to potential employers or academic institutions.</li>
              <li>Convenience and Accessibility: Our website offers a user-friendly interface, making it easy for you to browse and select projects that align with your interests and academic requirements. With just a few clicks, you can access detailed project information and make a purchase from the comfort of your own home.</li>
              <li>Trust and Reliability: We prioritize the trust and satisfaction of our customers. Our projects are thoroughly tested, and we strive to provide accurate documentation and reliable support to ensure a seamless project experience for every student.</li>
            </ol>
          </p>
          <p>Join us at Arabian Engineering Projects and embark on an exciting journey of innovation, learning, and personal growth. Together, let's shape the future of engineering education in the Arabian region and beyond!</p>
          <p>Feel free to explore our project catalog and reach out to us with any questions or inquiries. We are excited to be a part of your engineering success story!</p>
        </Content>
      </HomeContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  height: 100vh;
  ResHeader{
    position: fixed;
  }
`

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;

const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  max-width: 70%;
  min-height: 60%;
  border: 2px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 50px;
  border-radius: 25px;
  text-align: justify;
  top: 15%;
  margin-bottom: 50px;
  h2{
    color: #c2272d;
    text-align: center;
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    top: 20%;
    padding: 25px;
    h2{
      font-size: 16px; 
    }
    p{
      font-size: 14px;
    }
  }
`;