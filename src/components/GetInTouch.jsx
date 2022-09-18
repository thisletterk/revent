import React from "react";
import { call, send } from "../assets";
import Button from "./Button";
import Heading from "./Heading";

const GetInTouch = ({ props }) => {
	return (
		<div className='text-white lg:mt-[71px] md:mt-[5px] sm:mt-[5px] '>
			<Heading title='Get In Touch' />
			<div className='flex flex-row  justify-center mt-[30px]'>
				{/* call */}
				<div className=' grid  justify-items-center mr-10'>
					<div className='pt-3'>
						<img src={call} alt='call_icon' />
					</div>
					<div>
						<p className='font-Montserrat text-[24px] font-bold'>Call Us</p>
					</div>
					<div>
						<p className='font-Montserrat text-[18px] font-normal'>
							+234-123-456-980
						</p>
					</div>
				</div>
				{/* send */}
				<div className=' grid  justify-items-center'>
					<div>
						<img src={send} alt='send_icon' />
					</div>
					<div>
						<p className='font-Montserrat text-[24px] font-bold'>Email Us</p>
					</div>
					<div>
						<p className='font-Montserrat text-[18px] font-normal'>
							revent@mail.com
						</p>
					</div>
				</div>
			</div>
			{/* ///////////////// */}
			<div className='flex justify-center'>
				{/* form */}

				<div className='block p-6 rounded-lg shadow-lg lg:w-9/12  '>
					<form>
						<div className='grid grid-cols-2 gap-4'>
							<div className='form-group mb-6'>
								<input
									type='text'
									className='form-control
									block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding
									border border-solid border-gray-300
									rounded-[10px]
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									id='exampleInput123'
									aria-describedby='emailHelp123'
									placeholder='First name'
								/>
							</div>
							<div className='form-group mb-6'>
								<input
									type='text'
									className='form-control
									block
									w-full
									px-3
									py-1.5
									text-base
									font-normal
									text-gray-700
									bg-white bg-clip-padding
									border border-solid border-gray-300
									rounded-[10px]
									transition
									ease-in-out
									m-0
									focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									id='exampleInput124'
									aria-describedby='emailHelp124'
									placeholder='Last name'
								/>
							</div>
						</div>
						<div className='form-group mb-6'>
							<input
								type='email'
								className='form-control block
								w-full
								px-3
								py-1.5
								text-base
								font-normal
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded-[10px]
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
								id='exampleInput125'
								placeholder='Email address'
							/>
						</div>
						<div className='form-group'>
							<textarea
								className='
								form-control
								block
								w-full
								h-[220px]
								px-3
								py-1.5
								text-base
								font-normal
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded-[10px]
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
							'
								id='exampleFormControlTextarea13'
								rows='3'
								placeholder='Message'
							></textarea>
						</div>

						<Button title='Send Message' />
					</form>
				</div>
				{/* /////////////////////// */}
			</div>
		</div>
	);
};

export default GetInTouch;
