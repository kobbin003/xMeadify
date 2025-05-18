import React from "react";
import styles from "./downloadsection.module.css";
const DownloadSection = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["img-section"]}>
				<img src="/mobile.jpg" alt="" />
			</div>
			<div className={styles["info"]}>
				<h3>
					Download the <span>Medify</span> App
				</h3>
				<p>Get the link to download the app</p>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<span>
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Enter phone number"
						/>
					</span>
					<button type="submit" className="primary-button">
						Send SMS
					</button>
				</form>
				<div>
					<img src="/google-store.svg" alt="google-store" />
					<img src="/app-store.svg" alt="app-store" />
				</div>
			</div>
		</div>
	);
};

export default DownloadSection;
