import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.header`
    max-width: 600px;
    margin-bottom: 50px;

    & > h1 {
        font-size: 2rem;
    }

    & > p {
        text-align: justify;
        line-height: 1rem;
        font-weight: thin;
    }
`;