import { expect, test } from "@playwright/test";

 test.describe("autenticação", () => {
  test("realiza login com sucesso e persiste os dados retornados pela API", async ({ page }) => {
    await page.route("**/auth/login", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }

      expect(route.request().postDataJSON()).toEqual({
        email: "maria@example.com",
        password: "senha-segura",
      });
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          type: "Bearer",
          token: "e2e-token",
          username: "Maria Silva",
          role: "ADMIN",
        }),
      });
    });

    await page.goto("/auth/login");
    await page.getByLabel("E-mail").fill("maria@example.com");
    await page.getByLabel("Senha").fill("senha-segura");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page).toHaveURL(/\/admin\/home$/);
    await expect.poll(() => page.evaluate(() => localStorage.getItem("token"))).toBe("e2e-token");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("username"))).toBe("Maria Silva");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("role"))).toBe("ADMIN");
  });

  test("impede o envio do login quando os campos obrigatórios estão vazios", async ({ page }) => {
    let requestCount = 0;
    await page.route("**/auth/login", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }

      requestCount += 1;
      await route.fulfill({ status: 200, contentType: "application/json", body: "{}" });
    });

    await page.goto("/auth/login");
    const email = page.getByLabel("E-mail");
    const password = page.getByLabel("Senha");

    await expect(email).toHaveAttribute("required", "");
    await expect(password).toHaveAttribute("required", "");
    expect(await email.evaluate((element: HTMLInputElement) => element.validity.valueMissing)).toBe(true);
    expect(await password.evaluate((element: HTMLInputElement) => element.validity.valueMissing)).toBe(true);

    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page).toHaveURL(/\/auth\/login$/);
    expect(requestCount).toBe(0);
  });

  test("avança do cadastro inicial para a etapa de criação de senha", async ({ page }) => {
    await page.route("**/auth/register/validate", async (route) => {
      expect(route.request().method()).toBe("POST");
      expect(route.request().postDataJSON()).toEqual({
        username: "Maria Silva",
        email: "maria@example.com",
        phone: "61999990000",
      });
      await route.fulfill({ status: 204, body: "" });
    });

    await page.goto("/auth/register");
    await page.getByLabel("Nome completo").fill("Maria Silva");
    await page.getByLabel("E-mail").fill("maria@example.com");
    await page.getByLabel("Telefone").fill("61999990000");
    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page).toHaveURL(/\/auth\/register\/password$/);
    await expect(page.getByRole("heading", { name: "Crie sua senha" })).toBeVisible();
    await expect(page.getByLabel("Senha", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Confirmar senha")).toBeVisible();
    await expect.poll(() => page.evaluate(() => sessionStorage.getItem("username"))).toBe("Maria Silva");
    await expect.poll(() => page.evaluate(() => sessionStorage.getItem("email"))).toBe("maria@example.com");
    await expect.poll(() => page.evaluate(() => sessionStorage.getItem("phone"))).toBe("61999990000");
  });
});
