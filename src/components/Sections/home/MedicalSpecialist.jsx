import React from "react";
import styles from "./medicalSpecialist.module.css";

const specialists = [
	{
		name: "Dr. Ahmed Khan",
		img: "/specialists/Ahmad.svg",
		occupation: "Neurologist",
	},
	{
		name: "Dr. Heena Sachdeva",
		img: "/specialists/Heena.svg",
		occupation: "Orthapedics",
	},
	{
		name: "Dr. Ankur Sharma",
		img: "/specialists/Ankur.svg",
		occupation: "Medicine",
	},
];

const MedicalSpecialist = () => {
	return (
		<div className={styles["container"]}>
			<h2>Our Medical Specialist</h2>
			<div className={styles["card-container"]}>
				{specialists.map(({ name, img, occupation }) => (
					<div className={styles["card"]}>
						<img src={img} alt={name} />
						<div>
							<p>{name}</p>
							<p
								style={{
									color: "var(--primary)",
									textAlign: "center",
								}}
							>
								{occupation}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MedicalSpecialist;
