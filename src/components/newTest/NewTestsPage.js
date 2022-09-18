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
import { supabase } from "../shared/openPdf";
import config from "../shared/config";

export default function NewTestPage() {
	const [pdf, setPdf] = useState(null);
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

	async function handleFile(e) {
		handleFormChange(e);
		setPdf(e.target.files[0]);
	}

	useEffect(() => {
		setChangeColorAndPlaceholder({
			buttonAdd: true,
			placeholder: "Adicione uma prova...",
		});

		if (!userInformation.token) {
			alert("Token inexistente/inválido, entre novamente!");
			navigate("/");
		}
	}, []);

	function sendNewtest(e) {
		e.preventDefault();
		setLoading(true);

		(async () => {
			try {
				if (pdf.name.slice(-4) === ".pdf") {
					const { data } = await supabase.storage
						.from("repoprovas")
						.upload(`/public/${Date.now()}_${pdf.name}`, pdf);

					await axios.post(
						urls.tests,
						{ ...testDataInput, pdfUrl: data.Key },
						config(userInformation)
					);

					setLoading(false);

					navigate("/discipline");
				} else {
					alert("O arquivo precisa ter a extensão .pdf");
				}
			} catch (error) {
				if (error.response.status === 401) {
					alert("Token inexistente/inválido, entre novamente!");
					navigate("/");
				}
				console.log(error);
			}
		})();
	}

	return (
		<MainScreen>
			<Box>
				<Title>Adiciona uma prova</Title>
				<form onSubmit={sendNewtest}>
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
						focused
						id="outlined-required"
						name="pdfUrl"
						type="file"
						value={testDataInput.pdfUrl}
						label="Arquivo pdf da prova"
						onChange={handleFile}
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
						type="submit"
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
				</form>
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
