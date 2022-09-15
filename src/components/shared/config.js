export default function config(userInformation) {
	const config = {
		headers: {
			Authorization: `Bearer ${userInformation.token}`,
		},
	};

	return config;
}
