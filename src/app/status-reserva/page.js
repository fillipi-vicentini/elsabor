
'use client'

import { useEffect, useState } from "react";

const headers = {
    'content-type': 'application/json'
}

const options = {
    method: 'DELETE',
    headers,
};

const buscaLista = async () => {

    return await fetch('http://localhost:3000/api/status-reserva/7f2394c1-33c4-4422-882e-98aee671c8ba', {

        cache: 'no-cache'
    });

}

export default function Status() {
    const [lista, setLista] = useState([]);

    const deletar = async (id) => {

        await fetch(`http://localhost:3000/api/status-reserva/${id}`, options);

        const response = await (await buscaLista()).json()

        setLista(response);
    }
    
    useEffect(() => {
        buscaLista().then(async (resultado) => {
            const lista = await resultado.json();
            setLista(lista);
        });

    },[])

    return (
        <main>

            <table>
                <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>OBS:</th>

                </tr>
                {
                    lista.length > 0 && lista.map(el => (
                        <tr key={el.id}>
                            <td>{el.data}</td>
                            <td>{el.hora}</td>
                            <td>{el.observacao}</td>
                            <td><button className="btn-editar" >Editar</button></td>
                            <td><button className="btn-excluir" onClick={() => deletar(el.id)}>Excluir</button></td>
                        </tr>
                    ))
                }


            </table >

        </main >

    )
}