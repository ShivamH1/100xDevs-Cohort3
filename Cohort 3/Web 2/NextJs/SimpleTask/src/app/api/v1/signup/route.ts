import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

// export async function GET() {
//     const users = await prismaClient.user.findMany();
//     return NextResponse.json({ users });
// }

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("data", data);

    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password,
        },
    })
    
    return NextResponse.json({
        message : "You have signed up successfully!",
        status : 200
    })
}