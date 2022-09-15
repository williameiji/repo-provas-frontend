import styled from "styled-components";

export default function RenderRecuperations({ discipline }) {
	return (
		<>
			{!discipline.category.recuperation.length ? null : (
				<BoxText>
					<TitleCategory>Recuperação</TitleCategory>

					{discipline.category.recuperation.map((recup, index) => (
						<Tests key={index}>
							data - {recup.name} ({recup.teacher})
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
