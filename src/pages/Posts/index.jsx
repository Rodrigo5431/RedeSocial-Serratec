import React from 'react'
import {  CardBody, CardPost, Formulario, TextConteudo, LabText, Line, Main, MsgH1, BtnPost, BtnDiv } from './Posts.styles';
import { useForm } from 'react-hook-form';



export default function Posts() {
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPost = (data) => console.log(data);

  return (
   <Main>
      <CardPost>
        <MsgH1>Crie seu post aqui!</MsgH1>
            <Line></Line>
          <CardBody>
            <Formulario onSubmit={handleSubmit(addPost)}>
                <LabText>Conteudo</LabText>
                <TextConteudo type='text' name='conteudo' id='conteudo' placeholder='conteudo'
                cols="30" rows="10" {...register("conteudo")}></TextConteudo>
            
          
                <BtnDiv>

                <BtnPost>Postar</BtnPost>
                </BtnDiv>
              
            </Formulario>
          </CardBody>
      </CardPost>
   </Main>
  );
}

