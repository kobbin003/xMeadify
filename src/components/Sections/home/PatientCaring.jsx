import styles from "./patientCaring.module.css";
const PatientCaring = () => {
	return (
		<div className={styles["container"]}>
			<div>
				<img src="/patientcaring/patientcaring.svg" alt="" />
			</div>
			<div className={styles["info"]}>
				<p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
				<p>
					<b>
						Patient <span>Caring</span>
					</b>
				</p>
				<p>
					Our goal is to deliver quality of care in a courteous, respectful, and
					compassionate manner. We hope you will allow us to care for you and
					strive to be the first and best choice for healthcare.
				</p>
				<div>
					<p>
						<img src="/tick-blue.svg" alt="" />
						<span>Stay Updated About Your Health</span>
					</p>
					<p>
						<img src="/tick-blue.svg" alt="" />
						<span>Check Your Results Online</span>
					</p>
					<p>
						<img src="/tick-blue.svg" alt="" />
						<span>Manage Your Appointments</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PatientCaring;
