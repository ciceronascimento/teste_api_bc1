/// <reference types="cypress" />

//const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json');

function retornarContrato(){
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'get_contracts',
        failOnStatusCode: false,
        headers: token['token-header']
    })
}
function retornarContratoComTokenInválido(){
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'get_contracts',
        failOnStatusCode: false,
        headers: {
            "Authorization": "JWT eyJ0eXAiOi213123JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
        }
    })
}

export { retornarContrato };
export { retornarContratoComTokenInválido };