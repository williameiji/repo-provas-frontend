import styled from "styled-components";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import AuthScreen from "../authScreen/AuthScreen";
import theme from "../../assets/css/theme";
import FormsLogin from "./FormsLogin";

export default function Login() {
	return (
		<AuthScreen>
			<Box>
				<Title>Login</Title>
				<ThemeProvider theme={theme}>
					<Button variant="contained" color="primary">
						Entrar com o GITHUB
					</Button>
				</ThemeProvider>
				<Bars>
					<div></div>
					<p>ou</p>
					<div></div>
				</Bars>
				<FormsLogin />
			</Box>
		</AuthScreen>
	);
}

const Box = styled.div`
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
