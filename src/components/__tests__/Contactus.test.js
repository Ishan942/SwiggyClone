const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load heading inside contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
