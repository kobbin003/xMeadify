import React from "react";
import styles from "./icon.module.css";
const Icon = () => {
	return (
		<div className={styles["icon"]}>
			<img src="./icon.svg" alt="icon" height={24} />
			<span className={`primary-text ${styles["icon-text"]}`}>Meadify</span>
		</div>
	);
};

export default Icon;
