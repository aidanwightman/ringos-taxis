import { describe, it, expect } from "vitest";
import { requestCallSchema } from "@/lib/requestCallSchema";

const base = { name: "Jo Bloggs", email: "", phone: "", area: "", message: "", botcheck: "" };

describe("request a call form validation", () => {
  it("accepts a UK mobile number on its own", () => {
    expect(requestCallSchema.safeParse({ ...base, phone: "07387 777202" }).success).toBe(true);
  });

  it("accepts an email on its own", () => {
    expect(requestCallSchema.safeParse({ ...base, email: "jo@example.com" }).success).toBe(true);
  });

  it("needs either a phone number or an email", () => {
    expect(requestCallSchema.safeParse(base).success).toBe(false);
  });

  it("rejects a phone number that isn't UK format", () => {
    expect(requestCallSchema.safeParse({ ...base, phone: "12345" }).success).toBe(false);
  });

  it("needs a name", () => {
    expect(requestCallSchema.safeParse({ ...base, name: "", phone: "07387777202" }).success).toBe(false);
  });
});
