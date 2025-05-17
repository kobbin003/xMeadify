import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./bookingmodal.module.css";

const categories = [
	{ label: "Doctors", icon: "/doctor.svg" },
	{ label: "Labs", icon: "/specialization/dentistry.svg" },
	{ label: "Hospitals", icon: "/hospital.svg" },
	{ label: "Medical Store", icon: "/capsule.svg" },
	{ label: "Ambulance", icon: "/ambulance.svg" },
];
const BookingModal = () => {
	const [selectedCategory, setSelectedCategory] = useState("Doctors");
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
					<h3>You may be looking for</h3>
					<div className={styles["category-grid"]}>
						{categories.map(({ label, icon }) => (
							<div
								key={label}
								// className={styles["grid-item"]}
								className={`${styles["grid-item"]} ${
									label == selectedCategory ? styles["selected"] : ""
								}`}
							>
								<label htmlFor={label} className={styles["select-card"]}>
									<img src={icon} height={40} width={40} alt="" />
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
