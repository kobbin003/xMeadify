import { useEffect } from "react";
import AdSection from "../components/Sections/home/AdSection";
import FindBySpecialization from "../components/Sections/home/FindBySpecialization";
import HeroSection from "../components/Sections/home/HeroSection";
import { useSearchContext } from "../providers/SearchProvider";

const Home = () => {
	const { setState } = useSearchContext();

	// reset the state when we come to home page
	// problem occurs when we navigate from bookings to home page with state selected
	useEffect(() => {
		setState("");
	}, []);
	return (
		<div>
			<HeroSection />
			<AdSection />
			<FindBySpecialization />
			{/* <MedicalSpecialist /> */}
			{/* <PatientCaring /> */}
			{/* <LatestNews /> */}
			{/* <OurFamilies /> */}
			{/* <FAQ /> */}
		</div>
	);
};

export default Home;
