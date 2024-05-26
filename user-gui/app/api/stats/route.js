

import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;
export const dynamic = "force-dynamic";

export async function GET(req) {
    const response = await fetch(`${apiUrl}/stats/`);
    const data = await response.json();
    
    
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
