'use client'

import { transition } from "@/lib/transition";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next/types";
import { fakeBlogs } from "../fake";
import BlogTags from "@/components/blog/BlogTags";



const BlogDetail = () => {
	const pathName = usePathname()

	const title = decodeURIComponent(pathName.replace('/blogs/', ''))

	const blog = fakeBlogs.find(b => b.title === title)
	if (!blog) {
		return <div className="p-4">EMPTY</div>
	}

	return (
		<div className="sm:p-4">
			<div className="mt-4">
				<motion.div layoutId={`blog-${title}-title`} transition={transition}>
					<h2 className="leading-snug font-medium text-2xl mb-2">{blog.title}</h2>
				</motion.div>
				<div className="flex items-center">
					<motion.div layoutId={`blog-${title}-date`} transition={transition}>
						<div className='text-foreground/40 font-light text-xs mr-3'>{blog.date}</div>
					</motion.div>
					<div>{blog.tags && <BlogTags tags={blog.tags} />}</div>
				</div>

				<div id='content'>
					...
				</div>
			</div>
		</div>
	)
}

export default BlogDetail