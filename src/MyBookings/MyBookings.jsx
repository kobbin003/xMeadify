import { useEffect, useState } from "react";
import MedicalInfoCard from "../components/SearchHospital/MedicalInfoCard";
import { getMyBookings } from "../utils/utils";

const MyBookings = () => {
	const [myBookings, setMyBookings] = useState([]);

	useEffect(() => {
		setMyBookings(getMyBookings());
	}, []);

	return (
		<div>
			<h1>My Bookings</h1>
			{myBookings.length > 0 &&
				myBookings.map(({ medical }) => (
					<MedicalInfoCard medicalInfo={medical} />
				))}
		</div>
	);
};

export default MyBookings;
