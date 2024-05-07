'use client';

import Link from "next/link";
import { useMemo, } from "react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navs } from './Menu.ts';
import ChinmokuLogo from './Chinmoku.tsx';
import { motion } from 'framer-motion';


const MenuItem = ({ label, href, active }:
	Readonly<{ label: string, href: string, active: string }>) => {

	const isActive = useMemo(() => {
		if (href === '/') {
			return active === href
		}
		return active.startsWith(href)
	}, [active, href])

	return (
		<Link href={href} legacyBehavior passHref>
			<div className='relative w-full text-[14px] leading-4'>
				<a className={cn('transition-colors cursor-pointer hover:text-foreground/80 ',
					"text-foreground/60", isActive && "text-foreground")}
				>
					{label}
				</a>
				{isActive && <motion.div layoutId={'nav-active'}
					className='absolute right-0 top-0 h-full w-[2px] bg-black bg-foreground/80' />}
			</div>
		</Link>
	)
}

const Menu = () => {
	const path = usePathname()

	return (
		<>
			<div className='text-lg mb-4'>
				<Link href='/'>
					<ChinmokuLogo dark />
				</Link>
			</div>
			<nav className=''>
				<ul className=" flex-col items-start space-x-0 space-y-3 w-full">
					{
						navs.map(n => (
							<MenuItem key={n.label} {...n} active={path} />
						))
					}
				</ul>
			</nav></>
	);
}

export default Menu