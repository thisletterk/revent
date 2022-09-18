import React from "react";

const Button = (props) => {
	return (
		<button
			type='button'
			class='inline-block mt-[37px] px-[55px] py-6 bg-secondary text-black font-poppins font-bold text-xs leading-tight uppercase rounded-[10px] shadow-md'
		>
			<p className='font-poppins font-bold text-[14px] leading-[30/2]'>
				{props.title}
			</p>
		</button>
	);
};

export default Button;
