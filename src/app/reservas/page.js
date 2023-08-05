'use client'

import { useState } from 'react';

const headers = {
    'content-type': 'application/json'
}


export default function Reservas() {
  
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [observacao, setObservacao] = useState('');
    const [error, setError] = useState({message:'', input: ''});

 
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