describe("Authentication Flow", () => {
  it("allows a new user to sign up and reach dashboard", () => {
    cy.visit("/signup");
    cy.get('[data-testid="name-input"]').type("Test User");
    cy.get('[data-testid="email-input"]').type(`test${Date.now()}@example.com`);
    cy.get('[data-testid="password-input"]').type("TestPass123!");
    cy.get('[data-testid="submit-btn"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("shows error for invalid credentials on login", () => {
    cy.visit("/login");
    cy.get('[data-testid="email-input"]').type("wrong@example.com");
    cy.get('[data-testid="password-input"]').type("wrongpassword");
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("redirects unauthenticated users to login", () => {
    cy.visit("/dashboard");
    cy.url().should("include", "/login");
  });
});
