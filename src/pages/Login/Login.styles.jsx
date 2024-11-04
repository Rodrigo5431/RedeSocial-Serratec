import {styled} from 'styled-components';


export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
background-color: #151718;
width: 100%;
height: 100vh;
color: #fff;

`;
export const All = styled.div`
justify-content: center;
align-items: center;
margin-bottom: 80px;
background: rgba(255, 255, 255, 0.04);
box-shadow: 0px 0px 100px 0px rgba(152, 91, 202, 0.8);
width: 20%;
@media (max-width: 800px) {
    width: 50%;
}

`;
export const Formulario = styled.form`
display: flex;
flex-direction: column;
padding: 20px;

`
export const H2 = styled.h2`
display: flex;
justify-content: center;
margin-bottom: 60px;
margin-left: 10px;
margin-top: 5px;
font-size: 40px;
font-family:Whereas recognition of the inherent dignity;
@media (max-width: 650px) {
    font-size: 30px;
}

`
export const Input = styled.input`
margin-bottom: 15px;
height: 30px;
background-color: #45444480;
color: white;
`;

export const Input2 = styled(Input)`
margin-bottom: 30px;

`;
export const Botao = styled.button`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 22px;
    padding: 5px 50px;
    color: #fff;
    background-color: #4b2c63;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 15px;
    width: 100%;

    @media (max-width: 650px) {
        width: 50px;
    font-size: 15px;
    }
`;
