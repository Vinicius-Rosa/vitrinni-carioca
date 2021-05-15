import styled from 'styled-components';

interface Props {
    isAdmin: Boolean;
}

export const Container = styled.div``;

export const Content = styled.div<Props>`
    margin-left: ${({ isAdmin }) => isAdmin ? "256px" : "unset"};
    padding: 50px;

    max-width: 1200px;
    margin: 0 auto;
`;
