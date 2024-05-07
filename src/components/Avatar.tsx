import { Avatar as AvatarUI, AvatarImage, AvatarFallback } from "./ui/avatar";


const Avatar = ({ src }: any) => {
	return <AvatarUI >
		<AvatarImage src={src}></AvatarImage>
		<AvatarFallback></AvatarFallback>
	</AvatarUI >
}

export default Avatar