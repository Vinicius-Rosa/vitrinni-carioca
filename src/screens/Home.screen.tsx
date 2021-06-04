import React, { useCallback, useEffect, useMemo } from "react";
import { useRouter } from 'next/router'

import {
    Container,
    Hero,
    ShortDescription,
    ProjectSection,
    Content,
    ProjectContainer,
    ButtonContainer,
} from "./Home.styles";

import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Title, { Theme } from "../components/Title";

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import ProjectItem from "../components/ProjectItem";

interface HomeProps {
    title: string;
    text: string;
}

export default function Home({ title, text }) {
    const router = useRouter();

    const handleRoute = useCallback(e => {
        e.preventDefault()
        router.push('/projetos')
    }, [router])

    const rawImgs = useMemo<string[]>(() => [img1, img1], []);
    const images = useMemo<string[]>(() => rawImgs.filter((_, i) => i <= 1) || [], [rawImgs])

    const { ref: descRef, inView } = useInView({ threshold: 1 });
    const descAnimation = useAnimation();

    useEffect(() => {
        if (!!inView) descAnimation.start({ y: 0, opacity: 1, });
    }, [inView]);

    return (
        <Container>
            <Hero>
                <Content>
                    <Title>{title}</Title>

                    <ShortDescription
                        ref={descRef}
                        animate={descAnimation || { y: 0, opacity: 1 }}
                        initial={{ y: 50, opacity: 0, }}
                        transition={{
                            type: "inerttia",
                            duration: 0.6,
                            delay: 1,
                        }}
                    >
                        {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. */}
                        {text}
                    </ShortDescription>

                    <Button>Descubra nossos diferenciais</Button>
                </Content>

                <Carousel images={images} />
            </Hero>

            <ProjectSection>
                <ProjectContainer>
                    <Title theme={Theme.dark}>Projetos</Title>

                    <ProjectItem images={[img2, img1]} title="Residência Guarapari 2" />
                    <ProjectItem inverted images={[img2, img1]} title="Corporativo Barra da Tijuca" />
                    <ProjectItem images={[img2, img1]} title="Apartamento Vila Velha - ES" />

                    <ButtonContainer>
                        <Button light onClick={handleRoute}>Quero ver mais projetos</Button>
                    </ButtonContainer>
                </ProjectContainer>
            </ProjectSection>
        </Container>
    )
}