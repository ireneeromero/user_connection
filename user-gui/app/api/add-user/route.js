

import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

export async function POST(req) {
    const { username, name } = await req.json();

    const response = await fetch(`${apiUrl}/users/`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username,
            name: name })
        });
    const data = await response.json();
    
    
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
