import React from "react";
import styles from "./mybookingInfoCard.module.css";

const MyBookingInfoCard = ({ bookingInfo }) => {
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
						<h3>{bookingInfo?.["Hospital Name"]}</h3>
						<div>
							<b>
								{bookingInfo?.["City"]}, {bookingInfo?.["State"]}
							</b>
							<p>{bookingInfo?.["Hospital Type"]}</p>
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
							{bookingInfo?.["Hospital overall rating"]}
						</div>
					</div>
				</div>
				<div className={styles["booking"]}>
					<div>
						<div className={styles["time-capsule"]}>
							{bookingInfo.bookingDate}
						</div>
						<div className={styles["time-capsule"]}>
							{bookingInfo.bookingTime}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// const MyBookingInfoCard = ({ bookingInfo }) => {
// 	return (
// 		<div>
// 			<div>
// 				<div>
// 					<img
// 						src="/hospitalicon.jpg"
// 						alt="hospital-icon"
// 						height={50}
// 						width={50}
// 					/>
// 				</div>
// 				<div>
// 					<h3>{bookingInfo?.["Hospital Name"]}</h3>
// 					<div>
// 						<p>
// 							{bookingInfo?.["City"]}, {bookingInfo?.["State"]}
// 						</p>
// 						<p>{bookingInfo?.["Hospital Type"]}</p>
// 						<p>more</p>
// 					</div>
// 					<div className={styles["rating"]}>
// 						<img src="/thumbsup.svg" alt="like" />
// 						{bookingInfo?.["Hospital overall rating"]}
// 					</div>
// 				</div>
// 				<div>
// 					<div>{bookingInfo.day}</div>
// 					<div>{bookingInfo.time}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default MyBookingInfoCard;
