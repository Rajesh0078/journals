import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url)
        const query = searchParams.get('query')
        const res = await fetch(`https://api.crossref.org/works?query=${query}&rows=100`)
        const data = await res.json()
        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Something went wrong" })
    }
}