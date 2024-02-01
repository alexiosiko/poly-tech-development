import { StaticImageData } from "next/image";
import Box from "./box";
import { boxData } from "@/data/boxdata";
import DownUpMotion from "./downupmotion";
import Header from "./header";

export type boxDataType = {
		header: string,
		description: string,
		img: StaticImageData
}


export default function BoxContainer() {
	return (
		<section>
			{/* <DownUpMotion>
				<Header>Why Choose Us?</Header>
			</DownUpMotion> */}
			<br /><br />
			<div className="flex gap-28">
				{
					boxData.map((data: boxDataType, index: number ) =>
					<Box data={data} index={index} key={index} />
					)
				}
			</div>
		</section>
	)
}