import React from "react";
import {
	NavBar,
	Innovate,
	AboutUS,
	Resume,
	Portfolio,
	GetInTouch,
} from "../components/index";

const Homepage = () => {
	return (
		<div className='lg:ml-[175px] md:ml-0 sm:ml-0 '>
			<NavBar />
			<Innovate />
			<AboutUS />
			<Resume />
			<Portfolio />
			<GetInTouch />
		</div>
	);
};

export default Homepage;
