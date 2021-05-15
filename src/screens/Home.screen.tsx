import React from "react";
import {
    Container,
    Hero,
    Title,
    TitleShadow,
    TitleContainer,
    ShortDescription,
    ProjectSection,
    Content,
    CarouselContainer,
    Img,
} from "./Home.styles";

import Line from '../assets/Line.svg'
import Button from "../components/Button";
import { Carousel } from "antd";
// import Carousel from "../components/Carousel";

import img1 from '../assets/img1.png'

export default function Home() {
    return (
        <Container>
            <Hero>
                <Content>
                    <TitleContainer>
                        <Title>Bem-vindo</Title>
                        <TitleShadow>Bem-vindo</TitleShadow>
                    </TitleContainer>

                    <Line />

                    <ShortDescription>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </ShortDescription>

                    <Button>Descubra nossos diferenciais</Button>
                </Content>

                <CarouselContainer>
                    <Carousel dots={{ className: "dots" }} >
                        <Img src={img1} alt="dale" />
                        <Img src={img1} alt="dale" />
                    </Carousel>
                </CarouselContainer>
            </Hero>

            <ProjectSection>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </ProjectSection>
        </Container>
    )
}