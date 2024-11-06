import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import Header from "../../components/Header";
import { 
  SupportPageWrapper, 
  SupportContent, 
  SupportOptions, 
  Option, 
  OptionButton, 
  FaqQuestion, 
  FaqAnswer, 
  OptionTwo
} from './Suporte.styles'; 

export default function Suporte() {
  const [activeIndex, setActiveIndex] = useState(null); 


  const faqs = [
    { question: 'Como posso recuperar minha senha?', answer: 'Você pode recuperar sua senha clicando em "Esqueci a senha" na tela de login.' },
    { question: 'Como editar meu perfil?', answer: 'Clique no seu avatar e depois em "Editar Perfil" para fazer alterações.' },
    { question: 'Posso excluir minha conta?', answer: 'Sim, você pode excluir sua conta nas configurações de privacidade.' }
  ];

 
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };


  const handleContactClick = () => {
    window.location.href = 'https://wa.me/+5524992798292?text=Olá,%20preciso%20de%20ajuda!'; 
  };

  return (
    <SupportPageWrapper>
    <Header/>
      <SupportContent>
        <h2>Como podemos te ajudar?</h2>
        <p>Se você está com dúvidas ou problemas, nós estamos aqui para ajudar!</p>
        
     
        <SupportOptions>
       
          <Option className="faq">
            <h3>FAQ</h3>
            <p>Consulte as perguntas frequentes para soluções rápidas e fáceis.</p>
        
            {faqs.map((faq, index) => (
              <div key={index}>
                <FaqQuestion onClick={() => toggleFaq(index)}>
                  {faq.question}
                </FaqQuestion>
                {activeIndex === index && <FaqAnswer>{faq.answer}</FaqAnswer>}
              </div>
            ))}
          </Option>

          <OptionTwo>
            <h3>Contato</h3>
            <p>Não encontrou o que precisava? Entre em contato com nossa equipe de suporte.</p>
            <OptionButton onClick={handleContactClick}>
              <FaWhatsapp size={35} style={{ marginRight: '8px', color: '#25D366' }} />Falar com Suporte
            </OptionButton>
          </OptionTwo>
       
        </SupportOptions>
      </SupportContent>
    </SupportPageWrapper>
  );
}
