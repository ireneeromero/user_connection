

import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;


export async function POST(req) {
    const { user_username, connection_with_username } = await req.json();
    
    const response = await fetch(`${apiUrl}/connections/`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            user_username: user_username, 
            connection_with_username: connection_with_username })
        });
    const data = await response.json();

    
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
