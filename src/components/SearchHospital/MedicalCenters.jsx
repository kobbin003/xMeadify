import { useSearchContext } from "../../providers/SearchProvider";
import MedicalResultCard from "./MedicalResultCard";

const MedicalCenters = () => {
	const { city, medicalCenters, medicalCentersIsLoading } = useSearchContext();

	return (
		<div>
			{medicalCentersIsLoading ? (
				<p>Loading...</p>
			) : medicalCenters.length ? (
				<>
					<div>
						<h1>
							{medicalCenters.length} medical centers available in {city}
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
							<MedicalResultCard medicalInfo={medicalInfo} />
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
