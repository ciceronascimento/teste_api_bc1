/// <reference types="cypress" />

// const payloadAddContract = require('../payloads/add-doc.json');
const data = require('../payloads/add-data.json')
// const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json');

function criarDocumento(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-doc']
    })
}

function criarDocumentoComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0e31232XAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: data['add-doc']
    })
}

function criarDocumentoComParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "idContract": "",
            "value" : [""]
        }
    })
}

function criarDocumentoSemParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'write_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {}
    })
}

export { criarDocumento };
export { criarDocumentoComTokenInvalido };
export { criarDocumentoComParemetrosVazios };
export { criarDocumentoSemParemetrosVazios };
