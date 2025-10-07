'use client'
import { transition } from "@/lib/transition"
import { motion } from "framer-motion"
import BlogTags from "./BlogTags"
import { ContentMeta } from "@/types/blogs"

import { format } from 'date-fns'

const BlogMeta = (
	{ tags, date, key }:
		{ tags?: ContentMeta["tags"], date: string, key: string }
) => {
	return <div className="flex items-center">
		<motion.div layoutId={`blog-${key}-date`} transition={transition}>
			<div className='text-foreground/40 font-light text-xs mr-3'>{format(date, 'MM/dd/yyyy')}</div>
		</motion.div>
		<div>{tags && <BlogTags tags={tags} />}</div>
	</div>
}

BlogMeta.displayName = 'BlogMeta'

export default BlogMeta