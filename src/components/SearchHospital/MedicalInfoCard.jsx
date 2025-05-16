import { useState } from "react";
import BookingSection from "./BookingSection";
import styles from "./medicalInfoCard.module.css";

// *day and time will only be provded from the my-booking section

const MedicalInfoCard = ({ medicalInfo }) => {
	const [isBookingsVisible, setIsBookingsVisible] = useState(false);
	const handleToogleBookingSection = () => {
		setIsBookingsVisible((prev) => !prev);
	};
	// const location = useLocation();
	// const isMybookingRoute = location.pathname.includes("/my-bookings");

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
				<div className={styles["hospital-detail"]}>
					<h3>{medicalInfo?.["Hospital Name"]}</h3>
					<div>
						<p>
							{medicalInfo?.["City"]}, {medicalInfo?.["State"]}
						</p>
						<p>{medicalInfo?.["Hospital Type"]}</p>
						<p>more</p>
						<p>
							<span>FREE</span>
							<span>&#8377;500</span>
							<span>consultation fee at the clinic</span>
						</p>
					</div>
					<div className={styles["rating"]}>
						<img src="/thumbsup.svg" alt="like" />
						{medicalInfo?.["Hospital overall rating"]}
					</div>
				</div>
				<div className={styles["booking"]}>
					<p>Available Today</p>
					<button onClick={handleToogleBookingSection}>
						Book FREE Center Visit
					</button>
				</div>
			</div>
			{isBookingsVisible ? <BookingSection medicalInfo={medicalInfo} /> : <></>}
		</div>
	);
};

export default MedicalInfoCard;
