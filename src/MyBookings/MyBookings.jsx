import { useEffect, useState } from "react";
import MedicalInfoCard from "../components/SearchHospital/MedicalInfoCard";
import { getMyBookings } from "../utils/utils";
import MyBookingInfoCard from "./MyBookingInfoCard";
import styles from "./myBookings.module.css";

const MyBookings = () => {
	const [myBookings, setMyBookings] = useState([]);

	useEffect(() => {
		setMyBookings(getMyBookings());
	}, []);

	return (
		<div className={styles["container"]}>
			<div className={styles["heading-container"]}>
				<h1>My Bookings</h1>
			</div>
			<div className={styles["medical-centers"]}>
				{myBookings.length > 0 ? (
					myBookings.map((bookingInfo) => (
						<MyBookingInfoCard
							key={bookingInfo?.["Provider ID"]}
							bookingInfo={bookingInfo}
						/>
					))
				) : (
					<p>No Bookings made</p>
				)}
			</div>
		</div>
	);
};

export default MyBookings;
