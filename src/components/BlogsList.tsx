import { ContentMeta } from "@/types/blogs"
import Badge from "./Badge"



const fake: Partial<ContentMeta>[] = [
	{ title: '1', date: " April 9, 2024", tags: ['asd'] },
	{ title: '2', date: " April 9, 2024" },
]

const BlogsList = ({ details = fake }: Readonly<{ details?: Partial<ContentMeta>[] }>) => {

	return (
		<div>
			<ul role="list" className="ml-6 list-disc [&>li]:pb-2 [&>li:not(:first-child)]:pt-2 divide-y divide-gray-100">
				{details.map(({ title, date, tags }, i) =>
					<li key={i}>
						<div className='flex flex-col'>
							<span className="flex-1">{title}</span>
							<div className="flex items-center">
								<div className='text-foreground/40 font-light text-xs mr-4'>{date}</div>
								<div className="space-x-2">
									{tags?.map(tag => <Badge key={tag} text={tag} />)}
								</div>
							</div>
						</div>
					</li>
				)}
			</ul>
		</div>
	)
}


export default BlogsList