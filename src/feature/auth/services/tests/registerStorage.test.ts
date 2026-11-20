import { beforeEach, describe, expect, it } from "vitest";
import { registerStorage } from "../registerStorage";

describe("registerStorage", () => {
  beforeEach(() => sessionStorage.clear());

  it("armazena, disponibiliza e remove os dados temporários do cadastro", () => {
    registerStorage.save("Maria Silva", "maria@example.com", "61999990000");

    expect(registerStorage.getUsername()).toBe("Maria Silva");
    expect(registerStorage.getEmail()).toBe("maria@example.com");
    expect(registerStorage.getPhone()).toBe("61999990000");

    registerStorage.clear();

    expect(registerStorage.getUsername()).toBeNull();
    expect(registerStorage.getEmail()).toBeNull();
    expect(registerStorage.getPhone()).toBeNull();
  });
});
