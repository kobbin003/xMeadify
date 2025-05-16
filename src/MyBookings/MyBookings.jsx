import React, { useEffect, useState } from "react";
import MedicalResultCard from "../components/SearchHospital/MedicalResultCard";

const MyBookings = () => {
	const [myBookings, setMyBookings] = useState([]);
	console.log("myBookings: ", myBookings);
	useEffect(() => {
		const storedAppointments = localStorage.getItem("appointments");
		if (storedAppointments) {
			const parsed = JSON.parse(storedAppointments);

			setMyBookings(parsed);
		}
	}, []);
	return (
		<div>
			<h1>my bookings</h1>
			{myBookings.length > 0 &&
				myBookings.map(({ medical }) => (
					<MedicalResultCard medicalInfo={medical} />
				))}
		</div>
	);
};

export default MyBookings;
