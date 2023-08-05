'use client'
import { useState } from "react";
const headers = {
    'content-type': 'application/json'
}
export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [documento, setDocumento] = useState('');
    const [error, setError] = useState({message:'', input: ''});

    const onChangeNome = (evento) => {
        setNome(evento.target.value);
    }
    const onChangeEmail = (evento) => {
        setEmail(evento.target.value);
    }
    const onChangeTelefone = (evento) => {
        setTelefone(evento.target.value);
    }
    const onChangeSenha = (evento) => {
        setSenha(evento.target.value);
    }
    const onChangeDocumento = (evento) => {
        setDocumento(evento.target.value);
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();

        const formulario = {
            nome,
            email,
            telefone,
            senha,
            documento,
        }
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formulario)
        };
        console.log('RONALDO:',options);
      
          const response =  await fetch('http://localhost:3000/api/usuarios', options);
          const error = await response.json();
          console.log(error)
          setError(error);

      
      

    }
    return (<main >
        <div className="container">
            <h1>Cadastre-se!</h1>
            <div className="home_imgform">
                <img id="food-img" src="/imagens/comida.png" alt="food" />
            </div >
            <form onSubmit={onSubmitForm}>
                
                <label for="email">Nome:</label>
                <input type="text" id="email" name="email" required onChange={(evento) => onChangeNome(evento)} />
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={(evento) => onChangeEmail(evento)} />

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required  onChange={(evento) => onChangeSenha(evento)}/>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required onChange={(evento) => onChangeDocumento(evento)} pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00"/>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" onChange={(evento) => onChangeTelefone(evento)} required pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" placeholder="(00) 0000-0000"/>

                        <button type="submit" >Enviar</button>
                        </form>

                    </div>

                </main>


                )
}