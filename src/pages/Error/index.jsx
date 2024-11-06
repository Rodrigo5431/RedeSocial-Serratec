import React from 'react'
import { Button, ButtonContainer, Container, Imagem, SubTitulo, SubTituloDois, SubTituloQuatro, SubTituloTres, TextContainer, Titulo } from './Error.style'
import Foto from '../../assets/buraco_negro.png'


export default function Error() {
  return (
    <div>
      <Container>
        <Imagem src={Foto} alt="buraco negro" />
        <TextContainer>
          <Titulo>Erro 404... </Titulo>
          <SubTitulo>Repito, 404.</SubTitulo>
          <SubTituloDois>Alguém me ouve?...</SubTituloDois>
          <SubTituloTres>SUB ESTAÇÃO ESPACIAL RESPONDE:</SubTituloTres>
          <SubTituloQuatro>Acho que você ultrapassou todos </SubTituloQuatro>
          <SubTituloQuatro>os limites do universo.</SubTituloQuatro>
          <SubTituloQuatro>A página requisitada não foi encontrada. </SubTituloQuatro>
          <ButtonContainer>
            <Button to='/home'>Voltar à Home</Button>
          </ButtonContainer>
        </TextContainer>
      </Container>
    </div>
  );
}
