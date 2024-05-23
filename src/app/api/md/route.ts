import { join } from "path"
import { NextRequest, NextResponse } from "next/server"
import { loadAllContents } from "@/lib/content"

const postsDirectory = join(process.cwd() + '/src', "mdx")

export const fetchCache = 'default-no-store'

export async function GET(req: Request, res: Response) {
	console.log("DEBUG!!")
	// const ret = readMd('test')
	const allFiles = loadAllContents()
	console.error("TEST!!!", allFiles)
	return Response.json(allFiles, { status: 200 })
}