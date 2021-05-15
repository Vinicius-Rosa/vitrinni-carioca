import React from "react";
import { Container, Title, TitleShadow, TitleContainer, ShortDescription } from "./Home.styles";

import Line from '../assets/Line.svg'
import Button from "../components/Button";

export default function Home() {
    return (
        <Container>
            <TitleContainer>
                <Title>Bem-vindo</Title>
                <TitleShadow>Bem-vindo</TitleShadow>
            </TitleContainer>

            <Line />

            <ShortDescription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </ShortDescription>

            <Button>Descubra nossos diferenciais</Button>
        </Container>
    )
}