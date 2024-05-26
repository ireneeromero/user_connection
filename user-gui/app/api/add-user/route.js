

import { NextResponse } from "next/server";
export async function POST(req) {
    const { username, name } = await req.json();

    const response = await fetch('http://localhost:8000/users/', {
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
