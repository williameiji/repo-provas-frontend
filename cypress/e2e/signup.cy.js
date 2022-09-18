import signupFactory from "../fatories/signupFactory";

describe("Test signup", () => {
	it("Test if add new user and go back to login", async () => {
		const user = await signupFactory();
		cy.visit("http://localhost:3000");
		cy.get('[data-cy="signup"').click();
		cy.get('[data-cy="email"]').type(user.email);
		cy.get('[data-cy="password"]').type(user.password);
		cy.get('[data-cy="refPassword"]').type(user.refPassword);
		cy.get('[data-cy="submit"]').click();

		cy.url().should("equal", "http://localhost:3000/");
	});
});
