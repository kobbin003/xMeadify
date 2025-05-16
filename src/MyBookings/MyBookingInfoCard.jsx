import React from "react";
import styles from "./mybookingInfoCard.module.css";
const MyBookingInfoCard = ({ bookingInfo }) => {
	return (
		<div>
			<div>
				<div>
					<img
						src="/hospitalicon.jpg"
						alt="hospital-icon"
						height={50}
						width={50}
					/>
				</div>
				<div>
					<h3>{bookingInfo?.["Hospital Name"]}</h3>
					<div>
						<p>
							{bookingInfo?.["City"]}, {bookingInfo?.["State"]}
						</p>
						<p>{bookingInfo?.["Hospital Type"]}</p>
						<p>more</p>
					</div>
					<div className={styles["rating"]}>
						<img src="/thumbsup.svg" alt="like" />
						{bookingInfo?.["Hospital overall rating"]}
					</div>
				</div>
				<div>
					<div>{bookingInfo.day}</div>
					<div>{bookingInfo.time}</div>
				</div>
			</div>
		</div>
	);
};

export default MyBookingInfoCard;
