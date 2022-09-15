import RenderProjects from "./RenderProjects";
import RenderPractices from "./RenderPractices";
import RenderRecuperations from "./RenderRecuperations";

export default function RenderCategories({ teacher }) {
	return (
		<>
			{!teacher.categories.projects.length &&
			!teacher.categories.practices.length &&
			!teacher.categories.recuperation.length ? (
				"Esse professor não tem provas."
			) : (
				<>
					<RenderProjects teacher={teacher} />
					<RenderPractices teacher={teacher} />
					<RenderRecuperations teacher={teacher} />
				</>
			)}
		</>
	);
}
