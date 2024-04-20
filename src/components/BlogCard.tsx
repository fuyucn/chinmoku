
'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Badge from "./Badge"
import { BlogInfo } from "@/types/blogs"
import { shorten } from "@/lib/string"
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { transition } from "@/lib/transition"
import { motion } from "framer-motion"

const BlogCard = ({ detail }: Readonly<{ detail: Partial<BlogInfo> }>) => {
	const { title, description, date, tags } = detail
	return (
		<Card className="border-transparent shadow-none hover:border-gray-200">
			<CardHeader className="p-4 space-y-1">
				<motion.div layoutId={`blog-${title}-date`} transition={transition}>
					<div className='text-foreground/40 font-light text-xs'>{date}</div>
				</motion.div>
				<motion.div layoutId={`blog-${title}-title`} transition={transition}>
					<CardTitle className="font-semibold text-2xl">{title}</CardTitle>
				</motion.div>
			</CardHeader>
			{description &&
				<CardContent className={cn("px-4 py-0", !tags && 'pb-4')} >
					<p>{shorten(description as string, 250)}</p>
				</CardContent>
			}
			{tags &&
				<CardFooter className="p-4 pt-2">
					<div className="space-x-2">
						{tags?.map((tag, i) => (<Badge text={tag} key={tag + i} />))}
					</div>
				</CardFooter>
			}
		</Card>
	)
}

export default BlogCard