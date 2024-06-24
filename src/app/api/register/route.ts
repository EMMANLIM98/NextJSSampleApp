import { type NextRequest } from 'next/server'
import * as schema from '~/server/db/schema'

export async function POST(request: NextRequest) { 
    const json = await request.json() as unknown as schema.IRegistrant;
    const zodResult = schema.RegistrantValidator.safeParse(json);

    return new Response(JSON.stringify(zodResult));
}