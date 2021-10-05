/// <reference types="cypress" />

//const payloadAddToken = require('../payloads/token-header.json');
const token = require('../payloads/token.json');
const payloadReadContract = require('../payloads/add-data.json');


function retornarDocumentoDoContratato(){

    return cy.request({
        method: 'POST',
        url: 'multiple_read',
        failOnStatusCode: false,
        headers: token['token-header'],
        body: payloadReadContract['read-multi']
    })
}
// function retornarDocumentoDoContratatoComTokenInválido(){

//     return cy.request({
//         method: 'POST',
//         url: 'read_contract',
//         failOnStatusCode: false,
//         headers: {
//             "Authorization": "JWT qweyJ0eXAiOi213123JKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg0LCJrZXkiOiJiZnhhbGtyMnF3eGI4IiwiaWRfb3JnIjo2ODR9.W3xpKKIH9UQvN82AZDD5hP3bXBq-sM2y1HX0pj9s5bM"
//         },
//         body: payloadReadContract
//     })
// }
// function retornarDocumentoDoContratatoComParametrosVazios(){

//     return cy.request({
//         method: 'POST',
//         url: 'read_contract',
//         failOnStatusCode: false,
//         headers: token['token-header'],
//         body: {
//             "idContract": "",
//             "idDocument": ""
//         }
//     })
// }
// function retornarDocumentoDoContratatoSemParametros(){
//     // cy.request - client http
//     return cy.request({
//         method: 'POST',
//         url: 'read_contract',
//         failOnStatusCode: false,
//         headers: token['token-header'],
//         body: {}
//     })
// }


export { retornarDocumentoDoContratato };
// export { retornarDocumentoDoContratatoComTokenInválido };
// export { retornarDocumentoDoContratatoComParametrosVazios };
// export { retornarDocumentoDoContratatoSemParametros };