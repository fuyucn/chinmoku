import { cn } from "@/lib/utils";
import BlogTitle from '@/components/blog/Title'
import BlogMeta from "@/components/blog/BlogMeta";
import { loadContent } from "@/lib/content";


const BlogDetail = async (props: { params: Promise<{ id: string }> }) => {
	const params = await props.params
	const { data, content } = loadContent(params.id)

	if (!data) {
		return <div className="p-4">EMPTY</div>
	}

	return (
		<div className={cn("sm:p-4", 'bg-white border-transparent rounded-md')}>
			<div className="mt-4">
				<BlogTitle title={data.title} />
				<BlogMeta {...data} />
				<div id='content'>
					{content}
				</div>
			</div>
		</div>
	)
}

export default BlogDetail
