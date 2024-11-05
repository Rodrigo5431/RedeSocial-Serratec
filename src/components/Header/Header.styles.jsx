import { styled } from "styled-components";

export const Headerpp = styled.header`
  display: flex;
  background-color: #151718;
  height: 80px;
  align-items: center;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
`;
export const Logo = styled.img`
  width: 80px;
`;
export const Navigation = styled.nav`
  display: flex;
  width: 100%;
`;

export const Divi = styled.div`
  display: flex;
  width: 100%;
`;

export const Tittle = styled.h1`
  font-size: 35px;
  color: #fff;
  margin-left: 80px;
`;
export const Ulist = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: end;
  align-items: center;
  gap: 30px;
  text-decoration: none;
  margin-right: 100px;
`;

export const List = styled.li`
  flex-direction: row;
  color: #000000;
  text-decoration: none;
`;
export const Text = styled.h2`
  color: #bfa2d4;
  text-decoration: none;
`;
export const FotoUsuarioDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #303538;
color: #BFA2D4;
padding: 7px;
`;
export const InformacoesUsuario = styled.div`
flex-direction: column;
width: 150px;
`;

export const FotoUsuario = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 25px;
  cursor: pointer;
`;