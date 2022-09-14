import styled from "styled-components";
import logo from "../../assets/images/logo-repoprovas.png";

export default function AuthScreen(props) {
	return (
		<Box>
			<Logo>
				<img src={logo} alt="logo" />
			</Logo>
			{props.children}
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
