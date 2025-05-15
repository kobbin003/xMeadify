import React from "react";
import styles from "./adsection.module.css";

const AdSection = () => {
	return (
		<div className={styles["ad-container"]}>
			<div>
				<img src="/Group_10.jpg" alt="ad-1" height={30} width={30} />
			</div>
			<div>
				<img src="/Group_11.jpg" alt="ad-2" height={30} width={30} />
			</div>
			<div>
				<img src="/Group_12.jpg" alt="ad-3" height={30} width={30} />
			</div>
		</div>
	);
};

export default AdSection;
