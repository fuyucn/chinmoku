import { Metadata, ResolvingMetadata } from "next"

type Props = {
	params: { id: string, }
	searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {

	const { id } = params
	const title = decodeURIComponent(id.replace('/blogs/', ''))
	return {
		title: title + ' - chinmoku'
	}
}

const BlogDetailsLayout = ({ children }: Readonly<{
	children: React.ReactNode;
}>) => {
	return <>{children}</>
}

export default BlogDetailsLayout