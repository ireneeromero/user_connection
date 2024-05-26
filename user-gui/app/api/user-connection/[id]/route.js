import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

export async function GET(req) {
    try {
        const username = req.url.split("user-connection/")[1];
        const response = await fetch(`${apiUrl}/users/${username}/connections/`);
        const data = await response.json();
        console.log("data", data)
      
        
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching data", error);
        return NextResponse.json({ error: 'Failed to fetch connections' }, { status: 500 });
    }
}
