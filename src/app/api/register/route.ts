import { type NextRequest } from 'next/server'
import * as schema from '~/server/db/schema'
import { db } from '~/server/db'

export async function POST(request: NextRequest) { 
    const json = await request.json() as unknown as schema.IRegistrant;
    const zodResult = schema.RegistrantValidator.safeParse(json);

    const result = await db.insert(schema.registrants).values(zodResult.data!).returning();

    if(result) {
        return new Response(JSON.stringify({
            message: "Successfully registered",
            data: result
        }));           
    } else {
        return new Response(JSON.stringify({
            message: "Failed to register",
            data: { ...(zodResult.error?.flatten().fieldErrors || {}) }
        }));
    }
}