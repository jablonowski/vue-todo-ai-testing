module.exports = {
  'App root element rendering': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 1000)
      .assert.visible('#app')
      .assert.elementPresent('#app')
      .end();
  },

  'App form rendering': browser => {
    browser
      // Navigate to the app
      .url('http://localhost:8080')
      
      // Wait for the form to be visible
      .waitForElementVisible('form', 1000)
      
      // Check if all form elements are present and visible
      .assert.visible('input.add-input')
      .assert.attributeContains('input.add-input', 'placeholder', 'Add a todo')
      .assert.visible('button.add-btn')
      .assert.containsText('button.add-btn', 'Add')
      .assert.visible('input#important')
      .assert.visible('label[for="important"]')
      .assert.containsText('label[for="important"]', 'Important')
      
      // Check if input is empty by default
      .getValue('input.add-input', function(result) {
        this.assert.equal(result.value, '')
      })
      
      // Check if important checkbox is unchecked by default
      .verify.not.selected('input#important')
      .end();
  },

  'Add new todo': browser => {
    const testTodo = 'Test todo item';
    
    browser
      // Navigate to the app
      .url('http://localhost:8080')
      
      // Wait for the form to be visible
      .waitForElementVisible('form', 1000)
      
      // Add new item
      .setValue('input.add-input', testTodo)
      .click('button.add-btn')
      
      // Verify item was added
      .waitForElementVisible('ul.todo-list li')
      .assert.elementCount('ul.todo-list li', 1)
      .assert.containsText('ul.todo-list li', testTodo)
      
      // Verify input was cleared
      .getValue('input.add-input', function(result) {
        this.assert.equal(result.value, '')
      })
      .end();
  },


  'Add important todo': browser => {
    const importantTodo = 'Important task';
    
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('form', 1000)
      .setValue('input.add-input', importantTodo)
      .click('input#important')
      .click('button.add-btn')
      .waitForElementVisible('ul.todo-list li')
      .assert.containsText('ul.todo-list li', importantTodo)
      .assert.containsText('ul.todo-list li', '!')
      .end();
  },

  'Form resets after adding todo': browser => {
    const testTodo = 'Test reset';
    
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('form', 1000)
      .setValue('input.add-input', testTodo)
      .click('input#important')
      .click('button.add-btn')
      
      // Check if form was reset
      .getValue('input.add-input', function(result) {
        this.assert.equal(result.value, '');
      })
      .verify.not.selected('input#important')
      .end();
  },
};