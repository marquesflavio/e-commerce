//rota de atualização e de delete.

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH (
    req : Request,
    { params }: {params: {storeId: string} }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Não autenticado!", {status: 401});
        }
    }
 catch (error) {
    
}}
