import { styled } from "styled-components";

export const Body = styled.div`
height: 100%;
`;

export const Principal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  margin-top: 150px;
`;

export const All = styled.div`
  display: block;
  justify-content: center;
  background-color: #151718;
  color: white;
`;
export const Postagens = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Tittle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Ulist = styled.ul`
  display: block;
  gap: 100px;
  height: 100vh;
  width: 100vh;
`;

export const ConteudoDiv = styled.div`
  margin-top: 35px;
  flex-grow: 1;
`;

export const Conteudo = styled.h1`
  margin-top: 100px;
`;

export const FotoPerfil = styled.img`
  width: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const NomeUsuario = styled.h2`
  font-weight: 100;
  font-size: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  margin-left: 15px;
  height: 500px;
  width: 100%;
  gap: 50px;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  background-color: #2e3234;
  box-shadow: 0px 0px 100px 0px rgba(152, 91, 202, 0.8);
  border-radius: 25px;

`;

export const Post = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`;
export const Configuration = styled.section`
`;

export const ConfigurationDiv = styled.h1`
  display: flex;
  justify-content: end;
  padding: 10px;
  height: 10px;
  width: 100px;
  cursor: pointer;
  margin-right: 10px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #353a3c;
  height: 65px;
  margin-top: 30px;
  border-radius: 15px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const ConfigurationButton = styled.h5`
display: flex;
margin-top: 10px;
cursor: pointer;
`;

export const Linha = styled.hr`
  
  height: 2px;
  border: 1px solid #fff;
  width: 100%;
  background-color: #fff;
`;
