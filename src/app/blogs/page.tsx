import BlogCard from "@/components/BlogCard"
import { BlogInfo } from "@/types/blogs"
import Link from "next/link"

const Blogs = () => {

	const fake: BlogInfo[] = [
		{
			title: '前端优化, 联网提供各种各样版本的Lorem Ipsum', date: " April 9, 2024", tags: ['Lorem Ipsum'], description: "恰恰与流行观念相反，Lorem Ipsum并不是简简单单的随机文本。它追溯于一篇公元前45年的经典拉丁著作，从而使它有着两千多年的岁数。弗吉尼亚州Hampden-Sydney大学拉丁系教授Richard McClintock曾在Lorem Ipsum段落中注意到一个涵义十分隐晦的拉丁词语，“consectetur”，通过这个单词详细查阅跟其有关的经典文学著作原文，McClintock教授发掘了这个不容置疑的出处。Lorem Ipsum始于西塞罗(Cicero)在公元前45年作的“de Finibus Bonorum et Malorum”（善恶之尽）里1.10.32 和1.10.33章节。这本书是一本关于道德理论的论述，曾在文艺复兴时期非常流行。Lorem Ipsum的第一行”Lorem ipsum dolor sit amet..”节选于1.10.32章节。"
		},
		{ title: 'Lorem Ipsum is not simply random text', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha", date: " April 9, 2024" },
		{ title: 'Lorem Ipsum is not simply random text 2', date: " April 9, 2024" }
	]

	return <div className='p-4 space-y-2'>
		{
			fake.map((b, i) => (
				<Link key={i} href={'/blogs/' + encodeURIComponent(b.title)} className="block">
					<BlogCard detail={b}></BlogCard>
				</Link>
			))
		}
	</div>
}

export default Blogs