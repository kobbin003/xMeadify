import SearchBar from "../components/SearchBar/SearchBar";
import MedicalCenters from "../components/SearchHospital/MedicalCenters";
import styles from "./doctors.module.css";
const Doctors = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["search-container"]}>
				<SearchBar />
			</div>
			<MedicalCenters />
		</div>
	);
};

export default Doctors;
