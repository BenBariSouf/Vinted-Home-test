describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /Vinted Home Test. Made with ❤️ by/i,
		}).should("exist");
	});
});