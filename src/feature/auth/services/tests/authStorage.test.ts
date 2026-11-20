import { beforeEach, describe, expect, it } from "vitest";
import { authStorage } from "../authStorage";

describe("authStorage", () => {
  beforeEach(() => localStorage.clear());

  it("armazena, disponibiliza e remove os dados de autenticação", () => {
    authStorage.save("token-123", "Maria Silva", "ADMIN");

    expect(authStorage.getToken()).toBe("token-123");
    expect(authStorage.getUsername()).toBe("Maria Silva");
    expect(authStorage.getRole()).toBe("ADMIN");

    authStorage.clear();

    expect(authStorage.getToken()).toBeNull();
    expect(authStorage.getUsername()).toBeNull();
    expect(authStorage.getRole()).toBeNull();
  });
});
