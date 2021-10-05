/// <reference types="cypress" />

//const payloadAddOrg = require('../payloads/add-organization.json');
const data = require('../payloads/add-data.json');

function addOrganizacao(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: data['add-organization']
    })
}

function addOrganizacaoJaCadastrada(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: data['add-organization']
    })
}

function addOrganizacaoSemParametro(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
    })
}
function addOrganizacaoComParametroVazio(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: {
            "nameOrg": "",
            "emailOrg": "",
            "productNameOrg": "",
            "nameResponsible": "",
            "cpfResponsible": "",
            "cnpjOrg": ""
        }
    })  
}
function addOrganizacaoFormatacaoErrada(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: {
            "nameOrg": "Testes uahuahhuah",
            "emailOrg": "rafaelpf9gmailcom",
            "productNameOrg": "uahuahuha",
            "nameResponsible": "auhauhuaha",
            "cpfResponsible": "697475764",
            "cnpjOrg": "9976500117"
        }
    })
}


export { addOrganizacao };
export { addOrganizacaoFormatacaoErrada };
export { addOrganizacaoSemParametro };
export { addOrganizacaoComParametroVazio };
export { addOrganizacaoJaCadastrada };
