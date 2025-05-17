import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Icon from "../icon/Icon";
import styles from "./footer.module.css";
import { LuChevronRight } from "react-icons/lu";

const footerList1 = [
	"About Us",
	"Our Pricing",
	"Our Gallery",
	"Appointment",
	"Privacy Policy",
];

const footerList2 = [
	"Orthology",
	"Neurology",
	"Dental Care",
	"Opthalmology",
	"Cardiology",
];

const footerList3 = [
	"About Us",
	"Our Pricing",
	"Our Gallery",
	"Appointment",
	"Privacy Policy",
];

const Footer = () => {
	return (
		<footer>
			<div>
				<div>
					<Icon />
					<div className={styles["social-media-list"]}>
						<FaFacebook
							color="var(--primary)"
							className={styles["social-icons"]}
						/>
						<FaTwitter
							color="var(--primary)"
							className={styles["social-icons"]}
						/>
						<FaYoutube
							color="var(--primary)"
							className={styles["social-icons"]}
						/>
						<FaPinterest
							color="var(--primary)"
							className={styles["social-icons"]}
						/>
					</div>
				</div>
				<ul>
					{footerList1.map((val) => (
						<li>
							<LuChevronRight />
							{val}
						</li>
					))}
				</ul>
				<ul>
					{footerList2.map((val) => (
						<li>
							<LuChevronRight />
							{val}
						</li>
					))}
				</ul>
				<ul>
					{footerList3.map((val) => (
						<li>
							<LuChevronRight />
							{val}
						</li>
					))}
				</ul>
			</div>
			<div>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
		</footer>
	);
};

export default Footer;
