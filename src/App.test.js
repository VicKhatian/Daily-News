import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import Footer from "./components/Footer";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("App renders to screen", () => {
  render(<Footer />);
  const response = screen.getByTestId("Footer");
  expect(response).toBeInTheDocument();
});
