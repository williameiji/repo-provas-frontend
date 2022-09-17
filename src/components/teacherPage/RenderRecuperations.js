import styled from "styled-components";
import { openUrl } from "../shared/openPdf";

export default function RenderRecuperations({ teacher }) {
	return (
		<>
			{!teacher.categories.recuperation.length ? null : (
				<BoxText>
					<TitleCategory>Recuperação</TitleCategory>

					{teacher.categories.recuperation.map((recup, index) => (
						<Tests key={index} onClick={() => openUrl(recup.pdfUrl)}>
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
	margin-top: 12px;
	color: #878787;
	cursor: pointer;
	:hover {
		color: blue;
	}
`;
