beforeEach(() => {
  cy.visit("/booksNode");
});

it("Создание книги", () => {
  cy.login("bropet@mail.ru", "123");
  cy.newBook("Книга", "Описание", "Автор");
  cy.contains("Books list").click();
  cy.contains("Книга").should("be.visible");
});

it("Добавить в фавориты", () => {
  cy.login("bropet@mail.ru", "123");
  cy.newBook("Книга фаворит", "Описание", "Автор");
  cy.contains("Books list").click();
  cy.contains("Книга фаворит").should("be.visible");
  cy.get('[class="btn btn-success"]').last().click();
  cy.contains("Favorites").click();
  cy.contains("Книга фаворит").should("be.visible");
});

it.only("Убрать из фаворитов", () => {
  cy.login("bropet@mail.ru", "123");
  cy.newBook("Книгу удалить из фаворитов", "Описание", "Автор");
  cy.contains("Books list").click();
  cy.contains("Книгу удалить из фаворитов").should("be.visible");
  cy.get('[class="btn btn-success"]').last().click();
  cy.contains("Favorites").click();
  cy.contains("Книгу удалить из фаворитов").should("be.visible");
  cy.get('[class="btn btn-secondary"]').last().click();
  cy.contains("Книгу удалить из фаворитов").should("not.be.visible");
});