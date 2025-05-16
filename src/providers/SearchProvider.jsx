import { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const useSearchContext = () => useContext(searchContext);

const SearchProvider = ({ children }) => {
	const [state, setState] = useState("");
	const [states, setStates] = useState([]);
	const [city, setCity] = useState("");
	const [medicalCenters, setMedicalCenters] = useState([]);
	const [medicalCentersIsLoading, setMedicalCentersIsLoading] = useState(false);

	//* do not need to implement the selectedCategory since we are hardcoding the value to be doctors.
	// const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<searchContext.Provider
			value={{
				state,
				city,
				setState,
				setCity,
				states,
				setStates,
				medicalCenters,
				setMedicalCenters,
				medicalCentersIsLoading,
				setMedicalCentersIsLoading,
			}}
		>
			{children}
		</searchContext.Provider>
	);
};

export default SearchProvider;
