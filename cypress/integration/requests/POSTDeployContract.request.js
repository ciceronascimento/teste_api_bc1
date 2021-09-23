/// <reference types="cypress" />

// const payloadAddContractZero = require('../payloads/add-contract-zero.json');
// const payloadAddContractUm = require('../payloads/add-contract-um.json');
// const payloadAddContractDois = require('../payloads/add-contract-dois.json');
// const payloadAddContractTres = require('../payloads/add-contract-tres.json');
// const payloadAddContractQuatro = require('../payloads/add-contract-quatro.json');
const data = require('../payloads/add-data.json')
// const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json')

function criarContratoComBlockchainZero(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-contract-zero']
    })
}
function criarContratoComBlockchainUm(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-contract-um']
    })
}
function criarContratoComBlockchainDois(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-contract-dois']
    })
}
function criarContratoComBlockchainTres(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-contract-tres']
    })
}
function criarContratoComBlockchainQuatro(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: data['add-contract-quatro']
    })
}
function criarContratoComTokenInvalido(){
    return cy.request({
        method: 'POST',
        url: 'create_model',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ1230e32XAi123OiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        },
        body: data['add-contract-zero']
    })
}
function criarContratoComBlockchainVazio(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "blockchain":"",
            "model":"15i2gyxb6kkr0s0lcz"
        }
    })
}
function criarContratoComModeloVazio(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {
            "blockchain":"0",
            "model":""
        }
    })
}
function criarContratoSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'deploy_contract',
        failOnStatusCode: false,
        headers:token['token-header'],
        body: {}
    })
}

export { criarContratoComBlockchainZero };
export { criarContratoComBlockchainUm };
export { criarContratoComBlockchainDois };
export { criarContratoComBlockchainTres };
export { criarContratoComBlockchainQuatro };
export { criarContratoComTokenInvalido };
export { criarContratoComBlockchainVazio };
export { criarContratoComModeloVazio };
export { criarContratoSemParemetro };

