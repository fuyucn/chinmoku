
import { loadContent } from "@/lib/content"
import { NextRequest, NextResponse } from "next/server"


export const fetchCache = 'default-no-store'

export async function GET(req: NextRequest, { params }: any) {
	const ret = loadContent(params.slug)
	return Response.json(ret, { status: 200 })
}