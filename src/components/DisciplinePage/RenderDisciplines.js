import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import RenderProjects from "./RenderProjects";
import RenderPractices from "./RenderPractices";
import RenderRecuperations from "./RenderRecuperations";

export default function RenderDiscipline({ period }) {
	return (
		<>
			{period.disciplines.map((discipline, index) => (
				<Accordion key={index}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography fontWeight={700}>{discipline.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{!discipline.category.projects.length &&
						!discipline.category.practices.length &&
						!discipline.category.recuperation.length ? (
							"Não tem nenhuma prova para essa categoria."
						) : (
							<>
								<RenderProjects discipline={discipline} />
								<RenderPractices discipline={discipline} />
								<RenderRecuperations discipline={discipline} />
							</>
						)}
					</AccordionDetails>
				</Accordion>
			))}
		</>
	);
}
