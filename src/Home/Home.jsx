import React from "react";
import HeroSection from "../components/Sections/home/HeroSection";
import BookingModal from "../components/BookingModal/BookingModal";
import AdSection from "../components/Sections/home/AdSection";

const Home = () => {
	return (
		<div>
			<HeroSection />
			{/* <BookingModal /> */}
			<AdSection />
		</div>
	);
};

export default Home;
