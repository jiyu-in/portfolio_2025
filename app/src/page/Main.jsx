import React from "react";
import '../style/style.scss';
import styled from 'styled-components';
import Visaul from "./Visaul";
import About from "./About";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

const Root = styled.div`
  position:relative;
  background-color: #333;
  color:#fff;
`;

const Section = styled.div`
  position: relative;
  min-height: 101vh;
`;


export default function Main() { 
  return (
    <Root>
      {/* <Projects/> */}
      <Section id={1}>
        <Visaul />
      </Section>
      <Section id={2}>
        <Portfolio/>
      </Section>
      <Section id={3}>
        <About/>
      </Section>
    </Root>
  );
}


