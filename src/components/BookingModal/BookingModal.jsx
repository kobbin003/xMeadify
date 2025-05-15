import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./bookingmodal.module.css";

const categories = [
	{ label: "Doctors", icon: "/doctor.jpg" },
	{ label: "Labs", icon: "/drugstore.jpg" },
	{ label: "Hospitals", icon: "/hospital.jpg" },
	{ label: "Medical Store", icon: "/capsule.jpg" },
	{ label: "Ambulance", icon: "/ambulance.jpg" },
];
const BookingModal = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	//* I made this radio state just for demonstration
	// in our app we only have to check for doctors
	const handleRadioChange = (e) => {
		setSelectedCategory(e.target.value);
	};
	return (
		<div className={styles["booking-modal"]}>
			<div className={styles["center-booking-modal"]}>
				<SearchBar />
				<div>
					<div>You may be looking for</div>
					<div className={styles["category-grid"]}>
						{categories.map(({ label, icon }) => (
							<div key={label} className={styles["grid-item"]}>
								<label
									htmlFor={label}
									className={`${styles["select-card"]} ${
										label == selectedCategory ? styles["selected"] : ""
									}`}
								>
									<img src={icon} height={20} width={20} alt="" />
									<p>{label}</p>
								</label>
								<input
									type="radio"
									name={label}
									id={label}
									value={label}
									checked={label == selectedCategory}
									onChange={handleRadioChange}
									hidden
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
