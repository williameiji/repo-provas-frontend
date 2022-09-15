import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle";
import GlobalStyle from "../assets/css/GlobalStyle";
import UserContext from "../components/context/UserContext";
import Login from "../components/login/Login";
import Signup from "./signup/Signup";
import DisciplinePage from "./disciplinePage/DisciplinePage";
import TeacherPage from "./teacherPage/TeacherPage";
import NewTestPage from "./newTest/NewTestsPage";

export default function App() {
	const [userInformation, setUserInformation] = useState({
		token: localStorage?.getItem("token"),
	});
	const [changeColorAndPlaceholder, setChangeColorAndPlaceholder] = useState({
		buttonDiscipline: true,
		placeholder: "Pesquise por disciplina",
	});

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
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/discipline" element={<DisciplinePage />} />
						<Route path="/teacher" element={<TeacherPage />} />
						<Route path="/newtest" element={<NewTestPage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
