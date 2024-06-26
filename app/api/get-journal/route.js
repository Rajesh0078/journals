import { load } from "cheerio";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const doi = searchParams.get('doi');

        const res = await fetch(`https://sci-hub.se/${doi}`);
        const html = await res.text();

        const $ = load(html);

        const embedTag = $('embed[type="application/pdf"]');

        const pdfUrl = embedTag.attr('src');

        if (pdfUrl) {
            const url = "https://sci-hub.se" + pdfUrl;
            const pdfResponse = await fetch(url);

            const pdfBuffer = await pdfResponse.arrayBuffer();

            return new NextResponse(pdfBuffer, {
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });
        } else {
            return NextResponse.json({ success: false, message: 'PDF link not found' }, { status: 404 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 });
    }
}
