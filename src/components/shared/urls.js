let BASE_URL;

if (process.env.REACT_APP_MODE === "DEV") {
	BASE_URL = "http://localhost:5000";
} else {
	BASE_URL = "https://repo-provas-dmq7.onrender.com";
}

const urls = {
	login: `${BASE_URL}/login`,
	signup: `${BASE_URL}/signup`,
	disciplines: `${BASE_URL}/tests/disciplines`,
	teachers: `${BASE_URL}/tests/teachers`,
	category: `${BASE_URL}/categories`,
	discipline: `${BASE_URL}/disciplines`,
	teacher: `${BASE_URL}/teachers`,
	tests: `${BASE_URL}/tests`,
	git: `${BASE_URL}/auth`,
};

export default urls;
