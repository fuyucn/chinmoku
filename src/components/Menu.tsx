'use client';
import Image from 'next/image'
import {
	NavigationMenu,
	NavigationMenuIndicator,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const MenuItem = ({ label, href, active }:
	Readonly<{ label: string, href: string, active: string }>) => {

	const isActive = useMemo(() => { return active.startsWith(href) }, [active, href])

	return (
		<Link href={href} legacyBehavior passHref>
			<a className={cn('transition-colors hover:text-foreground/80',
				"text-foreground/60", isActive && "text-foreground")}
			>
				{label}
			</a>
		</Link>
	)
}


const Menu = () => {
	type Nav = {
		label: string
		href: string
	}
	const navs: Nav[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Blogs', href: '/blogs' },
		{ label: 'Notes', href: '/notes' }
	]


	const path = usePathname()


	return (
		<NavigationMenu orientation="vertical" >
			<NavigationMenuList className="flex-row space-x-2 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2">
				<Image
					src="/chinmoku.png"
					width={100}
					height={40}
					alt="Picture of the author"
					className='mr-2 sm:mb-4 sm:mr-0'
				/>
				{
					navs.map(n => (
						<MenuItem key={n.label} {...n} active={path} />
					))
				}
			</NavigationMenuList>
			<NavigationMenuIndicator />
		</NavigationMenu>
	);
}

export default Menu