import Description from "./description";
import { motion, useAnimate } from "framer-motion";
import React from "react";
import SubTitle from "./subtitle";

export default function AfterIntroCard({ data, index }: { 
	data: {
		header: string;
		description: string;
		img: any;
	},
	index: number
}) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div
		className="w-[29%]"
		ref={scope} 
		initial={{ y: 120, opacity: 0 }}
		onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, { delay: 0.2 + index / 10})}
		>
			<div className="flex justify-center">
      			{React.createElement(data.img,  { size: 80,  })}
			</div>
			<br />
			<SubTitle className="text-center !text-2xl flex-grow mb-4">{data.header}</SubTitle>
			<Description className="text-center">{data.description}</Description>

		</motion.div>
	)
}