import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

import logo from "../../assets/images/logo-repoprovas.png";

export default function Header() {
	const [buttons, setButtons] = useState({
		buttonDiscipline: true,
		buttonTeacher: false,
		buttonAdd: false,
	});
	const [placeholderInput, setPlaceholderInput] = useState(
		"Pesquise por disciplina"
	);

	const navigate = useNavigate();

	function logout() {
		navigate("/");
	}

	return (
		<Box>
			<BoxLogo>
				<img src={logo} alt="logo" />
				<Logout onClick={logout}>
					<LogoutIcon fontSize="large" />
				</Logout>
			</BoxLogo>
			<BoxInput>
				<TextField
					id="outlined-basic"
					label={placeholderInput}
					variant="outlined"
					size="small"
					sx={{ width: "30%" }}
				/>

				<Bar></Bar>

				<BoxButtons>
					<ButtonDiscipline cor={buttons.buttonDiscipline}>
						DISCIPLINAS
					</ButtonDiscipline>
					<ButtonTeacher cor={buttons.buttonTeacher}>
						PESSOA INSTRUTORA
					</ButtonTeacher>
					<ButtonAdd cor={buttons.buttonAdd}>ADICIONAR</ButtonAdd>
				</BoxButtons>
			</BoxInput>
		</Box>
	);
}

const Box = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`;

const BoxLogo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 60px 60px 50px 60px;
	position: relative;

	img {
		width: 20%;
	}
`;

const Logout = styled.div`
	position: absolute;
	top: 30px;
	right: 30px;
`;

const BoxInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Bar = styled.div`
	width: 100%;
	height: 1px;
	background: #c4c4c4;
	margin: 20px 0;
`;

const BoxButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
