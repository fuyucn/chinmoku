'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const MenuItem = ({ label, href, active }:
	Readonly<{ label: string, href: string, active: string }>) => {

	const isActive = useMemo(() => { return active == href }, [active, href])

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
		{ label: 'Blogs', href: '/blogs' }
	]


	const path = usePathname()


	return (
		<NavigationMenu orientation="vertical" >
			<NavigationMenuList className="flex-col items-start space-x-0 space-y-2">
				{navs.map(n => (<MenuItem key={n.label} {...n} active={path} />))}
			</NavigationMenuList>
			<NavigationMenuIndicator />
		</NavigationMenu>
	);
}

export default Menu