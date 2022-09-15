import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect, Fragment } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

import urls from "../shared/urls";

export default function DisciplinesInput({
	testDataInput,
	setTestDataInput,
	config,
	setGetTeacher,
}) {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const loading = open && options.length === 0;

	function handleChange(value) {
		setTestDataInput({ ...testDataInput, discipline: value?.name });
		setGetTeacher(value?.id);
	}

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			try {
				const { data: disciplines } = await axios.get(urls.discipline, config);
				if (active) {
					setOptions(disciplines);
				}
			} catch (error) {
				console.log(error);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<>
			<Autocomplete
				id="asynchronous-demo"
				sx={{ mb: 1, width: "100%" }}
				onChange={(event, value) => handleChange(value)}
				open={open}
				onOpen={() => {
					setOpen(true);
				}}
				onClose={() => {
					setOpen(false);
				}}
				isOptionEqualToValue={(option, value) => option.name === value.name}
				getOptionLabel={(option) => option.name}
				options={options}
				loading={loading}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Disciplina"
						name="discipline"
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<Fragment>
									{loading ? (
										<CircularProgress color="inherit" size={20} />
									) : null}
									{params.InputProps.endAdornment}
								</Fragment>
							),
						}}
					/>
				)}
			/>
		</>
	);
}
