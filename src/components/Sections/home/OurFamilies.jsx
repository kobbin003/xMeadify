import React from "react";
import styles from "./ourFamilies.module.css";

const OurFamilies = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["info"]}>
				<p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
				<p>
					<b>Our Families</b>
				</p>
				<p>
					We will work with you to develop individualised care plans, including
					management of chronic diseases. If we cannot assist, we can provide
					referrals or advice about the type of practitioner you require. We
					treat all enquiries sensitively and in the strictest confidence.
				</p>
			</div>
			<div>
				<img src="/ourfammilies.svg" alt="" />
			</div>
		</div>
	);
};

export default OurFamilies;
