*** Settings ***
Documentation     Test suite for Todo application
Resource          ../resources/common.robot
Test Setup        Open Todo Application
Test Teardown     Close Todo Application

*** Test Cases ***
App Should Load Successfully
    Wait Until Element Is Visible    css=form
    Element Should Be Visible    css=input.add-input
    Element Should Be Visible    css=button.add-btn
    Element Should Be Visible    id=important

Add New Todo Item
    ${todo_text}=    FakerLibrary.Sentence    nb_words=3
    Add Todo Item    ${todo_text}
    Element Should Contain    css=ul.todo-list    ${todo_text}

Add Important Todo Item
    ${todo_text}=    FakerLibrary.Sentence    nb_words=3
    Add Todo Item    ${todo_text}    important=${TRUE}
    Element Should Contain    css=ul.todo-list li    ${todo_text}
    Element Should Contain    css=ul.todo-list li    !