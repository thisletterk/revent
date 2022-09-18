import React from "react";
import { underline } from "../assets";

const Heading = ({ title }) => {
	return (
		<div>
			<h1 className='font-Montserrat font-bold text-[30px] flex justify-center'>
				{title}
			</h1>
			<div className='flex justify-center'>
				<img src={underline} alt='underline' />
			</div>
		</div>
	);
};

export default Heading;
