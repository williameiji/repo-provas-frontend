import { useState, useContext, useEffect } from "react";
import axios from "axios";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import urls from "../shared/urls";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RenderCategories from "./RenderCategories";

export default function TeacherPage() {
	const [teacherData, setTeacherData] = useState(null);
	const { userInformation, setChangeColorAndPlaceholder } =
		useContext(UserContext);

	useEffect(() => {
		setChangeColorAndPlaceholder({
			buttonTeacher: true,
			placeholder: "Pesquise por pessoa instrutora",
		});

		const config = {
			headers: {
				Authorization: `Bearer ${userInformation.data}`,
			},
		};
		async function getDisciplineData() {
			try {
				const data = await axios.get(urls.teachers, config);
				setTeacherData(data);
			} catch (error) {
				console.log(error);
			}
		}
		getDisciplineData();
	}, []);

	return (
		<MainScreen>
			{!teacherData
				? "aguarde..."
				: teacherData.data.map((teacher, index) => (
						<Accordion key={index}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography fontWeight={700}>{teacher.teacher}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<RenderCategories teacher={teacher} />
							</AccordionDetails>
						</Accordion>
				  ))}
		</MainScreen>
	);
}
