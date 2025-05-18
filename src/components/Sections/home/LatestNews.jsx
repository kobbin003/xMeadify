import React from "react";
import styles from "./latestNews.module.css";

const LatestNews = () => {
	return (
		<div className={styles["container"]}>
			<h2>Read Our Latest News</h2>
			<div className={styles["card-container"]}>
				{[1, 2, 3].map(() => (
					<div className={styles["card"]}>
						<img src={"/blog.jpg"} alt={"blog"} />
						<p>Medical: March 31, 2022</p>
						<p>6 Tips To Protect Your Mental Health When You’re Sick</p>
						<div>
							<img src="/rebecca.svg" alt="rebecca" height={40} width={40} />
							<span>Rebecca Lee</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestNews;
