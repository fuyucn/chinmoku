'use client'

import { Badge as BadgeUi } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { MouseEventHandler, useMemo } from 'react'

const Badge = ({ variant = 'secondary', text, eventAction }:
	Readonly<{ variant?: 'secondary', text: string, eventAction?: MouseEventHandler<any> }>) => {

	const classes = []

	if (eventAction) {
		classes.push('cursor-pointer')

	} else {
		classes.push('cursor-pointer')
	}

	const onClickFunc = useMemo(() => {
		return eventAction ? (e: any) => {
			e.preventDefault();
			eventAction(e)
		} : undefined;
	}, [eventAction])

	return (
		<BadgeUi
			variant={variant}
			className={cn(classes)}
			onClick={onClickFunc}>
			{text}
		</BadgeUi >
	)
}

export default Badge