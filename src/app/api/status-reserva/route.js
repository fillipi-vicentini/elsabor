


import { NextResponse } from "next/server"



 
export async function PUT(
    request
) {
    const form = await request.json();

    if (form.name.length <= 0) return new NextResponse(JSON.stringify({ message: 'Nome inválido', input: 'name' }), {
        status: 400
    });

    if (form.email.length <= 0) return new NextResponse(JSON.stringify({ message: 'Email inválido', input: 'email' }), {
        status: 400
    });

    if (form.data.length <= 0) return new NextResponse('Data inválido', {
        status: 400
    });

    if (form.hora.length <= 0) return new NextResponse('Hora inválido', {
        status: 400
    });

    if (form.telefone.length <= 0) return new NextResponse('Telefone inválido', {
        status: 400
    });

    try {
        // const saveData = await banco.update({form.id}, form);
        return new NextResponse('Dados salvos com sucesso', {
            status: 201,
        })
    } catch (error) {

        return new NextResponse('Erro interno do servidor', {
            status: 500,
        })
    }
    // console.log(email)
    // const message = JSON.stringify({ message: 'Email enviado com sucesso!' })

}

