'use client'
import { transition } from "@/lib/transition"
import { motion } from "framer-motion"

export default ({ title, key }: { title: string, key: string }) => {
	return (
    <motion.div layoutId={`blog-${key}-title`} transition={transition}>
		<h2 className="leading-snug font-medium text-2xl mb-2">{title}</h2>
	</motion.div>
)
}
