

import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL;

export async function GET(req) {
    const response = await fetch(`${apiUrl}/get_users/`);
    const data = await response.json();
   
 
    return NextResponse.json(
		data,
		{ status: 200 },
	);
    
}
