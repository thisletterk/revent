import React from "react";
import Button from "./Button";
import { behance, facebook, dribble, rectangle, vector } from "../assets/index";

const Innovate = ({ props }) => {
	return (
		<div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
			<div className=' md:w-3/4 lg:w-3/4 '>
				<div className='flex flex-col text-white'>
					<div className='pt-[71px]'>
						<p className='font-Montserrat font-bold text-[35px] sm:text-[50px] leading-[43.54px] text-left lg:min-w-[500px] '>
							Innovation Solution Taloired to your Business need
						</p>
					</div>
					<div>
						<p className='lg:max-w-[444px] font-Montserrat text-[18px] font-normal mt-[25px] leading-[27px]'>
							We can partner with your business to provide a symbiotic
							relationship and synergy to help you or your business achieve more
							business growth through strategic financial advisory, investment
							business and human resource planning and management.​
						</p>
					</div>
					<div className='sm:flex sm:justify-center lg:justify-start'>
						<Button title='Get in touch' />
					</div>
					<div className='flex flew-row mt-[28px] sm:flex sm:justify-center lg:justify-start'>
						<div className='w-[50px] mr-[10px]'>
							<img src={behance} alt='behance' />
						</div>
						<div className='w-[50px] mr-[10px]'>
							<img src={dribble} alt='dribble' />
						</div>
						<div className='w-[50px]'>
							<img src={facebook} alt='facebook' />
						</div>
					</div>
				</div>
			</div>
			<div
				className='w-3/4 
			lg:visible md:invisible sm:invisible
			'
			>
				<div className='relative hidden xl:hidden sm:block'>
					<img className='absolute top-10 left-20 ' src={vector} alt='vector' />

					<img
						className=' absolute top-0 bottom-10 right-20 mt-18 ml-40 hover:shadow-outline'
						src={rectangle}
						alt='rectangle'
					/>
				</div>
			</div>
		</div>
	);
};

export default Innovate;
