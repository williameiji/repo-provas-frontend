import { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";
import urls from "../shared/urls";
import CategoryInput from "./CategoryInput";
import MainScreen from "../mainScreen/MainScreen";
import DisciplinesInput from "./DisciplinesInput";
import TeacherInput from "./TeacherInput";
import config from "../shared/config";

export default function NewTestPage() {
	const [testDataInput, setTestDataInput] = useState({
		name: "",
		pdfUrl: "",
		category: "",
		discipline: "",
		teacher: "",
	});
	const [getTeacher, setGetTeacher] = useState(null);
	const [loading, setLoading] = useState(false);

	const { userInformation, setChangeColorAndPlaceholder } =
		useContext(UserContext);

	const navigate = useNavigate();

	function handleFormChange(e) {
		let loginData = { ...testDataInput };
		loginData[e.target.name] = e.target.value;
		setTestDataInput(loginData);
	}

	useEffect(() => {
		setChangeColorAndPlaceholder({
			buttonAdd: true,
			placeholder: "Adicione uma prova...",
		});
	}, []);

	function sendNewtest() {
		setLoading(true);

		(async () => {
			try {
				await axios.post(urls.tests, testDataInput, config(userInformation));

				setLoading(false);

				navigate("/discipline");
			} catch (error) {
				console.log(error);
			}
		})();
	}

	return (
		<MainScreen>
			<Box>
				<Title>Adiciona uma prova</Title>
				<TextField
					id="outlined-basic"
					name="name"
					value={testDataInput.name}
					label="Nome da prova"
					onChange={handleFormChange}
					variant="outlined"
					sx={{ mb: 1, width: "100%" }}
				/>
				<TextField
					id="outlined-basic"
					name="pdfUrl"
					value={testDataInput.pdfUrl}
					label="Link da prova"
					onChange={handleFormChange}
					variant="outlined"
					sx={{ mb: 1, width: "100%" }}
				/>
				<CategoryInput
					setTestDataInput={setTestDataInput}
					testDataInput={testDataInput}
					userInformation={userInformation}
				/>
				<DisciplinesInput
					setTestDataInput={setTestDataInput}
					testDataInput={testDataInput}
					userInformation={userInformation}
					setGetTeacher={setGetTeacher}
				/>
				<TeacherInput
					setTestDataInput={setTestDataInput}
					testDataInput={testDataInput}
					userInformation={userInformation}
					getTeacher={getTeacher}
				/>
				<LoadingButton
					size="medium"
					onClick={sendNewtest}
					loading={loading}
					loadingIndicator="Loading…"
					variant="outlined"
					sx={{
						backgroundColor: "#1976d2",
						color: "white",
						width: "100%",
					}}
				>
					ENVIAR
				</LoadingButton>
			</Box>
		</MainScreen>
	);
}

const Box = styled.div`
	width: 100%;
`;

const Title = styled.p`
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 20px;
`;
