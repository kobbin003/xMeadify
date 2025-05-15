import React from "react";
import {
	Autocomplete,
	Box,
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	InputBase,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";

const SearchInput = ({ label, handleOnChange, value, data }) => {
	return (
		<FormControl sx={{ width: "30%" }} id={label}>
			{/* <InputLabel id={label}>{label}</InputLabel> */}
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
				// labelId={label}
				// id={label}
				value={value}
				// label={label}
				// aria-placeholder={label}
				displayEmpty
				onChange={handleOnChange}
				sx={{ paddingLeft: "1.2em" }}
				inputProps={{ "aria-label": "Without label" }}
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
