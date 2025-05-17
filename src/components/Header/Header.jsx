import { Link } from "react-router";
import styles from "./header.module.css";
import Icon from "../icon/Icon";
const Header = () => {
	return (
		<header>
			<div className={styles["message-bar"]}>
				The health and well-being of our patients and their health care team
				will always be our priority, so we follow the best practices for
				cleanliness.
			</div>
			<nav className={styles["nav-bar"]}>
				<div>
					<Link to={"/"}>
						<Icon />
					</Link>
				</div>

				<div className={styles["nav-right"]}>
					<Link to={"/doctors"}>Find Doctors</Link>
					<Link>Hospitals</Link>
					<Link>Medicines</Link>
					<Link>Surgeries</Link>
					<Link>Software Providers</Link>
					<Link>Facilites</Link>
					<Link to={"/my-bookings"} className="primary-button">
						My Bookings
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
