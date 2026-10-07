import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RequestCallForm from "@/components/RequestCallForm";

const fill = () => {
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: "Jo Bloggs" } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: "07387777202" } });
  fireEvent.click(screen.getByRole("button", { name: /request a call back/i }));
};

describe("RequestCallForm", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it("tells the visitor to call if the form can't send", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    render(<MemoryRouter><RequestCallForm /></MemoryRouter>);
    fill();
    expect(await screen.findByRole("alert")).toHaveTextContent("07387 777202");
  });
});
