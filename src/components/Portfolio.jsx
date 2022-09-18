import React from "react";
import Heading from "./Heading";
import { port1, port2, port3 } from "../assets";

const Portfolio = (props) => {
	return (
		<div className='text-white mt-[71px]'>
			<Heading title='Portfolio' />
			<div className='mt-[36px]'>
				<ul className=' flex flex-row justify-center'>
					<li className='inline-block px-6 py-[13px] font-Montserrat text-[20px] bg-white text-black font-medium leading-tight uppercase rounded-[10px]'>
						All
					</li>
					<li className='inline-block px-6 py-2.5 font-medium font-Montserrat text-[20px]'>
						Website
					</li>
					<li className='inline-block px-6 py-2.5 font-medium font-Montserrat text-[20px]'>
						MobileApp
					</li>
					<li className='inline-block px-6 py-2.5 font-medium font-Montserrat text-[20px]'>
						CSS
					</li>
					<li className='inline-block px-6 py-2.5 font-medium font-Montserrat text-[20px]'>
						GitHub
					</li>
				</ul>
			</div>
			{/* images here */}
			<div className='flex flew-row mt-[35.28px] justify-center'>
				<div className='w-[343.15px] h-[412.89px]'>
					<img src={port1} alt='portfolio' />
				</div>
				<div className='w-[343.15px] h-[412.89px]'>
					<img src={port2} alt='portfolio' />
				</div>
				<div className='w-[343.15px] h-[412.89px]'>
					<img src={port3} alt='portfolio' />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;

// position: absolute;
// width: 343.15px;
// height: 412.89px;
// left: 180px;
// top: 2091.28px;
