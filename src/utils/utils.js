// booking tab value -> date value map
export function getDayMap() {
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

// save the appointment timing on time-capsule click
export function saveAppointmentTiming(medicalInfo, day, time) {
	const storedAppointments = localStorage.getItem("bookings");
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
	localStorage.setItem("bookings", JSON.stringify(parsedValue));
}

// check if a particular slot(time-capsule) is saved.
export function slotIsSaved(medicalId, day, time) {
	const storedAppointments = localStorage.getItem("bookings");
	if (!storedAppointments) {
		return false;
	}
	let parsedValue = JSON.parse(storedAppointments);
	if (parsedValue.length == 0) {
		return false;
	}

	const find = parsedValue.find(
		({ medical }) => medical["Provider ID"] == medicalId
	);

	if (!find) return false;
	return find.day == day && find.time == time;
}

// to get the users saved bookings
export function getMyBookings() {
	const storedAppointments = localStorage.getItem("bookings");
	if (storedAppointments) {
		const parsed = JSON.parse(storedAppointments);
		return parsed;
	} else {
		return [];
	}
}
