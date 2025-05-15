import React from "react";
import {
	Autocomplete,
	Box,
	IconButton,
	Input,
	InputAdornment,
	InputBase,
	InputLabel,
	Paper,
	Stack,
	TextField,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";

const SearchInput = ({ label, handleOnChange, value, data }) => {
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				id={label}
				disableClearable
				value={value}
				onChange={(event, newValue) => {
					handleOnChange(newValue);
				}}
				options={data}
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder={label}
						// label={placeholder}
						slotProps={{
							input: {
								...params.InputProps,
								type: "search",
								startAdornment: (
									<InputAdornment position="start">
										<LuSearch />
									</InputAdornment>
								),
							},
						}}
					/>
				)}
			/>
		</Stack>
	);
};
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
