'use client'
import { useRouter } from "next/navigation"

const SubMenu = () => {
	const router = useRouter()

	const goBack = (e: any) => {
		const his = window.history;
		console.log(window.document.referrer)
		e.preventDefault()
		router.back()
	}
	return (
		<div className="flex sm:mx-4 mb-4">
			<a
				className='font-mono cursor-pointer'
				onClick={goBack}>
				Back
			</a>
		</div>)
}

export default SubMenu