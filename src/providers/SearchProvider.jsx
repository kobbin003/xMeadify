import { createContext, useContext, useState } from "react";

// const searchContext = createContext(null);
const searchContext = createContext();

export const useSearchContext = () => useContext(searchContext);

const SearchProvider = ({ children }) => {
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	// const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<searchContext.Provider value={{ state, city, setState, setCity }}>
			{children}
		</searchContext.Provider>
	);
};

export default SearchProvider;
