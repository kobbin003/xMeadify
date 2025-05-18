import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home/Home";
import Header from "./components/Header/Header";
import MyBookings from "./MyBookings/MyBookings";
import Doctors from "./Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import DownloadSection from "./components/Sections/home/DownloadSection";

function App() {
	return (
		<div className="root-div">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/my-bookings" element={<MyBookings />} />
				</Routes>
			</main>
			<div>
				<DownloadSection />
				<Footer />
			</div>
		</div>
	);
}

export default App;
