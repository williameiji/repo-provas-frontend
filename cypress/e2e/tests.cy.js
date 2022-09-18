import loginFactory from "../fatories/loginFactory";

describe("Test tests", () => {
	it("Test if add new test", async () => {
		const user = await loginFactory();
		cy.visit("http://localhost:3000");
		cy.get('[data-cy="email"]').type(user.email);
		cy.get('[data-cy="password"]').type(user.password);
		cy.get('[data-cy="submit"]').click();

		cy.get('[data-cy="test"]').click();
		cy.get('[data-cy="name"]').type("Teste cypress");
		cy.get("input[type=file]").selectFile("/home/eiji/Downloads/teste.pdf");

		cy.get('[data-cy="categories"]').click();
		cy.contains("Projeto").then((option) => {
			option[0].click();
		});
		cy.get('[data-cy="disciplines"]').click();
		cy.contains("HTML e CSS").then((option) => {
			option[0].click();
		});
		cy.get('[data-cy="teachers"]').click();
		cy.contains("Diego Pinho").then((option) => {
			option[0].click();
		});
		cy.get('[data-cy="submit"]').click();

		cy.url().should("eq", "http://localhost:3000/discipline");
	});
});
