import React, { useState } from "react";
import styles from "./medicalResultCard.module.css";
import Bookings from "./Bookings";

const MedicalResultCard = ({ medicalInfo }) => {
	console.log("medicalInfo:...", medicalInfo);
	const [isBookingsVisible, setIsBookingsVisible] = useState(false);
	const handleToogleBookingSection = () => {
		setIsBookingsVisible((prev) => !prev);
	};
	return (
		<div>
			<div>
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
						<p>
							<span>FREE</span>
							<span>&#8377;500</span>
							<span>consultation fee at the clinic</span>
						</p>
					</div>
					<div className={styles["rating"]}>
						<img src="/thumbsup.svg" alt="like" />
						{medicalInfo["Hospital overall rating"]}
					</div>
				</div>
				<div className={styles["booking"]}>
					<p>Available Today</p>
					<button onClick={handleToogleBookingSection}>
						book FREE Center Visit
					</button>
				</div>
			</div>
			{isBookingsVisible ? <Bookings medicalInfo={medicalInfo} /> : <></>}
		</div>
	);
};

export default MedicalResultCard;
