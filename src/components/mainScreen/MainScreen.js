import Header from "./Header";
import styled from "styled-components";

import ButtonBar from "./ButtonBar";

export default function MainScreen(props) {
	return (
		<>
			<Header />
			<ButtonBar />
			<Box>{props.children}</Box>
		</>
	);
}

const Box = styled.div`
	max-width: 50%;
	margin: 350px auto 40px auto;
`;
