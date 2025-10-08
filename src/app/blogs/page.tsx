import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import { Content } from "@/types/blogs"
import { compareDesc } from "date-fns"

const getAllBlock = async () => {
	try {
		const res = await fetch('/api/md', {
			next: {
				revalidate: 1
			}
		})

		if (!res.ok) {
			console.error(`Failed to fetch blogs: ${res.status} ${res.statusText}`)
			return []
		}

		const data: Content[] = await res.json()
		return data.sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)))
	} catch (error) {
		console.error('Error fetching blogs:', error)
		return []
	}
}

const Blogs = async () => {
	const data = await getAllBlock()

	return <div className='sm:p-4 space-y-2'>
		{
			data.map((b, i) => (
				<Link key={i} href={'/blogs/' + encodeURIComponent(b.id.replaceAll(' ', '-'))} className="block">
					<BlogCard detail={b.data}></BlogCard>
				</Link>
			))
		}
	</div>
}

export default Blogs