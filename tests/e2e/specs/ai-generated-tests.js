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
    }
};