import { NextResponse } from "next/server"
import reservasModel from '../../../../models/reserva';


export async function GET(request, parametrosRota) {

        const id = parametrosRota.params.id;

        const reservas = (await reservasModel.query('idUsuario').eq(id).exec()).toJSON();

        console.log('reservas', reservas);

        return new NextResponse(JSON.stringify(reservas), {
            status: 200,
        })
}

export async function DELETE(
    request,
    { params }
  ) {
    const id = params.id 
    try {
        reservasModel.delete(id);

       return new NextResponse('Dados deletados com sucesso', {
            status: 201,
        });
    
    }catch(error) {
        return new NextResponse('Erro interno do servidor', {
            status: 500,
        })
    }
  }