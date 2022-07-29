import React from 'react';
import '../src/index.css';
import { Login, Container, Logo, Cadastro, InputLogin, InputPassword, ButtonLogin, Borda, DivBorda, TextOr, TextIniciar,TextForget, TextCadastro,CadastroText, TextObtem, Download, Apple, GPlay, RodapeOne, TextRodape, Rodapetwo} from './components/style';
const imageInstagram = require('./assets/images/logo.png') as string;
const imageApple = require('./assets/images/apple.png') as string;
const imageGPlay = require('./assets/images/googleplay.png') as string;






export default function index() {

  return (
    <>

    <body>
      
      <Container>
          
          <Login> 
          <Logo src={imageInstagram}/>
            <InputLogin/> 
    
            <InputPassword/>
            <ButtonLogin> Iniciar sessão </ButtonLogin>
            
            <DivBorda> <Borda/><TextOr> OU</TextOr><Borda/> </DivBorda>

            <TextIniciar>Iniciar sessão com o Facebook</TextIniciar>
          
    
            <TextForget> Esqueces-te da palavra-passe?</TextForget>
        
        
        
          </Login>
        
          <Cadastro>
            
            
            <TextCadastro>Não tens uma conta? <CadastroText> Regista-te </CadastroText> </TextCadastro> 
           
          
          </Cadastro>


          <TextObtem> Obtém a aplicação. </TextObtem>

          <Download> 
            
            <Apple src={imageApple}/>  
            <GPlay src={imageGPlay}/>
          
          </Download>


          <RodapeOne> 
         
          <TextRodape>Meta</TextRodape>
          <TextRodape>Sobre</TextRodape>
          <TextRodape>Blogue</TextRodape>
          <TextRodape>Empregos</TextRodape>
          <TextRodape>Ajuda</TextRodape>
          <TextRodape>API</TextRodape>
          <TextRodape>Privacidade</TextRodape>
          <TextRodape>Termos</TextRodape>
          <TextRodape>Contas principais</TextRodape>
          <TextRodape>Localizações</TextRodape>
          <TextRodape>Instagram Lite</TextRodape>
          <TextRodape>Carregamento de contactos e não utilizadores </TextRodape>
      
          </RodapeOne>


        <Rodapetwo>

        <TextRodape>Português(Portugal)</TextRodape>
        <TextRodape>© 2022 Instagram from Meta </TextRodape>


        </Rodapetwo>



      
      </Container>
        
       

    </body>
    </>
  );
}
