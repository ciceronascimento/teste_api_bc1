import * as GETModels from '../requests/GETModels.request';

describe('GET Models', () => {
    it('Listar todos os modelos de uma organização com modelos criados', () => {
        GETModels.retornarModelo().should((response) => {
            /* cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body) */
            expect(response.status).to.equal(200);
            expect(response.body.results).to.be.not.null;
        })
    });
    it('Listar todos os modelos de uma organização com tokens inválidos', () => {
        GETModels.retornarModeloComTokenInválido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");          
        })
    });
});