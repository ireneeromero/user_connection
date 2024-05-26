

import { NextResponse } from "next/server";
export async function POST(req) {
    const { user_id, connection_with_id } = req.body;
    const response = await fetch('http://localhost:8000/connections/', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, connection_with_id })
        });
    const data = await response.json();
    
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
