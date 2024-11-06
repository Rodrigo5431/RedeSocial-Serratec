import { styled } from "styled-components";


export const SupportPageWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #151718;
  min-height: 100vh;
`;


export const SupportHeader = styled.header`
  background-color: #4B2C63;
  color: white;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`;


export const SupportContent = styled.section`
  margin-top: 20px;
  text-align: center;
  color: #FFF;
`;


export const SupportOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  color: black;
  flex-wrap: wrap; 
`;

export const Option = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 100px 0px rgba(152, 91, 202, 0.8);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  height: auto; 
  max-height: 600px; 
  overflow: hidden; 
  &:hover {
    transform: translateY(-5px);
  }
`;

export const OptionTwo = styled(Option) `
  display: flex;
  justify-content: center;
  gap: 30px;
  color: black;
  flex-wrap: wrap; 
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 100px 0px rgba(152, 91, 202, 0.8);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  height: 365px; 

 
  
  &:hover {
    transform: translateY(-5px);
  }
`;







export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 15px;


  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
`;


export const FaqQuestion = styled.h4`
  font-size: 18px;
  color: #4B2C63;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  background-color: #f1f1f1;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #4B2C63;
    color: white;
  }
`;


export const FaqAnswer = styled.p`
  font-size: 16px;
  color: black;  // Cor preta para o texto da resposta
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin-top: 10px;
  max-width: 100%;
  line-height: 1.5;
  opacity: 0;
  animation: slideIn 0.5s forwards;

  @keyframes slideIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
