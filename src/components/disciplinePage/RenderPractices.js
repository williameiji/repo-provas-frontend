import styled from "styled-components";

export default function RenderPractices({ discipline }) {
	return (
		<>
			{!discipline.category.practices.length ? null : (
				<BoxText>
					<TitleCategory>Práticas</TitleCategory>

					{discipline.category.practices.map((pract, index) => (
						<Tests key={index}>
							{pract.createdAt.slice(0, 4)} - {pract.name} ({pract.teacher})
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
	margin-top: 10px;
`;

const TitleCategory = styled.p`
	font-weight: bold;
`;

const Tests = styled.p`
	margin-top: 8px;
	color: #878787;
`;
