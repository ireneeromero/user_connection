import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const id = req.url.split("user-connection/")[1];
        const response = await fetch(`http://localhost:8000/users/${id}/connections/`);
        const data = await response.json();
      
        
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching data", error);
        return NextResponse.json({ error: 'Failed to fetch connections' }, { status: 500 });
    }
}
