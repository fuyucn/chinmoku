import { join } from "path"
import fs from "fs"
import matter from 'gray-matter'
import { compareDesc } from "date-fns"

const postsDirectory = join(process.cwd() + '/src', "mdx")



export const loadContent = (name: string) => {
	const realSlug = name.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	console.log(fullPath)
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	return { data, slug: realSlug, content };
}


export const loadAllContents = () => {
	const fullPath = join(postsDirectory);
	const dirData = fs.readdirSync(fullPath)

	return dirData
		// ignore none `.md` files
		.map(dir => dir.includes('.md') ? dir.replace('.md', '') : "")
		.filter(dir => dir !== '')
		.map(name => ({ id: name, ...loadContent(name) }))
		.sort((d1, d2) => {
			return compareDesc(d1.data.date, d2.data.date)
		})
}
