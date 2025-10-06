import { cn } from '@/lib/utils'
function CustomH1({ children }: any) {
	return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>
}

const overrideComponents = {
	h1: CustomH1,
}

// This gets called on every request
async function getData() {
	'use server'
	// Fetch data from external API
	const url = `${process.env.HOST}/api/md`
	const res = await fetch(url)
	const data = await res.json()
	return data
}

export default async function Page() {
	const ContentMeta = await getData()
	console.log('page', ContentMeta)

	if (!ContentMeta || ContentMeta.length === 0) {
		return <div className="p-4">No content available</div>
	}

	const firstContent = ContentMeta[0]
	const { data: parsedData } = firstContent
	const { title, date, tags, author } = parsedData

	return <>
		<div className={cn("sm:p-4", 'bg-white border-transparent rounded-md')}>
			<div className="mt-4">
				<h2 className="leading-snug font-medium text-2xl mb-2">{title}</h2>
				<div className="flex items-center">
					<div className='text-foreground/40 font-light text-xs mr-3'>{date}</div>
					<div className='text-foreground/40 font-light text-xs mr-3'>{author}</div>
				</div>
			</div>
		</div></>
}
