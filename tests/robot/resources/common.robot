*** Settings ***
Documentation     Common resources for Todo app testing
Library           SeleniumLibrary
Library           FakerLibrary
Library           Collections

*** Variables ***
${BROWSER}        chrome
${URL}            http://localhost:8080/ 
${TIMEOUT}        10s

*** Keywords ***
Open Todo Application
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${options}    add_argument    --no-sandbox
    Call Method    ${options}    add_argument    --headless
    Call Method    ${options}    add_argument    --disable-dev-shm-usage
    Create Webdriver    Chrome    options=${options}
    Set Window Size    1920    1080
    Set Selenium Timeout    ${TIMEOUT}
    Go To    ${URL}
    Wait Until Element Is Visible    id=app    ${TIMEOUT}

Set Chrome Binary Location
    [Arguments]    ${options}    ${binary_path}
    ${options.binary_location}=    Set Variable    ${binary_path}

Close Todo Application
    Close All Browsers

Add Todo Item
    [Arguments]    ${todo_text}    ${important}=${FALSE}
    Input Text    css=input.add-input    ${todo_text}
    Run Keyword If    ${important}    Click Element    id=important
    Click Button    css=button.add-btn