import { Button } from "@mui/material";
import SearchInput from "./SearchInput";
import { LuSearch } from "react-icons/lu";
import styles from "./searchbar.module.css";
import { useSearchContext } from "../../providers/SearchProvider";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchBar = () => {
	const { state, city, setState, setCity, states, setStates } =
		useSearchContext();
	const [statesIsLoading, setStatesIsLoading] = useState(false);
	const [citiesIsLoading, setCitiesIsLoading] = useState(false);
	const [cities, setCities] = useState([]);
	//* unlike the regular change handler we are taking in the value instead of event as the argument
	// it is because of the nature of the AutoComplete component.
	const handleOnStateChange = (e) => {
		setState(e.target.value);
	};

	const handleOnCityChange = (e) => {
		setCity(e.target.value);
	};

	useEffect(() => {
		(async function () {
			setStatesIsLoading(true);
			const statesUrl = "https://meddata-backend.onrender.com/states";
			const { data, status } = await axios.get(statesUrl);
			if (status == 200) {
				setStates(data);
				setStatesIsLoading(false);
			}
		})();
	}, []);
	useEffect(() => {
		if (state) {
			// empty the cities on state change:
			setCities([]);
			(async function () {
				setCitiesIsLoading(true);
				const citiesUrl = `https://meddata-backend.onrender.com/cities/${state}`;
				const { data, status } = await axios.get(citiesUrl);
				if (status == 200) {
					setCities(data);
					setCitiesIsLoading(false);
				}
			})();
		}
	}, [state]);

	return (
		<form>
			<SearchInput
				label="state"
				handleOnChange={handleOnStateChange}
				value={state}
				data={statesIsLoading ? ["Loading..."] : states}
			/>
			<SearchInput
				label="city"
				handleOnChange={handleOnCityChange}
				value={city}
				data={citiesIsLoading ? ["Loading..."] : cities}
			/>
			<Button
				type="submit"
				variant="contained"
				startIcon={<LuSearch />}
				sx={{ backgroundColor: "var(--primary)", textTransform: "none" }}
			>
				Search
			</Button>
		</form>
	);
};

export default SearchBar;
