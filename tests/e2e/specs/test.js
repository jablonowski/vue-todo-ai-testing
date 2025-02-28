module.exports = {
  'App has started': function (browser) {
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000)
      .assert.visible('form')
      .assert.visible('input.add-input')
      .assert.visible('button.add-btn')
      .assert.visible('ul.todo-list')
      .end();
  },
  'Add a new todo': function (browser) {
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000)
      .setValue('input.add-input', 'Test new todo')
      .click('button.add-btn')
      .assert.containsText('ul.todo-list', 'Test new todo')
      .end();
  },
  'Add several todos': function (browser) {
    const todos = ['First todo', 'Second todo', 'Third todo'];
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000);

    todos.forEach(todo => {
      browser
        .setValue('input.add-input', todo)
        .click('button.add-btn')
        .assert.containsText('ul.todo-list', todo);
    });

    browser.end();
  },
  'Remove a todo': function (browser) {
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000)
      .setValue('input.add-input', 'Todo to be removed')
      .click('button.add-btn')
      .assert.containsText('ul.todo-list', 'Todo to be removed')
      .click('ul.todo-list li:last-child button.remove-btn') // Adjust the selector based on your remove button
      .assert.not.containsText('ul.todo-list', 'Todo to be removed')
      .end();
  },
  'Add and remove several todos': function (browser) {
    const todos = ['First todo', 'Second todo', 'Third todo'];
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000);

    // Add todos
    todos.forEach(todo => {
      browser
        .setValue('input.add-input', todo)
        .click('button.add-btn')
        .assert.containsText('ul.todo-list', todo);
    });

    // Remove todos
    todos.forEach(() => {
      browser
        .click('ul.todo-list li:last-child button.remove-btn') // Adjust the selector based on your remove button
        .pause(500) // Pause to ensure the DOM updates
    });

    // Verify all todos are removed
    browser.assert.elementNotPresent('ul.todo-list li')
      .end();
  },
  'Check important checkbox': function (browser) {
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000)
      .setValue('input.add-input', 'Important todo')
      .click('input#important')
      .click('button.add-btn')
      .assert.containsText('ul.todo-list', 'Important todo')
      .assert.containsText('ul.todo-list', '!')
      .end();
  },
  'Check empty todo cannot be added': function (browser) {
    browser
      .url('http://localhost:8080') // Adjust the URL if your app runs on a different port
      .waitForElementVisible('body', 1000)
      .click('button.add-btn')
      .assert.elementCount('ul.todo-list li', 0)
      .end();
  }
};


