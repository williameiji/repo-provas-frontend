import styled from "styled-components";

export default function RenderProjects({ discipline }) {
	return (
		<>
			{!discipline.category.projects.length ? null : (
				<BoxText>
					<TitleCategory>Projetos</TitleCategory>

					{discipline.category.projects.map((project, index) => (
						<Tests key={index}>
							data - {project.name} ({project.teacher})
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
