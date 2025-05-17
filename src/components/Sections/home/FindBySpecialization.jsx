import React from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import styles from "./findBySpecialisation.module.css";

const categories = [
	{ label: "Dentistry", icon: "/specialization/dentistry.svg" },
	{ label: "Primary Care", icon: "/specialization/stethoscope.svg" },
	{ label: "Cardiology", icon: "/specialization/heartrate.svg" },
	{ label: "MRI Resonance", icon: "/specialization/heartratemonitor.svg" },
	{ label: "Blood Test", icon: "/specialization/bloodtest.svg" },
	{ label: "Piscologist", icon: "/specialization/immune.svg" },
	{ label: "Laboratory", icon: "/specialization/dentistry.svg" },
	{ label: "X-Ray", icon: "/specialization/xray.svg" },
];
const FindBySpecialization = () => {
	return (
		<div className={styles["specialisation"]}>
			<h2>Find By Specialisation</h2>
			<div className={styles["category-grid"]}>
				{categories.map(({ label, icon }) => (
					<Card
						sx={{
							// display: "flex",
							// flexDirection: "column",
							// justifyContent: "center",
							padding: "1em 1em 0",
						}}
					>
						{/* <CardActionArea> */}
						{/* <CardMedia
							component="img"
							height="10"
							width="10"
							image={icon}
							alt={label}
						/> */}
						<div style={{ display: "flex", justifyContent: "center" }}>
							<img src={icon} alt={label} />
						</div>
						<CardContent>
							{/* <Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography> */}
							<Typography
								variant="body1"
								sx={{ color: "text.secondary", textAlign: "center" }}
							>
								{label}
							</Typography>
						</CardContent>
						{/* </CardActionArea> */}
					</Card>
				))}
			</div>
			<button className="primary-button">view All</button>
		</div>
	);
};

export default FindBySpecialization;
