import React from "react";
import '../style/style.scss';
import Visaul from "./Visaul";
import About from "./About";
import styled from 'styled-components';

const Root = styled.div`
    position:relative;
    background-color: #333;
    color:#fff;
`;

const Section = styled.div`
  position: relative;
    min-height: 110vh;
`;

export default function Main() { 
  return (
    <Root>
      <Section id={1}>
        <Visaul />
      </Section>
      <Section id={2}>
        <About/>
      </Section>
      <Section id={3}>
        <ComponentThree />
      </Section>
      <Section id={4}>
        <ComponentFour />
      </Section>
    </Root>
  );
}



function ComponentThree() {
  return <p>about me</p>;
}

function ComponentFour() {
  return <p>Contents Me</p>;
}
