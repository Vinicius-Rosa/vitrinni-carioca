import styled from 'styled-components';

interface Props {
    isAdmin: Boolean;
}

export const Container = styled.div``;

export const Content = styled.div<Props>`
    padding: ${({ isAdmin }) => !!isAdmin ? "50px" : "unset"};
    padding-left: ${({ isAdmin }) => !!isAdmin ? "calc(256px + 50px)" : "unset"};

    margin: 0 auto;
`;
