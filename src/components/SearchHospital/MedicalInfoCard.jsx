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
		<div className={styles["medical-info-card"]}>
			<div className={styles["layout"]}>
				<div className={styles["hospital-desc"]}>
					<div className={styles["hospital-icon"]}>
						<img
							src="/hospitalIcon.svg"
							alt="hospital-icon"
							height={100}
							width={100}
						/>
					</div>
					<div className={styles["hospital-detail"]}>
						<h3>{medicalInfo?.["Hospital Name"]}</h3>
						<div>
							<b>
								{medicalInfo?.["City"]}, {medicalInfo?.["State"]}
							</b>
							<p>{medicalInfo?.["Hospital Type"]}</p>
							<p>more</p>
							<p>
								<b style={{ color: "var(--green)" }}>FREE&nbsp;</b>
								<span>&#8377;500&nbsp;</span>
								<span>consultation fee at the clinic</span>
							</p>
						</div>
						<div className={styles["rating"]}>
							<img src="/thumbsup.svg" alt="like" />
							&nbsp;
							{medicalInfo?.["Hospital overall rating"]}
						</div>
					</div>
				</div>
				<div className={styles["booking"]}>
					<b style={{ color: "var(--green)" }}>Available Today</b>
					<button
						onClick={handleToogleBookingSection}
						className="primary-button"
					>
						Book FREE Center Visit
					</button>
				</div>
			</div>
			{isBookingsVisible ? <BookingSection medicalInfo={medicalInfo} /> : <></>}
		</div>
	);
};

export default MedicalInfoCard;
