import { styled } from 'styled-components'

export const Main = styled.main`
    background-color: #151718;
    min-height:100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    color:#fff;
`;

export const CardPost = styled.div`
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 0px 100px 0px rgba(75, 44, 99, 0.80);
    padding: 30px 70px;
    border-radius: 15px;
    width:50%;
    height:60%;
 
`;

export const MsgH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-align: center;
     background: linear-gradient(270deg, #4b2c63 40%, #bfa2d4 60%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
    color: #fff;
    font-size: 3rem;
    margin-bottom: 5px;
`;

export const Line = styled.div`
    height: 2px;
    background-color: #BFA2D4;
`

export const CardBody = styled.div`
    margin-top: 25px;
    
`;





export const LabText = styled.label`
    display: block;
    margin-bottom: 7px;
    font-size: 1.8rem;
    color:#c9c9c9;
    
`;

export const Formulario = styled.form`
    align-items: center;
    display: block;
    height: 50%;

`;

export const TextConteudo = styled.textarea`
    width: 100%;
    height: 190px;
    border-radius: 10px;
    font-size: 1.2rem;
    resize: none;
    padding-left: 15px;
    

`;

export const BtnPost = styled.button`
    
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    padding: 5px 50px;
    color: #fff;
    background-color: #4B2C63;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    
`;

export const BtnDiv = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    margin:15px;
`


