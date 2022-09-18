import React from "react";
import Heading from "./Heading";

const Resume = () => {
	return (
		<div className='text-white mt-[71px]'>
			<Heading title='Resume' />
			<div className='flex lg:flex-row md:flex-col sm:flex-col mt-[50px] font-Montserrat lg:justify-between md:justify-evenly sm:justify-center md:space-x-4 lg:mr-20  '>
				{/* left */}
				<div className='lg:w-2/5 sm:w-full h-[330px]   '>
					<div className='absolute  w-2 h-[330px] bg-secondary'></div>
					<div className='ml-[33.5px] lg:mt-10 sm:mt-10'>
						<h1 className='text-[30px] font-bold'>2017</h1>
						<p className='text-[22px] font-semibold'>
							Louisanna State University
						</p>
						<p className='text-[20px/2] font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
					<div className='ml-[33.5px] mt-[30px]'>
						<h1 className='text-[30px] font-bold '>2018</h1>
						<p className='text-[22px] font-semibold'>Harvard EdX</p>
						<p className='text-[20px/2] font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
				{/* right */}
				<div className='lg:w-2/5 sm:w-full h-[330px]   lg:mt-0 sm:mt-10 '>
					<div className='absolute  w-2 h-[330px] bg-secondary'></div>
					<div className='ml-[33.5px] lg:mt-10 sm:mt-10 '>
						<h1 className='text-[30px] font-bold'>2017</h1>
						<p className='text-[22px] font-semibold'>
							Louisanna State University
						</p>
						<p className='text-[20px/2] font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
					<div className='ml-[33.5px] mt-[30px]'>
						<h1 className='text-[30px] font-bold'>2018</h1>
						<p className='text-[22px] font-semibold'>Harvard EdX</p>
						<p className='text-[20px/2] font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;

// position: absolute;
// width: 335.5px;
// height: 300px;
// left: 180px;
// top: 1550px;
