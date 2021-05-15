import styled from 'styled-components';

export const Container = styled.div`
  
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
`;

export const ShortDescription = styled.p`
    margin-top: 30px;
    max-width: 500px;

    text-align: justify;

    margin-bottom: 100px;
`;