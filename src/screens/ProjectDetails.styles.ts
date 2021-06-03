import styled from 'styled-components';
import { Carousel as AntCarousel } from 'antd';
import { motion } from 'framer-motion';

interface Props {
    hovering: boolean;
}

export const Container = styled.section`
    min-height: 100vh;
    max-width: 1250px;

    padding: 50px;
    margin: 0 auto;

    box-sizing: content-box;
`;

export const Wrapper = styled(motion.div)`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 800px;
    margin: 0 auto;

    @media(max-width: 670px){
        width: calc(100vw - 100px);
        overflow-x: hidden;
    }
`;

export const ImgWrapper = styled.div`
    width: 100%;
`;

export const Img = styled.img`
    display: flex;
    align-self: flex-end;

    height: 500px;
    max-width: 500px;

    margin: 0 auto;

    @media(max-width: 670px){
        width: calc(100vw - 100px);
        margin: 0;
        height: unset;
    }
`;

export const Carousel = styled(AntCarousel)`
    max-width: 500px;
    height: 500px;

    @media(max-width: 670px){
        width: 100vw;
        height: unset;
    }
`;

export const Pages = styled.div<Props>`
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 30px;

    background-color: rgba(0,0,0,0.6);
    color: white;

    opacity: ${({ hovering }) => hovering ? 1 : 0};
    transition: 0.4s;

    @media(max-width: 670px){
        opacity: 1;
    }
`

export const Content = styled(Wrapper)`
    display: flex;
    align-items: flex-start;

    margin-top: 50px;

    @media(max-width: 880px){
        flex-direction: column;
    }
`;

// export const ColTitle = styled.div``;
export const Infos = styled.div`
    margin-top: 20px;
    flex: 1;

    font-size: 1.2rem;
    max-width: 200px;

    min-height: 320px;
`;

export const Item = styled(motion.div)``;

export const ItemTitle = styled.h2``;

export const ItemContent = styled.p`
    font-family: 'Caviar Dreams Thin', sans-serif;
`;

export const CarouselBtn = styled.button`
    @media(max-width: 670px){
        display: none;
    }
`;
