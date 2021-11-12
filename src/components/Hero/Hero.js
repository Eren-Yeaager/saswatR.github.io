import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Saswat.
        <br />A Web Developer.
      </SectionTitle>
      <SectionText>
        A final year student from International Institute Of Information
        Technology(IIIT),Bhubaneswar majoring in Electronics and
        Telecommunication Engineering. I'm a Front-end developer having
        experience in frameworks like React,Nextjs. I'm an open-source
        enthusiast. I love to play basketball.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
