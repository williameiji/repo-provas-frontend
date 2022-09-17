import styled from "styled-components";
import { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import urls from "../shared/urls";

import AuthScreen from "../authScreen/AuthScreen";

export default function FormsSignup({ loading, setLoading, setPageTitle }) {
	const [signupDataInput, setSignupDataInput] = useState({
		email: "",
		password: "",
		refPassword: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		setPageTitle("Cadastro");
	}, []);

	function handleFormChange(e) {
		let loginData = { ...signupDataInput };
		loginData[e.target.name] = e.target.value;
		setSignupDataInput(loginData);
	}

	async function signup() {
		setLoading(true);
		try {
			await axios.post(urls.signup, signupDataInput);
			setLoading(false);
			navigate("/");
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	function goToLogin() {
		navigate("/");
	}

	return (
		<AuthScreen>
			<TextField
				label="Email"
				variant="outlined"
				name="email"
				value={signupDataInput.email}
				onChange={handleFormChange}
				sx={{ mb: 1 }}
			/>
			<TextField
				label="Senha"
				name="password"
				type="password"
				variant="outlined"
				onChange={handleFormChange}
				value={signupDataInput.password}
				sx={{ mb: 1 }}
			/>
			<TextField
				label="Confirme sua senha"
				name="refPassword"
				type="password"
				variant="outlined"
				onChange={handleFormChange}
				value={signupDataInput.refPassword}
				sx={{ mb: 1 }}
			/>
			<ButtonBox>
				<ClickBack onClick={goToLogin}>Já possuo cadastro</ClickBack>
				<LoadingButton variant="contained" onClick={signup} loading={loading}>
					CADASTRAR
				</LoadingButton>
			</ButtonBox>
		</AuthScreen>
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
