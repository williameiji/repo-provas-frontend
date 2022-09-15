import styled from "styled-components";

export default function RenderPractices({ teacher }) {
	return (
		<>
			{!teacher.categories.practices.length ? null : (
				<BoxText>
					<TitleCategory>Práticas</TitleCategory>

					{teacher.categories.practices.map((pract, index) => (
						<Tests key={index}>
							data - {pract.name} ({pract.discipline})
						</Tests>
					))}
				</BoxText>
			)}
		</>
	);
}

const BoxText = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleCategory = styled.p`
	font-weight: bold;
`;

const Tests = styled.p`
	margin-top: 8px;
	color: #878787;
`;
