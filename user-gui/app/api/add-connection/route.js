

import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;
console.log("apiUrl",apiUrl)

export async function POST(req) {
    const { user_id, connection_with_id } = await req.json();
    
    const response = await fetch(`${apiUrl}/connections/`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            user_username: user_id, 
            connection_with_username: connection_with_id })
        });
    const data = await response.json();

    
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
