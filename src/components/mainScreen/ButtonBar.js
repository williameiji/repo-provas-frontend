import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

import urls from "../shared/urls";
import UserContext from "../context/UserContext";
import config from "../shared/config";

export default function ButtonBar() {
	const {
		changeColorAndPlaceholder,
		userInformation,
		setTeacherFilteredData,
		setDisciplineFilteredData,
	} = useContext(UserContext);
	const navigate = useNavigate();

	function goToDisciplinePage() {
		navigate("/discipline");
	}

	function goToTeacherPage() {
		navigate("/teacher");
	}

	function goToNewTestPage() {
		navigate("/newtest");
	}

	async function searchUser(str) {
		const MIN = 3;

		if (str.length >= MIN) {
			const strNoSpaces = str.replace(" ", "+");

			if (
				changeColorAndPlaceholder.placeholder ===
				"Pesquise por pessoa instrutora"
			) {
				await axios
					.get(
						`${urls.teachers}?search=${strNoSpaces}`,
						config(userInformation)
					)
					.then((response) => {
						setTeacherFilteredData(response.data);
					})
					.catch((err) => {
						console.log(err.response);
					});
			} else if (
				changeColorAndPlaceholder.placeholder === "Pesquise por disciplina"
			) {
				await axios
					.get(
						`${urls.disciplines}?search=${strNoSpaces}`,
						config(userInformation)
					)
					.then((response) => {
						setDisciplineFilteredData(response.data);
					})
					.catch((err) => {
						console.log(err.response);
					});
			}
		}

		if (str.length < 3) {
			setTeacherFilteredData(null);
			setDisciplineFilteredData(null);
		}
	}

	return (
		<Box>
			<BoxInput>
				<TextField
					id="outlined-basic"
					label={changeColorAndPlaceholder.placeholder}
					variant="outlined"
					size="small"
					sx={{ width: "30%" }}
					disabled={changeColorAndPlaceholder.buttonAdd}
					onChange={(e) => searchUser(e.target.value)}
				/>

				<Bar></Bar>
			</BoxInput>
			<BoxButtons>
				<ButtonDiscipline
					cor={changeColorAndPlaceholder?.buttonDiscipline}
					onClick={goToDisciplinePage}
					data-cy="discipline"
				>
					DISCIPLINAS
				</ButtonDiscipline>
				<ButtonTeacher
					cor={changeColorAndPlaceholder?.buttonTeacher}
					onClick={goToTeacherPage}
					data-cy="teacher"
				>
					PESSOA INSTRUTORA
				</ButtonTeacher>
				<ButtonAdd
					cor={changeColorAndPlaceholder?.buttonAdd}
					onClick={goToNewTestPage}
					data-cy="test"
				>
					ADICIONAR
				</ButtonAdd>
			</BoxButtons>
		</Box>
	);
}

const Box = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	background-color: #fafafa;
	margin-top: 167px;
`;

const Bar = styled.div`
	width: 100%;
	height: 1px;
	background: #c4c4c4;
	margin: 20px 0;
`;

const BoxInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin-bottom: 20px;
`;

const BoxButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const ButtonDiscipline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	border: 1px solid #1976d2;
	font-weight: 500;
	color: ${(props) => (props.cor ? "white" : "#1976d2")};
	border-radius: 3px;
	margin: 0 50px;
	font-size: 14px;
	background-color: ${(props) => (props.cor ? "#1976d2" : "")};
	cursor: pointer;
`;

const ButtonTeacher = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	border: 1px solid #1976d2;
	font-weight: 500;
	color: ${(props) => (props.cor ? "white" : "#1976d2")};
	border-radius: 3px;
	margin: 0 50px;
	font-size: 14px;
	background-color: ${(props) => (props.cor ? "#1976d2" : "")};
	cursor: pointer;
`;

const ButtonAdd = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	border: 1px solid #1976d2;
	font-weight: 500;
	color: ${(props) => (props.cor ? "white" : "#1976d2")};
	border-radius: 3px;
	margin: 0 50px;
	font-size: 14px;
	background-color: ${(props) => (props.cor ? "#1976d2" : "")};
	cursor: pointer;
`;
