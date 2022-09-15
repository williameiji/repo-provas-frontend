import styled from "styled-components";

export default function RenderProjects({ teacher }) {
	return (
		<>
			{!teacher.categories.projects.length ? null : (
				<BoxText>
					<TitleCategory>Projetos</TitleCategory>

					{teacher.categories.projects.map((project, index) => (
						<Tests key={index}>
							data - {project.name} ({project.discipline})
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
