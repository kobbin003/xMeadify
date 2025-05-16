import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { slotIsSaved } from "../../utils/utils";

const TimeCapsule = ({
	handleTimeSelect,
	time,
	medicalId,
	day,
	savingDone,
	setSavingDone,
}) => {
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		setIsSaved(slotIsSaved(medicalId, day, time));
	}, []);

	useEffect(() => {
		if (savingDone) {
			setIsSaved(slotIsSaved(medicalId, day, time));
			// reset the savingDone
			setSavingDone(false);
		}
	}, [savingDone, medicalId, day, time, setSavingDone]);

	return (
		<Button
			sx={isSaved && { backgroundColor: "var(--primary)", color: "white" }}
			variant="outlined"
			onClick={() => handleTimeSelect(time)}
		>
			{time}
		</Button>
	);
};

export default TimeCapsule;
