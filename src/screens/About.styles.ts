import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;

    @media (max-width: 1240px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Content = styled.p`
    margin-top: 30px;
    font-size: 1rem;
`;