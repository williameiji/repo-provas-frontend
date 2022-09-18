import loginFactory from "../fatories/loginFactory";

describe("Test login", () => {
	it("Test if login with correct data", async () => {
		const user = await loginFactory();
		cy.visit("http://localhost:3000");
		cy.get('[data-cy="email"]').type(user.email);
		cy.get('[data-cy="password"]').type(user.password);
		cy.get('[data-cy="submit"]').click();

		cy.url().should("equal", "http://localhost:3000/discipline");
	});
});
