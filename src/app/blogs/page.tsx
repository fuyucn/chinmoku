import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import { fakeBlogs } from "./fake"
import { Content } from "@/types/blogs"
import { compareDesc } from "date-fns"

const getAllBlock = async () => {
	const url = `${process.env.HOST}/api/md`
	const res = await fetch(url, {
		next: {
			revalidate: 1
		}
	})
	const data: Content[] = await res.json()
	return data
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