import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect, Fragment } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

import urls from "../shared/urls";
import config from "../shared/config";

export default function TeacherInput({
	testDataInput,
	setTestDataInput,
	userInformation,
	getTeacher,
}) {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const loading = open && options.length === 0;
	const [blockInput, setBlockInput] = useState(true);

	useEffect(() => {
		if (getTeacher) {
			setBlockInput(false);

			(async () => {
				try {
					const teacher = await axios.get(
						`${urls.teacher}/${getTeacher}`,
						config(userInformation)
					);

					setOptions(teacher.data);
				} catch (error) {
					console.log(error);
				}
			})();
		}
	}, [getTeacher]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<>
			<Autocomplete
				data-cy="teachers"
				id="asynchronous-demo"
				disabled={blockInput}
				sx={{ mb: 1, width: "100%" }}
				onChange={(event, value) =>
					setTestDataInput({ ...testDataInput, teacher: value?.name })
				}
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
						label="Pessoa instrutora"
						name="teacher"
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
