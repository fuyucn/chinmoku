'use client'
import Link from "next/link"
import { navs } from "./Menu.ts"
import Chinmoku from "./Chinmoku.tsx"
import Avatar from "./Avatar.tsx"
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from "@/lib/utils.ts"
import { transition } from "@/lib/transition.ts"
import { useMemo, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const style = {
	background: 'rgba(26,26,26,0.8)'
}

const HMenu = () => {
	const path = usePathname()
	const [hoverTab, setHoverTab] = useState<string>()
	const timeoutRef = useRef<any>()

	const isActive = (href: string) => {
		if (href === '/') {
			return path === href
		}
		return path.startsWith(href)
	}

	return (
		<div className="md:px-12 py-2 px-2">
			<div className="max-content md:px-4 mx-auto">
				<div
					style={style}
					className="w-full flex justify-between px-8 py-4 rounded-full drop-shadow-md backdrop-blur-[5px]"
				>
					<div className="flex items-center w-1/5">
						<Link href='/'>
							{/* <Image
						src="/chinmoku.png"
						width={100}
						height={40}
						alt="Logo"
						className=''
					/> */}
							<Chinmoku />
						</Link>
					</div>
					<div className="flex gap-3">
						{
							navs.map(n => {
								return (
									<Link
										passHref
										key={n.label}
										href={n.href}
										className={cn('py-3 px-4 text-slate-200  rounded-full relative',
											isActive(n.href) && "text-slate-50",
											hoverTab == n.label && 'text-white',
											// "hover:text-foreground/80"
										)}
									>
										<motion.div
											onHoverStart={(() => {
												timeoutRef.current && clearTimeout(timeoutRef.current)
												setHoverTab(n.label)
											})}
											onHoverEnd={() => {
												timeoutRef.current && clearTimeout(timeoutRef.current)
												timeoutRef.current = setTimeout(() => {
													if (hoverTab === n.label) {
														setHoverTab('')
													}
												}, 500)
											}}>
											{hoverTab == n.label && <motion.div
												layoutId='hover-menu-pill'
												style={{ color: 'rgba(26,26,26,0.8)' }}
												className="inset-0 rounded-full absolute bg-foreground/30"
												transition={transition}
											/>}
											<motion.span className="relative z-10">{n.label}</motion.span>
										</motion.div>
									</Link>
								)
							})
						}
					</div>
					<div className="flex items-center w-1/5 justify-end">
						<Avatar src="/avatar.png" />
					</div>
				</div >
			</div>
		</div>
	)

}

export default HMenu