import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #fafafa;
`;

export const Login = styled.div`
    background: #ffffff;
    width: 350px;
    height: 375px;
    border: 0.5px solid #dbdbdb;
    padding: 10px 0px;
    margin-top: 34px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;


export const Logo = styled.img`
    width: 175px;
    height: 51px;
    margin: 37px 88px;

`
export const Cadastro = styled.div`
    width: 350px;
    height: 43px;
    border: 0.5px solid #dbdbdb;
    padding: 10px 0;
    margin-top: 10px;
    display: flex;
    flex-direction: row;

 

 `

export const Campos = styled.div`
    color: #fafafa; 
    width: 268px;
    font-size: 14px;
    text-align: start;
    margin: 0 40px;

`


// Componentes 



export const InputLogin = styled.input.attrs({
    id: "login",
    name: "login",
    placeholder: "Número de telemóvel, nome de utlizador ou...",
    type: 'text'
})`&&&{
    width: 250px;
    height: 20px;
    margin-left: 41px;
    margin-right: 49px;
    padding-top: 9px;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0;
    font-size: 12px;
    text-align: start;
    border: 1px solid #cac9c9;
    background-color: #fafafa;
    border-radius: 3px;
    ::placeholder {
        color: #9ca2a7;
    
    }:focus{
        border: 1px solid #959a9d;
        outline: none;
    }
}`


export const InputPassword = styled.input.attrs({
    id: "password",
    name: "password",
    placeholder: "Palavra-passe",
    type: 'text'
})`&&&{
    width: 250px;
    height: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 41px;
    margin-right: 49px;
    padding-top: 9px;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0;
    font-size: 12px;
    text-align: start;
    border: 1px solid #cac9c9;
    background-color: #fafafa;
    border-radius: 3px;
    ::placeholder {
        color: #9ca2a7;
    }:focus{
        border: 1px solid #959a9d;
        outline: none;
    }
}`


export const ButtonLogin = styled.button.attrs({
    id: "buttonLogin",
})`&&&{
    width: 265px;
    height: 30px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 5px;
    margin-bottom: 6px;
    color: #ffff;
    background-color: #b2dffc;
    border: none;
    border-radius: 3px;
    padding: 8px 40px;
    line-height: 18px;
    font-weight: 600;
}`



export const DivBorda = styled.div`
        display: flex;
        justify-content: row;

`

export const Borda = styled.hr`
    width: 120px;   
    margin: 24px 30px;
    
`

export const TextOr = styled.div`

    font-size: 13px;
    line-height: 18px;
    color: #97988f;
    margin: 15px -2px;
    font-weight: 600;

`

export const TextIniciar = styled.div`

    font-size:14px;
    color: #385185;
    line-height: 18px;
    letter-spacing: normal;
    margin: auto;
    font-weight: 500;

`

export const TextForget = styled.div`
    font-size: 12px;
    color: #385185;
    line-height: 16px;
    letter-spacing: normal;
    margin: auto;


`

export const TextCadastro = styled.div`
    font-size:14px;
    line-height: 18px;
    letter-spacing: normal;
    color: #262626;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin: 15px 73px;
    
`





export const CadastroText = styled.div`
    font-size:14px;
    line-height: 18px;
    letter-spacing: normal;
    color: #0095f6;
    font-weight: 500;
    margin-left: 5px;
`

export const TextObtem = styled.div`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    display: flex;
    margin-top: 18px;
    font-weight: 350;

`

export const Download = styled.div`
    width: 350px;
    height: 43px;
    margin-top: 20px;

`

export const Apple = styled.img`
    width: 136px;
    height: 43px;
    margin-left: 36px;
`

export const GPlay = styled.img`
    width: 136px;
    height: 43px;
    margin-left: 8px;
`


export const RodapeOne = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: row;

   
   
`

export const TextRodape = styled.div`
    color: #8e8e8e;
    font-size: 12px;
    margin: 0 12px;
    line-height: 16px;
`

export const Rodapetwo = styled.div`

        display: flex;
        margin-top: 19px;


`