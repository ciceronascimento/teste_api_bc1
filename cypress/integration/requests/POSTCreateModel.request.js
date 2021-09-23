/// <reference types="cypress" />

//const payloadAddModel = require('../payloads/add-model.json');
const data = require('../payloads/add-data.json')
//const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json');

function criarModel(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-model']
    })
}
function criarModelComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0e32XAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: data['add-model']
    })
}
function criarModelSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: token['token-header'],
        body: {}
    })
}
function gerarTokenComParametrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'token',
        failOnStatusCode: false,
        headers: token['token-header'],
        body: {
            "description": "",
            "attributes": ""
        }
    })
}

export { criarModel };
export { criarModelComTokenInvalido };
export { criarModelSemParemetro };
export { gerarTokenComParametrosVazios };
