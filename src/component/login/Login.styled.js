import styled from 'styled-components';

export const LoginPage = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100vh
`;

export const BrandSection = styled.div`
    width: 25%;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LoginSection = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    gap:20px;
`;
export const Divider = styled.div`
    width: 0.5px;
    height: 90vh;
    background-color: grey;
    margin-top: 10px;
`;

export const LoginButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 5px;
    padding: 5px; 
`;

export const Input = styled.input`
    border-radius: 5px;
    padding: 5px; 
    border: 1px solid grey;
`;