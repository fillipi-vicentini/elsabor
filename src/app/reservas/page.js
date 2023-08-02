'use client'
import { useState } from 'react';

const headers = {
    'content-type': 'application/json'
}


export default function Reservas() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [observacao, setObservacao] = useState('');
    const [error, setError] = useState({message:'', input: ''});

    const onChangeName = (evento) => {
        setName(evento.target.value);
    }
    const onChangeEmail = (evento) => {
        setEmail(evento.target.value);
    }
    const onChangeTelefone = (evento) => {
        setTelefone(evento.target.value);
    }
    const onChangeData = (evento) => {
        setData(evento.target.value);
    }
    const onChangeHora = (evento) => {
        setHora(evento.target.value);
    }
    const onChangeObservacao = (evento) => {
        setObservacao(evento.target.value);
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();

        const formulario = {
            name,
            email,
            telefone,
            hora,
            data,
            observacao
        }
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(formulario)
        };
        console.log('RONALDO:',options);
      
          const response =  await fetch('http://localhost:3000/api/reservas', options);
          const error = await response.json();
          console.log(error)
          setError(error);

      
      

    }
    return (
        <div className="container">
            <h1>Faça sua reserva !</h1>
            <div className="home_imgform">
                <img id="food-img" src="/imagens/relogio.png" alt="food" />
            </div>

            <form onSubmit={onSubmitForm}>

                <label for="name">Nome:  </label>
                <input type="text" id="name" name="name"  onChange={(evento) => onChangeName(evento)} />
                <span style={{color:'red'}}>{(error.message.length > 0 && error.input == 'name') && error.message}</span>
                
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="e-mail"  onChange={(evento) => onChangeEmail(evento)} />
                <span style={{color:'red'}}>{(error.message.length > 0 && error.input == 'email') && error.message}</span>

                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="Telefone" required onChange={(evento) => onChangeTelefone(evento)} />

                <label for="date">Data:</label>
                <input type="date" id="date" name="date" required onChange={(evento) => onChangeData(evento)} />

                <label for="time">Hora:</label>
                <input type="time" id="time" name="time" required onChange={(evento) => onChangeHora(evento)} />

                <label for="observation">Observação:</label>
                <textarea id="observation" name="observation" onChange={(evento) => onChangeObservacao(evento)}></textarea>

                <input type="submit" className="home-btn" value="Enviar" />
            </form>
        </div>
    )
}