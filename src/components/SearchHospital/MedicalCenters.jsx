import { useSearchContext } from "../../providers/SearchProvider";
import MedicalInfoCard from "./MedicalInfoCard";
import styles from "./medicalcenters.module.css";

const MedicalCenters = () => {
	const { city, medicalCenters, medicalCentersIsLoading } = useSearchContext();
	console.log("medicalCenters: ", medicalCenters);
	return (
		<div className={styles["container"]}>
			{medicalCentersIsLoading ? (
				<p>Loading...</p>
			) : medicalCenters.length > 0 ? (
				<>
					<div className={styles["availability-info"]}>
						<h1>
							{medicalCenters.length} medical centers available in{" "}
							{city.toLowerCase()}
						</h1>
						<p>
							<img src="/tick.svg" alt="" height={"20"} width={"20"} />
							<span>
								Book appointments with minimum wait-time & verified doctor
								details
							</span>
						</p>
					</div>
					<div className={styles["medical-centers"]}>
						{medicalCenters.map((medicalInfo) => (
							<MedicalInfoCard
								key={medicalInfo?.["Provider ID"]}
								medicalInfo={medicalInfo}
							/>
						))}
					</div>
				</>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default MedicalCenters;
