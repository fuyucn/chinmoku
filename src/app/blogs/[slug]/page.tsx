'use client'

import { usePathname } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next/types";



const BlogDetail = () => {
	const pathName = usePathname()


	const decode = decodeURIComponent(pathName.replace('/blogs/', ''))
	return (
		<div className="p-4">
			<span className="block text-wrap break-all" >details: {pathName}</span>
			<div className="mt-4">
				<h2 className="leading-snug font-semibold text-2xl">{decode}</h2>
				<div id='content'>

				</div>
			</div>
		</div>
	)
}

export default BlogDetail