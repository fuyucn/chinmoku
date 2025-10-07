export type ContentMeta = {
	title: string
	date: string
	description?: string
	tags?: string[]
}

export type Content = {
	id: string
	data: ContentMeta
	slug: string
	content: string
}