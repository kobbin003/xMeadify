import React, { useEffect, useState } from "react";
import MedicalInfoCard from "../components/SearchHospital/MedicalInfoCard";

const MyBookings = () => {
	const [myBookings, setMyBookings] = useState([]);
	console.log("myBookings: ", myBookings);
	useEffect(() => {
		setMyBookings(getMyBookings());
	}, []);
	return (
		<div>
			<h1>my bookings</h1>
			{myBookings.length > 0 &&
				myBookings.map(({ medical }) => (
					<MedicalInfoCard medicalInfo={medical} />
				))}
		</div>
	);
};

export function getMyBookings() {
	const storedAppointments = localStorage.getItem("appointments");
	if (storedAppointments) {
		const parsed = JSON.parse(storedAppointments);
		return parsed;
	} else {
		return [];
	}
}

export default MyBookings;
