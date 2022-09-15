import styled from "styled-components";

export default function RenderRecuperations({ teacher }) {
	return (
		<>
			{!teacher.categories.recuperation.length ? null : (
				<BoxText>
					<TitleCategory>Recuperação</TitleCategory>

					{teacher.categories.recuperation.map((recup, index) => (
						<Tests key={index}>
							{recup.createdAt.slice(0, 4)} - {recup.name} ({recup.discipline})
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
