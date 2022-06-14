import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
test("Should render Navbar component", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const nav = screen.getByTestId("navTestId");
  expect(nav).toBeInTheDocument();
  // screen.debug()
});
