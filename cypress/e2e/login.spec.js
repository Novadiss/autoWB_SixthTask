beforeEach (() => {
    cy.visit("/booksNode");
})

it("Нормальный вход", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
});

it("Пустой логин", () => {
  cy.login(null, "123");
  cy.get("#mail").then((elements) =>{
    expect(elements[0].checkValidity()).to.be.false
    expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
  })
});

it("Пустой пароль", () => {
  cy.login("bropet@mail.ru", null);
  cy.get("#pass").then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});

it("Создание книги", () => {
  cy.login("bropet@mail.ru", "123");
  cy.newBook("Книга", "Описание", "Автор")
  cy.contains("Books list").click();
  cy.contains("Книга").should("be.visible");
});

it.only("Добавить в фавориты", () => {
  cy.login("bropet@mail.ru", "123");
  cy.newBook("Моя Книга", "Описание", "Автор");
  cy.contains("Books list").click();
  cy.contains("Моя Книга").should("be.visible");
  cy.get("#Add to favorite").then((elements) => {
    elements[last].click
  });
  cy.contains("Favorites").click();
  cy.contains("Моя Книга").should("be.visible");
});


