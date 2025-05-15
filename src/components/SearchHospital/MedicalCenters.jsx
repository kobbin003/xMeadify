import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../providers/SearchProvider";
import axios from "axios";
import MedicalResultCard from "./MedicalResultCard";

const MedicalCenters = () => {
	const { state, city } = useSearchContext();
	const [medicalCenters, setMedicalCenters] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// console.log("medicalCenters: ", medicalCenters);
	useEffect(() => {
		if (state && city) {
			setIsLoading(true);
			(async function () {
				const medicalCentersUrl = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
				const { data, status } = await axios.get(medicalCentersUrl);
				if (status == 200) {
					setMedicalCenters(data);
					setIsLoading(false);
				}
			})();
		}
	}, [state, city]);
	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
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
			)}
		</div>
	);
};

export default MedicalCenters;
