
import Home from "../../pages";

describe("Sign Up Form", () => {
  beforeEach(() => {
    cy.mount(<Home/>);

  });
  it("should display the title, text and Shop Now button", () => {
    cy.get("[data-cy=title]").should("have.text", "Wear better, look better.");
    cy.get(".text").should(
      "have.text",
      "Don't you just love being in apparel?"
    );
    cy.get("a")
      .should("have.text", "Shop Now")
      .and("have.attr", "href", "/collections");
  });
});