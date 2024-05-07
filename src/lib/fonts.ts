
import localFont from 'next/font/local'
// import fs from "fs"
// import path from 'path'

// const euclidFontFiles = fs.readdirSync(path.resolve('./public', './euclid-circular-a'), { withFileTypes: true })
// console.log(euclidFontFiles)

const euclidFontFiles = [{
	path: "../../public/euclid-circular-a/", name: 'Euclid Circular A Bold.ttf'
}]

const structFonts = (fontsFiles: any[]) => {
	const output = []

	for (var file of fontsFiles) {
		const filename = file.name.toLowerCase()
		const isItalic = (name: string) => {
			return name.toLowerCase().includes('italic')
		}


		const weightMap: Record<string, number> = {
			'bold': 700,
			'semibold': 600,
			'medium': 500,
			'regular': 400,
			'light': 300
		}


		const fontWeightRegex = new RegExp('bold|semibold|medium|regular|light', 'i')
		const fontWeight = (filename.match(fontWeightRegex) ?? ["regular"])[0]


		output.push({
			path: file.path + file.name,
			weight: weightMap[fontWeight] + "",
			style: isItalic(filename) ? "italic" : "normal"
		})
	}

	return output
}


export const euclidFont = localFont({
	src: [
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Bold.ttf',
			weight: "700",
			style: 'normal',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Bold Italic.ttf',
			weight: "700",
			style: 'italic',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Regular.ttf',
			weight: "400",
			style: 'normal',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Italic.ttf',
			weight: "400",
			style: 'italic',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Light Italic.ttf',
			weight: "300",
			style: 'italic',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Light.ttf',
			weight: "300",
			style: 'normal',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Medium Italic.ttf',
			weight: "500",
			style: 'italic',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A Medium.ttf',
			weight: "500",
			style: 'normal',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A SemiBold Italic.ttf',
			weight: "600",
			style: 'italic',
		},
		{
			path: '../../public/euclid-circular-a/Euclid Circular A SemiBold.ttf',
			weight: "600",
			style: 'normal',
		},
	]
})

