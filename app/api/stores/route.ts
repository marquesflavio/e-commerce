import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { name } = body;
        //conforme schema.prisma, só precisamos receber userId e name.
        if (!userId) {
            return new NextResponse ("Não autorizado!", { status: 401});
        }

        if (!name) {
            new NextResponse ("Nome é obrigatório!", { status: 400});
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId,
            }
        });

        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Erro Interno", { status: 500});
    }
};