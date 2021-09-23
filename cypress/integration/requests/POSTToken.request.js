/// <reference types="cypress" />

//const payloadAddTokenAcess = require('../payloads/token-acesso.json');
const token = require('../payloads/token.json');

function gerarToken(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: token['token-acesso']
    })
}
function gerarTokenComOrgKeyInvalido(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            "orgKey": "qopwkeqwpkoe"
        }
    })
}
function gerarTokenComOrgKeyVazio(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            "orgKey": ""
        }
    })
}
function gerarTokenSemParametro(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        body: {
            
        }
    })
}

export { gerarToken };
export { gerarTokenComOrgKeyInvalido };
export { gerarTokenComOrgKeyVazio };
export { gerarTokenSemParametro };
