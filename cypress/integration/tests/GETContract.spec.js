import * as GETContracts from '../requests/GETContracts.request';

describe('GET Contracts', () => {
    it('Listar todos os modelos de uma organização com modelos criados', () => {
        GETContracts.retornarContrato().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.results).to.be.not.null;
        })
    });
    it('Listar todos os modelos de uma organização com tokens inválidos', () => {
        GETContracts.retornarContratoComTokenInválido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");          
        })
    });
});