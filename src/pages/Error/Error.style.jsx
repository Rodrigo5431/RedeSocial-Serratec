import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const Container = styled.div`
  background-color: #151718;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c9c9c9;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Imagem = styled.img`

  @media (max-width: 480px) {
    width: 90%; 
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 40%; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 30%;
  }

  @media (min-width: 1201px) {
    width: 30%;
  }
`;

export const TextContainer = styled.div`
  padding: 1%;
  margin-left: 5%;
  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const Titulo = styled.h1`
  background: linear-gradient(270deg, #4b2c63 40%, #bfa2d4 60%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 15px;
  @media (max-width: 480px) {
    font-size: 4em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2.6em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 3.5em;
  }

  @media (min-width: 1400px) {
    font-size: 7em;
  }
`;

export const SubTitulo = styled.h2`
  font-size: 2em;
  @media (max-width: 480px) {
    font-size: 2.2em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.4em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 2em;
  }

  @media (min-width: 1400px) {
    font-size: 3em;
  }
`;

export const SubTituloDois = styled.h3`
  margin-top: 10px;
  font-size: 1.5em;
  @media (max-width: 480px) {
    font-size: 2em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.4em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 2em;
  }

  @media (min-width: 1400px) {
    font-size: 2.5em;
  }
`;

export const SubTituloTres = styled.h3`
  margin-top: 30px;
  font-size: 0.8em;
  color: rgba(4, 211, 97, 1);
  margin-bottom: 30px;
  @media (max-width: 480px) {
    margin-top: 3em;
    font-size: 1em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 0.9;
  }

  @media (min-width: 1400px) {
    margin-top: 50px;
    font-size: 1.2em;
  }
`;

export const SubTituloQuatro = styled.h3`
  color: #787881;
  margin-top: 5px;
  font-size: 0.9em;
  @media (max-width: 480px) {
    font-size: 1em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 1em;
  }

  @media (min-width: 1400px) {
    font-size: 1.3em;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 480px) {
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: #4b2c63;
  color: #c9c9c9;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: #3a224f;
  }

  @media (max-width: 480px) {
    height: 36px;
    width: 125px;
    font-size: 0.9em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 35px;
    width: 120px;
    font-size: 0.8em;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    height: 40px;
    width: 150px;
    font-size: 1em;
  }

  @media (min-width: 1400px) {
    height: 50px;
    width: 200px;
    font-size: 1.3em;
  }
`;




