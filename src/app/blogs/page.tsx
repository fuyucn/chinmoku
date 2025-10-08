import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import { Content } from "@/types/blogs"
import { loadAllContents } from "@/lib/content"

const Blogs = async () => {
	const data = loadAllContents()

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