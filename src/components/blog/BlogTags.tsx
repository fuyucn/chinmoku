import { type BlogInfo } from "@/types/blogs"
import Badge from "../Badge"

const BlogTags = ({ tags }: { tags: BlogInfo['tags'] }) => {
	return <>{tags?.map((tag, i) => (
		<Badge text={tag} key={tag + i} />
	))}</>
}

export default BlogTags