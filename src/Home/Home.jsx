import { useEffect } from "react";
import AdSection from "../components/Sections/home/AdSection";
import FindBySpecialization from "../components/Sections/home/FindBySpecialization";
import HeroSection from "../components/Sections/home/HeroSection";
import { useSearchContext } from "../providers/SearchProvider";
import MedicalSpecialist from "../components/Sections/home/MedicalSpecialist";
import PatientCaring from "../components/Sections/home/PatientCaring";
import OurFamilies from "../components/Sections/home/OurFamilies";
import LatestNews from "../components/Sections/home/LatestNews";

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
			<MedicalSpecialist />
			<PatientCaring />
			<LatestNews />
			<OurFamilies />
			{/* <FAQ /> */}
		</div>
	);
};

export default Home;
