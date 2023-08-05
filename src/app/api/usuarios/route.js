import { NextResponse } from "next/server";

import userModel from '../../../models/user';

import {v4} from 'uuid';

import { hashSync } from 'bcryptjs';

export async function POST(
    request
) {
    const form = await request.json();

    console.log('dados recebidos',form);

    if (form.nome.length <= 0) return new NextResponse(JSON.stringify({ message: 'Nome inválido', input: 'name' }), {
        status: 400
    });

    console.log('passei do nome');

    if (form.email.length <= 0) return new NextResponse(JSON.stringify({ message: 'Email inválido', input: 'email' }), {
        status: 400
    });

    console.log('passei do email');

    if (form.telefone.length <= 0) return new NextResponse(JSON.stringify({ message: 'Telefone inválido', input: 'telefone' }), {
        status: 400
    });

    console.log('passei do telefone');

    if (form.documento.length <= 0) return new NextResponse(JSON.stringify({ message: 'Documento inválido', input: 'documento' }), {
        status: 400
    });

    console.log('passei do documento');

    if (form.senha.length <= 0) return new NextResponse(JSON.stringify({ message: 'Senha inválido', input: 'senha' }), {
        status: 400
    });

    console.log('passei do senha');

    try {
        const senhaCriptografada =  hashSync(form.senha, 10);

        const id = v4();
        
        const saveData = await userModel.create({
            id: id,
            nome: form.nome,
            documento: form.documento,
            email: form.email,
            senha: senhaCriptografada,
            telefone: form.telefone,
            dataCriacao: new Date().getTime()

            
        });

        console.log('usuario salvo',saveData)

        return new NextResponse('Dados salvos com sucesso', {
            status: 201,
        })
    } catch (error) {

        console.log(error);

        return new NextResponse('Erro interno do servidor', {
            status: 500,
        })
    }
    // console.log(email)
    // const message = JSON.stringify({ message: 'Email enviado com sucesso!' })

}

