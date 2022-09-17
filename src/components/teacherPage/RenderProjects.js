import styled from "styled-components";
import { openUrl } from "../shared/openPdf";

export default function RenderProjects({ teacher }) {
	return (
		<>
			{!teacher.categories.projects.length ? null : (
				<BoxText>
					<TitleCategory>Projetos</TitleCategory>

					{teacher.categories.projects.map((project, index) => (
						<Tests key={index} onClick={() => openUrl(project.pdfUrl)}>
							{project.createdAt.slice(0, 4)} - {project.name} (
							{project.discipline})
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
	margin-top: 12px;
	color: #878787;
	cursor: pointer;
	:hover {
		color: blue;
	}
`;
