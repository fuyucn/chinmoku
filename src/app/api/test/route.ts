export async function GET(request: Request) {

	return new Response('Hello, test!', {
		status: 200,
	})
}

export async function POST(request: Request) {
	return new Response('Hello, test! POST', {
		status: 200,
	})
}