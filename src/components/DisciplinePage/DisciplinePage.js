import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import urls from "../shared/urls";

export default function RenderDiscipline() {
	const [disciplineData, setDisciplineData] = useState(null);
	const { userInformation, setChangeColorAndPlaceholder } =
		useContext(UserContext);

	useEffect(() => {
		setChangeColorAndPlaceholder({
			buttonDiscipline: true,
			placeholder: "Pesquise por disciplina",
		});

		const config = {
			headers: {
				Authorization: `Bearer ${userInformation.data}`,
			},
		};

		async function getDisciplineData() {
			try {
				const data = await axios.get(urls.disciplines, config);
				setDisciplineData(data);
			} catch (error) {
				console.log(error);
			}
		}
		getDisciplineData();
	}, []);

	return (
		<MainScreen>
			{!disciplineData ? (
				"aguarde..."
			) : (
				<>
					{disciplineData.data.map((period, index) => (
						<Accordion key={index}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography fontWeight={700}>
									{period.period} Período
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{period.disciplines.map((discipline, index) => (
									<Accordion key={index}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<Typography fontWeight={700}>
												{discipline.name}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{!discipline.category.projects.length &&
											!discipline.category.practices.length &&
											!discipline.category.recuperation.length ? (
												"Não tem nenhuma prova para essa categoria."
											) : (
												<>
													{!discipline.category.projects.length ? null : (
														<BoxText>
															<TitleCategory>Projetos</TitleCategory>

															{discipline.category.projects.map(
																(project, index) => (
																	<Tests key={index}>
																		data - {project.name} ({project.teacher})
																	</Tests>
																)
															)}
														</BoxText>
													)}
													{!discipline.category.practices.length ? null : (
														<BoxText>
															<TitleCategory>Práticas</TitleCategory>

															{discipline.category.practices.map(
																(pract, index) => (
																	<Tests key={index}>
																		data - {pract.name} ({pract.teacher})
																	</Tests>
																)
															)}
														</BoxText>
													)}
													{!discipline.category.recuperation.length ? null : (
														<BoxText>
															<TitleCategory>Recuperação</TitleCategory>

															{discipline.category.recuperation.map(
																(recup, index) => (
																	<Tests key={index}>
																		data - {recup.name} ({recup.teacher})
																	</Tests>
																)
															)}
														</BoxText>
													)}
												</>
											)}
										</AccordionDetails>
									</Accordion>
								))}
							</AccordionDetails>
						</Accordion>
					))}
				</>
			)}
		</MainScreen>
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
