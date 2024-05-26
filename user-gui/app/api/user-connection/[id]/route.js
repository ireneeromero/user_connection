import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        const username = req.url.split("user-connection/")[1];
        const response = await fetch(`${apiUrl}/users/${username}/connections/`, { cache: 'no-store'});
        const data = await response.json();
        
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching data", error);
        return NextResponse.json({ error: 'Failed to fetch connections' }, { status: 500 });
    }
}
