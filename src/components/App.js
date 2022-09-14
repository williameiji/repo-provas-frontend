import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../assets/css/GlobalResetStyle";
import GlobalStyle from "../assets/css/GlobalStyle";
import UserContext from "../components/context/UserContext";
import Login from "../components/login/Login";
import Signup from "./signup/Signup";
import MainScreen from "./mainScreen/MainScreen";

export default function App() {
	const [userInformation, setUserInformation] = useState(null);

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider value={{ setUserInformation, userInformation }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/main" element={<MainScreen />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
