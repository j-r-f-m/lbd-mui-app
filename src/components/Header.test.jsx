import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header", () => {
  it("renders the header component with the correct title", () => {
    render(<Header />);
    const titleElement = screen.getByText("Bemessungshilfe");
    expect(titleElement).toBeInTheDocument();
  });
});
