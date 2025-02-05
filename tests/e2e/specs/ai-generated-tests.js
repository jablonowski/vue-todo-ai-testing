module.exports = {
    'Add new todo and check if it appears on the list': function (browser) {
        browser
            .url('http://localhost:8080') // Adjust the URL to your local server
            .waitForElementVisible('#app', 1000)
            .setValue('#new-todo', 'send an email to mom')
            .click('#add-todo')
            .waitForElementVisible('#todo-list', 1000)
            .assert.containsText('#todo-list', 'send an email to mom')
            .end();
    },
};
module.exports['Add multiple todos and check the count'] = function (browser) {
    browser
        .url('http://localhost:8080') // Adjust the URL to your local server
        .waitForElementVisible('#app', 1000)
        .setValue('#new-todo', 'test1')
        .click('#add-todo')
        .setValue('#new-todo', 'test2')
        .click('#add-todo')
        .setValue('#new-todo', 'test3')
        .click('#add-todo')
        .setValue('#new-todo', 'test4')
        .click('#add-todo')
        .waitForElementVisible('#todo-list', 1000)
        .elements('css selector', '#todo-list li', function (result) {
            this.assert.equal(result.value.length, 4, 'There are 4 items in the todo list');
        })
        .end();
};

module.exports['Add two todos, remove the first, and check the list'] = function (browser) {
    browser
        .url('http://localhost:8080') // Adjust the URL to your local server
        .waitForElementVisible('#app', 1000)
        .setValue('#new-todo', 'todo1')
        .click('#add-todo')
        .setValue('#new-todo', 'todo2')
        .click('#add-todo')
        .waitForElementVisible('#todo-list', 1000)
        .elements('css selector', '#todo-list li', function (result) {
            this.assert.equal(result.value.length, 2, 'There are 2 items in the todo list');
        })
        .click('#todo-list li:first-child .remove-btn')
        .waitForElementVisible('#todo-list', 1000)
        .elements('css selector', '#todo-list li', function (result) {
            this.assert.equal(result.value.length, 1, 'There is 1 item in the todo list after removal');
        })
        .assert.containsText('#todo-list', 'todo2')
        .end();
};