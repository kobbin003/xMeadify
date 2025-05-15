import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router";
import { useSearchContext } from "../../providers/SearchProvider";

const SearchInput = ({ label, handleOnChange, value, data }) => {
	const location = useLocation();
	let navigate = useNavigate();
	const { state } = useSearchContext();
	console.log("location: ", location);

	// const shouldOpenDropDown =
	// 	homeSelectClickRef.current && location.pathname != "/" && label == "state";
	useEffect(() => {
		// navigate to docotrs after the state has been selected
		if (location.pathname == "/" && state) {
			navigate("/doctors");
		}
	}, [state]);

	return (
		<FormControl sx={{ width: "30%" }} id={label}>
			<LuSearch
				style={{
					position: "absolute",
					left: 10,
					top: "50%",
					transform: "translateY(-50%)",
					pointerEvents: "none",
				}}
			/>
			<Select
				value={value}
				displayEmpty
				onChange={handleOnChange}
				sx={{ paddingLeft: "1.2em" }}
				inputProps={{ "aria-label": "Without label" }}
				MenuProps={{
					slotProps: { paper: { sx: { maxHeight: 400 } } },
				}}
			>
				<MenuItem value="" disabled>
					<span style={{ color: "grey" }}>{label}</span>
				</MenuItem>
				{data.map((val) => (
					<MenuItem value={val}>{val}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

/* ---------------------- using autocomplete --------------------- */
// const SearchInput = ({ label, handleOnChange, value, data }) => {
// 	return (
// 		<Stack spacing={2} sx={{ width: 300 }}>
// 			<Autocomplete
// 				id={label}
// 				disableClearable
// 				value={value}
// 				onChange={(event, newValue) => {
// 					handleOnChange(newValue);
// 				}}
// 				options={data}
// 				renderInput={(params) => (
// 					<TextField
// 						{...params}
// 						placeholder={label}
// 						// label={placeholder}
// 						slotProps={{
// 							input: {
// 								...params.InputProps,
// 								type: "search",
// 								startAdornment: (
// 									<InputAdornment position="start">
// 										<LuSearch />
// 									</InputAdornment>
// 								),
// 							},
// 						}}
// 					/>
// 				)}
// 			/>
// 		</Stack>
// 	);
// };

/* ------------------------- basic input ------------------------- */
// const SearchInput = ({ placeholder, handleOnChange, value }) => {
// 	return (
// 		<Box>
// 			<IconButton sx={{ p: "10px" }} aria-label="menu">
// 				<LuSearch />
// 			</IconButton>
// 			<InputBase
// 				sx={{ ml: 1, flex: 1 }}
// 				placeholder={placeholder}
// 				inputProps={{ "aria-label": "search google maps" }}
// 				onChange={handleOnChange}
// 				value={value}
// 			/>
// 		</Box>
// 	);
// };

export default SearchInput;
