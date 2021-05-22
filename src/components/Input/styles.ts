import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: white;
    flex: 1;
`;

export const Label = styled.label`
    font-family: "Caviar Dreams Thin", sans-serif;
    font-size: 1.2rem;

    &::after {
        content: ":"
    }
`;

export const ResetInput = styled.input`
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
`;

export const InnerInput = styled(ResetInput)`
    border-bottom: 1px solid #FFF;

    height: 40px;
    width: 100%;
    opacity: .4;

    &:focus{
        opacity: 1;
    }

    transition: .4s;
`;

export const TextArea = styled.textarea`
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;

    margin-top: 15px;
    border: 1px solid #FFF;

    height: 120px;
    width: 100%;
    opacity: .4;

    &:focus{
        opacity: 1;
    }

    transition: .4s;
`;