import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const name = await req.json()
        const res = await fetch(`http://api.crossref.org/works?query.author=${name}`, { cache: "no-store" })
        const data = await res.json()
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 });
    }
}