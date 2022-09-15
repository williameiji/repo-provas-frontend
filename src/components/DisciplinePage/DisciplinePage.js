import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import RenderDiscipline from "./RenderDisciplines";
import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import urls from "../shared/urls";

export default function DisciplinePage() {
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
								{!period.disciplines.length ? (
									"Nenhuma matéria nesse período."
								) : (
									<RenderDiscipline period={period} />
								)}
							</AccordionDetails>
						</Accordion>
					))}
				</>
			)}
		</MainScreen>
	);
}
