type Nav = {
	label: string
	href: string
}

export const navs: Nav[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Blogs', href: '/blogs' },
	{ label: 'Notes', href: '/notes' }
] as const