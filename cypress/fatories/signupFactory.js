import { faker } from "@faker-js/faker";

export default async function signupFactory() {
	return {
		email: faker.internet.email(),
		password: 1234,
		refPassword: 1234,
	};
}
