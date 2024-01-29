import { weServeData } from "@/data/weservedata"
import Header from "../header"
import Br from "../br"
import Industry from "../industry"
import Wallpaper from "../wallpaper"
import wallpaperSVG from "@/images/wallpapers/industries-wallpaper.svg";
import DownUpMotion from "../downupmotion"

export default function Industries() {
	return (
		<section className="relative ">
			<DownUpMotion >
				<Header className="">Industries We Serve</Header>
			</DownUpMotion>
			<Br size={2} />
			<div className="grid grid-cols-4 gap-10">
				{weServeData.map((data, index: number) => 
					<Industry data={data} index={index} key={index} />
				)}
			</div>
		</section>
	)
}