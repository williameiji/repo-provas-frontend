import styled from "styled-components";
import { openUrl } from "../shared/openPdf";

export default function RenderRecuperations({ discipline }) {
	return (
		<>
			{!discipline.category.recuperation.length ? null : (
				<BoxText>
					<TitleCategory>Recuperação</TitleCategory>

					{discipline.category.recuperation.map((recup, index) => (
						<Tests key={index} onClick={() => openUrl(recup.pdfUrl)}>
							{recup.createdAt.slice(0, 4)} - {recup.name} ({recup.teacher})
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
	margin-top: 12px;
	color: #878787;
	cursor: pointer;
	:hover {
		color: blue;
	}
`;
