import styled from "styled-components";
import { useState, useContext } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import urls from "../shared/urls";
import UserContext from "../context/UserContext";

export default function FormsLogin() {
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { setUserInformation } = useContext(UserContext);

	function handleFormChange(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	async function login() {
		setLoading(true);
		try {
			const token = await axios.post(urls.login, loginDataInput);
			setUserInformation(token);
			setLoading(false);
			navigate("/discipline");
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	function goToSignup() {
		navigate("/signup");
	}

	return (
		<>
			<TextField
				label="Email"
				variant="outlined"
				name="email"
				value={loginDataInput.email}
				onChange={handleFormChange}
				sx={{ mb: 1 }}
			/>
			<TextField
				label="Senha"
				name="password"
				type="password"
				variant="outlined"
				onChange={handleFormChange}
				value={loginDataInput.password}
				sx={{ mb: 1 }}
			/>
			<ButtonBox>
				<ClickBack onClick={goToSignup}>Não possuo cadastro</ClickBack>
				<LoadingButton variant="contained" onClick={login} loading={loading}>
					ENTRAR
				</LoadingButton>
			</ButtonBox>
		</>
	);
}

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ClickBack = styled.p`
	font-weight: 500;
	font-size: 12px;
	text-decoration-line: underline;
	color: rgba(70, 115, 202, 0.8);
`;
