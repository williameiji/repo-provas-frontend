import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle";
import GlobalStyle from "../assets/css/GlobalStyle";
import UserContext from "../components/context/UserContext";
import DisciplinePage from "./disciplinePage/DisciplinePage";
import TeacherPage from "./teacherPage/TeacherPage";
import NewTestPage from "./newTest/NewTestsPage";
import FormsLogin from "./login/FormsLogin";
import FormsSignup from "./signup/FormsSignup";

export default function App() {
	const [userInformation, setUserInformation] = useState({
		token: localStorage?.getItem("token"),
	});
	const [changeColorAndPlaceholder, setChangeColorAndPlaceholder] = useState({
		buttonDiscipline: true,
		placeholder: "Pesquise por disciplina",
	});
	const [pageTitle, setPageTitle] = useState("Login");

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider
				value={{
					setUserInformation,
					userInformation,
					setChangeColorAndPlaceholder,
					changeColorAndPlaceholder,
					pageTitle,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<FormsLogin pageTitle={pageTitle} setPageTitle={setPageTitle} />
							}
						/>
						<Route
							path="/signup"
							element={
								<FormsSignup
									pageTitle={pageTitle}
									setPageTitle={setPageTitle}
								/>
							}
						/>
						<Route path="/discipline" element={<DisciplinePage />} />
						<Route path="/teacher" element={<TeacherPage />} />
						<Route path="/newtest" element={<NewTestPage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
