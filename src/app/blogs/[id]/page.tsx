'use client'

import { transition } from "@/lib/transition";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next/types";
import { fakeBlogs } from "../fake";



const BlogDetail = () => {
	const pathName = usePathname()

	const title = decodeURIComponent(pathName.replace('/blogs/', ''))

	const blog = fakeBlogs.find(b => b.title === title)
	if (!blog) {
		return <div className="p-4">EMPTY</div>
	}

	return (
		<div className="p-4">
			<span className="block text-wrap break-all" >details: {pathName}</span>
			<div className="mt-4">
				<motion.div layoutId={`blog-${title}-title`} transition={transition}>
					<h2 className="leading-snug font-semibold text-2xl">{blog.title}</h2>
				</motion.div>
				<motion.div layoutId={`blog-${title}-date`} transition={transition}>
					<div className='text-foreground/40 font-light text-xs'>{blog.date}</div>
				</motion.div>

				<div id='content'>

				</div>
			</div>
		</div>
	)
}

export default BlogDetail