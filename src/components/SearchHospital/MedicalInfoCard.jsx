import React, { useState } from "react";
import styles from "./medicalInfoCard.module.css";
import Bookings from "./Bookings";
import { useLocation } from "react-router";
import { getMyBookings } from "../../MyBookings/MyBookings";
import TimeCapsule from "./TimeCapsule";

const MedicalInfoCard = ({ medicalInfo }) => {
	console.log("medicalInfo:...", medicalInfo);
	const [isBookingsVisible, setIsBookingsVisible] = useState(false);
	const handleToogleBookingSection = () => {
		setIsBookingsVisible((prev) => !prev);
	};
	const location = useLocation();
	console.log("medical-result-card", location);
	const isMybookingRoute = location.pathname.includes("/my-bookings");

	const myBookings = getMyBookings();
	const appointmentFixed = myBookings.find(
		({ medical }) => medical["Provider ID"] == medicalInfo["Provider ID"]
	);
	return (
		<div>
			<div onClick={handleToogleBookingSection}>
				<div className={styles["hospital-icon"]}>
					<img
						src="/hospitalicon.jpg"
						alt="hospital-icon"
						height={50}
						width={50}
					/>
				</div>
				<div className={styles["gospital-detail"]}>
					<h3>{medicalInfo["Hospital Name"]}</h3>
					<div>
						<p>
							{medicalInfo["City"]}, {medicalInfo["State"]}
						</p>
						<p>{medicalInfo["Hospital Type"]}</p>
						<p>more</p>
						{!isMybookingRoute && (
							<p>
								<span>FREE</span>
								<span>&#8377;500</span>
								<span>consultation fee at the clinic</span>
							</p>
						)}
					</div>
					<div className={styles["rating"]}>
						<img src="/thumbsup.svg" alt="like" />
						{medicalInfo["Hospital overall rating"]}
					</div>
				</div>
				{isMybookingRoute ? (
					<div className={styles["appointment-time"]}>
						<div>{appointmentFixed.day}</div>
						<div>{appointmentFixed.time}</div>
					</div>
				) : (
					<div className={styles["booking"]}>
						<p>Available Today</p>
						<button>book FREE Center Visit</button>
					</div>
				)}
			</div>
			{isBookingsVisible ? <Bookings medicalInfo={medicalInfo} /> : <></>}
		</div>
	);
};

export default MedicalInfoCard;
