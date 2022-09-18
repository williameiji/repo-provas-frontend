import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo-repoprovas.png";

export default function Header() {
	const navigate = useNavigate();

	function logout() {
		localStorage.clear();
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
