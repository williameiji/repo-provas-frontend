import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

import RenderDiscipline from "./RenderDisciplines";
import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import urls from "../shared/urls";
import config from "../shared/config";
import Loading from "../shared/Loading";
import RenderPractices from "./RenderPractices";
import RenderProjects from "./RenderProjects";
import RenderRecuperations from "./RenderRecuperations";

export default function DisciplinePage() {
	const [disciplineData, setDisciplineData] = useState(null);
	const {
		userInformation,
		setChangeColorAndPlaceholder,
		disciplineFilteredData,
	} = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		setChangeColorAndPlaceholder({
			buttonDiscipline: true,
			placeholder: "Pesquise por disciplina",
		});

		async function getDisciplineData() {
			try {
				const data = await axios.get(urls.disciplines, config(userInformation));
				setDisciplineData(data);
			} catch (error) {
				if (error.response.status === 401) {
					alert("Token inexistente/inválido, entre novamente!");
					navigate("/");
				}
				console.log(error);
			}
		}
		getDisciplineData();
	}, []);

	return (
		<MainScreen>
			{!disciplineData ? (
				<Loading />
			) : disciplineFilteredData ? (
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography fontWeight={700}>
							{disciplineFilteredData.name}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{!disciplineFilteredData.category.projects.length &&
						!disciplineFilteredData.category.practices.length &&
						!disciplineFilteredData.category.recuperation.length ? (
							"Não tem nenhuma prova para essa categoria."
						) : (
							<>
								<RenderProjects discipline={disciplineFilteredData} />
								<RenderPractices discipline={disciplineFilteredData} />
								<RenderRecuperations discipline={disciplineFilteredData} />
							</>
						)}
					</AccordionDetails>
				</Accordion>
			) : (
				disciplineData.data.map((period, index) => (
					<Accordion key={index}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography fontWeight={700}>{period.period} Período</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{!period.disciplines.length ? (
								"Nenhuma matéria nesse período."
							) : (
								<RenderDiscipline period={period} />
							)}
						</AccordionDetails>
					</Accordion>
				))
			)}
		</MainScreen>
	);
}
