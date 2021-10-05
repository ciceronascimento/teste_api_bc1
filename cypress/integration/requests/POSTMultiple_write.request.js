/// <reference types="cypress" />

// const payloadAddContract = require('../payloads/add-doc.json');
const data = require('../payloads/add-data.json')
// const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json');

function criarDocumento(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-doc-multi']
    })
}

function criarDocumentoComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0e31232XAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: data['add-doc-multi']
    })
}

function criarDocumentoComParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "idContract": "",
            "valueAttributes": [
              "",
              "",
              "",
              ""
            ],
            "notFaultTolerance": true
        }
    })
}

function criarDocumentoSemParemetrosVazios(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {}
    })
}


function criarDocumentoAtributosInsuficientes(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "idContract": "extnc78cku5dj89r;extnc78cku5djzoh",
            "valueAttributes": [
              "idInternalExample"
            ],
            "notFaultTolerance": true
        }
    })
}


function criarDocumentoAtributosExcedentes(){
    return cy.request({
        method: 'POST',
        url: 'multiple_write',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "idContract": "extnc78cku5dj89r;extnc78cku5djzoh",
            "valueAttributes": [
              "idInternalExample",
              "hashDocExample",
              "titleExample",
              "dataExample",
              "dataExample2",
              "dataExample3"
            ],
            "notFaultTolerance": true
        }
    })
}



// "add-doc-mult": {
//     "idContract": "3b6car3qkvku7mk7rr",
//     "value": [
//       "title01",
//       "sector01",
//       "place01",
//       "hashDocument01",
//       10000000
//     ]
// },




export { criarDocumento };
export { criarDocumentoComTokenInvalido };
export { criarDocumentoComParemetrosVazios };
export { criarDocumentoSemParemetrosVazios };
export { criarDocumentoAtributosInsuficientes };
export { criarDocumentoAtributosExcedentes };