import { NextResponse } from "next/server"
import reservaModel from '../../../models/reserva';
import {v4} from 'uuid';

export async function POST(
    request
) {
    const form = await request.json();

    if (form.data.length <= 0) return new NextResponse(JSON.stringify({ message: 'Data inválida', input: 'data' }), {
        status: 400
    });

    if (form.hora.length <= 0) return new NextResponse(JSON.stringify({ message: 'Hora inválida', input: 'hora' }), {
        status: 400
    });

 
    console.log('passei da verificacao', form);
    const id = v4();
    try {
        const saveData = await reservaModel.create({
            id: id,
            data: form.data,
            hora: form.hora,
            idUsuario: '7f2394c1-33c4-4422-882e-98aee671c8ba',
            observacao: form.observacao
        });
        
        console.log('reserva criada', saveData);

        return new NextResponse('Dados salvos com sucesso', {
            status: 201,
        })
    } catch (error) {
        console.log(error)
        return new NextResponse('Erro interno do servidor', {
            status: 500,
        })
    }
    // console.log(email)
    // const message = JSON.stringify({ message: 'Email enviado com sucesso!' })

}

