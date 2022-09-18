import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect, Fragment } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

import urls from "../shared/urls";
import config from "../shared/config";

export default function CategoryInput({
	testDataInput,
	setTestDataInput,
	userInformation,
}) {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const loading = open && options.length === 0;

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			try {
				const { data: categories } = await axios.get(
					urls.category,
					config(userInformation)
				);
				if (active) {
					setOptions(categories);
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
				data-cy="categories"
				id="asynchronous-demo"
				sx={{ mb: 1, width: "100%" }}
				onChange={(event, value) =>
					setTestDataInput({ ...testDataInput, category: value?.name })
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
						label="Categoria"
						name="category"
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
