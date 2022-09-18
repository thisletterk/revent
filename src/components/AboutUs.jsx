import React from "react";
import { about_image } from "../assets";
import Button from "./Button";

import Heading from "./Heading";

const AboutUs = () => {
	return (
		<div className='text-white mt-[71px]'>
			<Heading title='About Us' />
			<div className='mt-[50px]'>
				<div className='flex flex-row md:space-x-4 md:space-y-0'>
					<div className='  w-10/12 sm:w-full'>
						<img
							src={about_image}
							alt='smiling_man'
							className='rounded-[10px] lg:w-[503.35px] lg:h-[461px] md:w-[480px] md:h-[400px] sm:mb-10 float-left mr-10'
						/>

						<h1 className='font-Montserrat text-[20px] sm:text-[32px] leading-[24.38px] font-semibold lg:mt-[89px] md:mt-[30px] '>
							We focus on value and excellence
						</h1>
						<div className='font-Montserrat text-[18px] font-normal tracking-normal leading-[27px] mt-[25px] max-w-[1100px]'>
							<p>
								We are focused on providing products which deliver demonstrably
								good value for our clients and end-customers - be that a
								specific return, outperforming an index or achieving returns at
								lower risk.
							</p>
							<p>
								Through achieving value for the clients whose assets we manage,
								efficiently controlling costs, effectiveness and efficiency, we
								deliver value to our shareholders and wider stakeholders.
							</p>
						</div>
						<Button title='Work With Us' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
