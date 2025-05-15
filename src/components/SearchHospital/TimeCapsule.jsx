import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const TimeCapsule = ({
	handleTimeSelect,
	time,
	medicalId,
	day,
	savingDone,
	setSavingDone,
}) => {
	// const handleBookAppointment = (day, time) => {
	// 	console.log(day, "<-->", time);
	// 	saveAppointmentTiming(medicalInfo, day, time);
	// };
	const [isSaved, setIsSaved] = useState(false);
	if (isSaved) {
		console.log("isSaved-update: ", day, time);
	}
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

function slotIsSaved(medicalId, day, time) {
	const storedAppointments = localStorage.getItem("appointments");
	if (!storedAppointments) {
		return false;
	}
	let parsedValue = JSON.parse(storedAppointments);
	const find = parsedValue.find(
		({ medical }) => medical["Provider ID"] == medicalId
	);

	if (!find) return false;
	return find.day == day && find.time == time;
}
export default TimeCapsule;
