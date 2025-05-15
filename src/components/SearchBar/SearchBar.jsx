import { Button } from "@mui/material";
import SearchInput from "./SearchInput";
import { LuSearch } from "react-icons/lu";
import styles from "./searchbar.module.css";
import { useSearchContext } from "../../providers/SearchProvider";
const SearchBar = () => {
	const { state, city, setState, setCity } = useSearchContext();

	//* unlike the regular change handler we are taking in the value instead of event as the argument
	// it is because of the nature of the AutoComplete component.
	const handleOnStateChange = (e) => {
		// console.log("eeeeeeee......", val);
		setState(e.target.value);
	};

	const handleOnCityChange = (e) => {
		setCity(e.target.value);
	};

	return (
		<form>
			<SearchInput
				label="state"
				handleOnChange={handleOnStateChange}
				value={state}
				data={["one", "two", "three"]}
			/>
			<SearchInput
				label="city"
				handleOnChange={handleOnCityChange}
				value={city}
				data={["one-1", "two-2", "three-3"]}
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
