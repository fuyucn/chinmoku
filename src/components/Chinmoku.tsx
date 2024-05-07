import { cn } from "@/lib/utils"

const ChinmokuLogo = ({ dark = false }: Readonly<{ dark?: boolean }>) => {
	return (
		<p className={cn("text-slate-50 font-black leading-6 tracking-normal antialiased", dark && 'text-black')}>chinmoku</p>
	)
}

export default ChinmokuLogo