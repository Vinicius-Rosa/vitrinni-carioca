import styled from 'styled-components';

interface Props {
    light?: boolean;
}

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
export const Residentials = styled(Container)`
    padding-top: 0;
`;
export const Inners = styled.section`
    background-color: var(--tertiary-color);
`;
export const Commercials = styled(Container)``;

export const List = styled.section`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 30px;

    margin: 0 auto;

    @media (max-width: 1240px) {
        justify-content: center;
    }
`
export const Subtitle = styled.h1<Props>`
    font-weight: bold;
    font-size: 2rem;
    color: ${({ light }) => light ? 'var(--secondary-color)' : 'var(--tertiary-color)'};

    @media (max-width: 1240px) {
        text-align: center;
        margin-left: unset;
    }
`