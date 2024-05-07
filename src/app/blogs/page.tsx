import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import { fakeBlogs } from "./fake"

const Blogs = () => {



	return <div className='sm:p-4 space-y-2'>
		{
			fakeBlogs.map((b, i) => (
				<Link key={i} href={'/blogs/' + encodeURIComponent(b.title)} className="block">
					<BlogCard detail={b}></BlogCard>
				</Link>
			))
		}
	</div>
}

export default Blogs