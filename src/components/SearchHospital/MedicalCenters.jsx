import { useSearchContext } from "../../providers/SearchProvider";
import MedicalInfoCard from "./MedicalInfoCard";

const MedicalCenters = () => {
	const { city, medicalCenters, medicalCentersIsLoading } = useSearchContext();
	console.log("medicalCenters: ", medicalCenters);
	return (
		<div>
			{medicalCentersIsLoading ? (
				<p>Loading...</p>
			) : medicalCenters.length > 0 ? (
				<>
					<div>
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
					<div>
						{medicalCenters.map((medicalInfo) => (
							<MedicalInfoCard
								key={medicalInfo?.["Provider ID"]}
								medicalInfo={medicalInfo}
							/>
						))}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default MedicalCenters;
