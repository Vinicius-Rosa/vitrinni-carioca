import styled from 'styled-components';

export const Container = styled.div``;

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  height: 80vh;

  padding: 0 50px;
  margin: 0 auto;
`;
export const Content = styled.div`
  flex: 1;
`;
export const CarouselContainer = styled.div`
  position: absolute;
  right: 0;

  width: 600px;

  z-index: 1;
`;

export const Img = styled.img`
  height: 100vh;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 94px;

  margin-bottom: 0;
`;

export const TitleShadow = styled.h1`
  position: absolute;
  top: -18px;
  left: 10px;

  font-weight: bold;
  font-size: 94px;

  letter-spacing: 3px;
  
  -webkit-text-stroke: 1px #231F2066;
  -webkit-text-fill-color: transparent;

  margin-bottom: 0;
  z-index: 2;
`;

export const ShortDescription = styled.p`
    margin-top: 30px;
    max-width: 500px;

    text-align: justify;

    margin-bottom: 100px;
`;


export const ProjectSection = styled.div`
  background-color: var(--tertiary-color);
`;

export const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;