import SubMenu from "@/components/SubMenu"
import { Metadata } from "next"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const { id } = await params
	const title = decodeURIComponent(id.replace('/blogs/', ''))
	return {
		title: title + ' - chinmoku'
	}
}

const BlogDetailsLayout = ({ children }: Readonly<{
	children: React.ReactNode;
}>) => {
	return <>
		<SubMenu />
		{children}
	</>
}

export default BlogDetailsLayout