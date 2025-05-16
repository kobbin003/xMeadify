import React, { useEffect, useState } from "react";
import styles from "./bookings.module.css";
import { Button, Tab, Tabs } from "@mui/material";
import TimeCapsule from "./TimeCapsule";
/**
 * index 0 -> today
 * index 1 -> tommorrow
 * index 2 -> day after tommorrow
 */
const bookingTimeSlots = {
	morning: [{ time: "11:30 AM", available: true }],
	afternoon: [
		{ time: "12:00 PM", available: true },
		{ time: "12:30 PM", available: true },
		{ time: "01:30 PM", available: true },
		{ time: "02:00 PM", available: true },
		{ time: "02:30 PM", available: true },
	],
	evening: [
		{ time: "06:00 PM", available: true },
		{ time: "06:30 PM", available: true },
		{ time: "07:00 PM", available: true },
		{ time: "07:30 PM", available: true },
	],
};

export const dayMap = getDayMap();
const Bookings = ({ medicalInfo }) => {
	const [day, setDay] = useState("today");
	const [selectedTime, setSelectedTime] = useState("");
	const [savingDone, setSavingDone] = useState(false);
	const slotsAvailable = Object.keys(bookingTimeSlots).reduce((acc, key) => {
		return acc + bookingTimeSlots[key].length;
	}, 0);

	console.log("slotsAvailable: ", slotsAvailable);
	const handleTabChange = (e, newValue) => {
		console.log("newValue: ", newValue);
		setDay(newValue);
	};

	const handleTimeSelect = (val) => {
		console.log("selected-time: ", val);
		setSelectedTime(val);
	};

	useEffect(() => {
		if (selectedTime) {
			saveAppointmentTiming(medicalInfo, dayMap[day], selectedTime);
			setSavingDone(true);
		}
	}, [selectedTime]);

	return (
		<div className={styles["bookings"]}>
			<div>
				<Tabs
					value={day}
					onChange={handleTabChange}
					aria-label="basic tabs example"
				>
					<Tab
						label={`${slotsAvailable} Slots Available`}
						value={"today"}
						icon={<p>Today</p>}
						iconPosition="top"
					/>
					<Tab
						label={`${slotsAvailable} Slots Available`}
						value={"tomorrow"}
						icon={<p>Tommorow</p>}
						iconPosition="top"
					/>
					<Tab
						label={`${slotsAvailable} Slots Available`}
						value={"afterTommorrow"}
						icon={<p>{dayMap["afterTommorrow"]}</p>}
						iconPosition="top"
					/>
				</Tabs>
			</div>
			<ul className={styles["day-list"]}>
				{["Morning", "Afternoon", "Evening"].map((timings) => (
					<li key={timings}>
						<p>{timings}</p>
						<ul className={styles["time-list"]}>
							{bookingTimeSlots[timings.toLowerCase()].map(({ time }) => (
								<li key={timings + time} className={styles["time-capsule"]}>
									<TimeCapsule
										handleTimeSelect={handleTimeSelect}
										medicalId={medicalInfo["Provider ID"]}
										time={time}
										day={dayMap[day]}
										savingDone={savingDone}
										setSavingDone={setSavingDone}
									/>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};
function getDayMap() {
	const today = new Date();

	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	const dayAfterTomorrow = new Date();
	dayAfterTomorrow.setDate(today.getDate() + 2);

	function getDateFormatted(date) {
		return date.toLocaleString("en-GB", {
			month: "short",
			day: "2-digit",
			weekday: "short",
		});
	}

	return {
		today: getDateFormatted(today),
		tomorrow: getDateFormatted(tomorrow),
		afterTommorrow: getDateFormatted(dayAfterTomorrow),
	};
}

function saveAppointmentTiming(medicalInfo, day, time) {
	const storedAppointments = localStorage.getItem("appointments");
	let parsedValue = JSON.parse(storedAppointments);
	if (!storedAppointments) {
		parsedValue = [];
	}

	// if the appointment is found for a particular medicalId
	// we will just update the day and time
	const isMedicalFound = parsedValue.some(
		({ medical }) => medical["Provider ID"] == medicalInfo["Provider ID"]
	);
	if (isMedicalFound) {
		parsedValue = parsedValue.map((item) => {
			if (item.medical["Provider ID"] == medicalInfo["Provider ID"]) {
				return { ...item, day, time };
			} else {
				return item;
			}
		});
	} else {
		// else we will just create a new one.
		parsedValue.push({ medical: medicalInfo, day, time });
	}

	// store back the value:
	localStorage.setItem("appointments", JSON.stringify(parsedValue));
}
export default Bookings;
