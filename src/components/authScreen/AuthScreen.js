import styled from "styled-components";
import logo from "../../assets/images/logo-repoprovas.png";

import { LoadingButton } from "@mui/lab";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext } from "react";

import theme from "../../assets/css/theme";
import urls from "../shared/urls";
import UserContext from "../context/UserContext";
import { useState } from "react";

export default function AuthScreen(props) {
	const navigate = useNavigate();
	const { setUserInformation, pageTitle } = useContext(UserContext);
	const [gitLogin, setGitLogin] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const url = window.location.href;
		const hasCode = url.includes("?code=");

		if (hasCode) {
			setLoading(true);

			const newUrl = url.split("?code=");

			const body = {
				code: newUrl[1],
			};

			async function login() {
				try {
					const { data } = await axios.post(urls.git, body);

					localStorage.setItem("token", data);

					setUserInformation({ token: data });

					navigate("/discipline");
				} catch (error) {
					alert(error.response.data);
					setLoading(false);
					navigate("/");
				}
			}

			login();
		}
	}, [gitLogin]);

	function login() {
		setGitLogin(true);
	}

	return (
		<Box>
			<Logo>
				<img src={logo} alt="logo" />
			</Logo>
			<BoxTest>
				<Title>{pageTitle}</Title>
				<ThemeProvider theme={theme}>
					<LoadingButton
						variant="contained"
						color="primary"
						loading={loading}
						onClick={login}
						href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
					>
						Entrar com o GITHUB
					</LoadingButton>
				</ThemeProvider>
				<Bars>
					<div></div>
					<p>ou</p>
					<div></div>
				</Bars>
				{props.children}
			</BoxTest>
		</Box>
	);
}

const Box = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	margin: 60px 0 200px 0;
	img {
		width: 50%;
	}
`;

const BoxTest = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Title = styled.p`
	font-weight: 500;
	font-size: 24px;
	letter-spacing: 0.15px;
	color: rgba(0, 0, 0, 0.8);
	text-align: center;
	margin: 0 0 30px 0;
`;

const Bars = styled.div`
	display: flex;
	align-items: center;
	margin: 30px 0 30px 0;

	div {
		width: 200px;
		height: 1px;
		background-color: #c4c4c4;
	}

	p {
		font-size: 12px;
		margin: 0 5px;
	}
`;
