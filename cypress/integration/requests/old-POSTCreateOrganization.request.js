/// <reference types="cypress" />

//const payloadAddOrg = require('../payloads/add-organization.json');
const data = require('../payloads/add-data.json');

function addOrganization(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: data['add-organization']
    })
}
function addOrganizationSemParemetro(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
    })
}
function addOrganizationComParametroVazio(){
    return cy.request({
        method: 'POST',
        url: 'create_organization',
        failOnStatusCode: false,
        body: {
            "name": "Org Teste",
          "address": ""
        }
    })
}


export { addOrganization };
export { addOrganizationSemParemetro };
export { addOrganizationComParametroVazio };