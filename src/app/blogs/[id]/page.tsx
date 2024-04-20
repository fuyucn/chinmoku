'use client'

import { transition } from "@/lib/transition";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next/types";



const BlogDetail = () => {
	const pathName = usePathname()


	const title = decodeURIComponent(pathName.replace('/blogs/', ''))
	return (
		<div className="p-4">
			<span className="block text-wrap break-all" >details: {pathName}</span>
			<div className="mt-4">
				<motion.div layoutId={`blog-${title}-title`} transition={transition}>
					<h2 className="leading-snug font-semibold text-2xl">{title}</h2>
				</motion.div>
				<div id='content'>

				</div>
			</div>
		</div>
	)
}

export default BlogDetail