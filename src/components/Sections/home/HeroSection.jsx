import BookingModal from "../../BookingModal/BookingModal";
import styles from "./herosection.module.css";

const HeroSection = () => {
	return (
		<div className={styles["hero"]}>
			<div className={styles["hero-left"]}>
				<div>
					<h1>
						<span>Skip the travel! Find Online</span>
						<span>
							Medical <span className="primary-text">Centers</span>
						</span>
					</h1>
					<p>
						Connect instantly with a 24x7 specialist or choose to video visit a
						particular doctor.
					</p>
					<button className="primary-button">Find Centers</button>
				</div>
			</div>
			<div className={styles["hero-right"]}>
				<img src="/doc_hero.png" alt="" />
			</div>
			<BookingModal />
		</div>
	);
};

export default HeroSection;
