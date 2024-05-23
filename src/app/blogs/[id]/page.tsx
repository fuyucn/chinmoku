'use server'

import { cn } from "@/lib/utils";
import BlogTitle from '@/components/blog/Title'
import BlogMeta from "@/components/blog/BlogMeta";

// This gets called on every request
async function getData(id: string) {
	// Fetch data from external API
	const url = `${process.env.HOST}/api/md/${id}`
	const res = await fetch(url)
	const data = await res.json()
	return data
}


const BlogDetail = async ({ params }: { params: { id: string } }) => {
	// const pathName = usePathname()

	// const title = decodeURIComponent(pathName.replace('/blogs/', ''))
	const title = 'fake'
	const { data, content } = await getData(params.id)
	console.log('333', params)

	if (!data) {
		return <div className="p-4">EMPTY</div>
	}

	return (
		<div className={cn("sm:p-4", 'bg-white border-transparent rounded-md')}>
			<div className="mt-4">
				<BlogTitle key={title} title={data.title} />
				<BlogMeta key={title} {...data} />
				<div id='content'>
					{content}
				</div>
			</div>
		</div>
	)
}

export default BlogDetail
