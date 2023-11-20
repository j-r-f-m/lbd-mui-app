import { render, screen } from "@testing-library/react";
import { AlGeneralInfo } from "./AlGeneralInfo";
import { describe, it, expect } from "vitest";
import { MathJaxContext } from "better-react-mathjax";

describe("AlGeneralInfo", () => {
  it("renders without error", () => {
    render(
      <MathJaxContext>
        <AlGeneralInfo />
      </MathJaxContext>
    );
    const accordionElement = screen.getByTestId("berechnungsansatz");
    expect(accordionElement).toBeInTheDocument();
  });
});
