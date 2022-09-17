import styled from "styled-components";

export default function Loading() {
	return (
		<>
			<Box>
				<Outer></Outer>
				<Middle></Middle>
				<Inner></Inner>
			</Box>
		</>
	);
}

const Box = styled.div`
	position: relative;
	margin-top: 400px;
`;

const Outer = styled.div`
	border: 3px solid transparent;
	border-top-color: #1976d2;
	border-right-color: #1976d2;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 6.5em;
	height: 6.5em;
	margin-left: -1.75em;
	margin-top: -1.75em;
	animation: spin 2s linear infinite;
`;

const Middle = styled.div`
	border: 3px solid transparent;
	border-top-color: #1976d2;
	border-right-color: #1976d2;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 5.1em;
	height: 5.1em;
	margin-left: -1.05em;
	margin-top: -1.05em;
	animation: spin 1.75s linear reverse infinite;
`;

const Inner = styled.div`
	border: 3px solid transparent;
	border-top-color: #1976d2;
	border-right-color: #1976d2;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 3.8em;
	height: 3.8em;
	margin-left: -0.4em;
	margin-top: -0.4em;
	animation: spin 1.5s linear infinite;
`;
