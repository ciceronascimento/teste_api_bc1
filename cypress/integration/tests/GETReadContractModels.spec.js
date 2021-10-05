import * as ReadContract from '../requests/GETReadContractModels.request';
const data = require('../payloads/add-data.json')

describe('GET Read Contract Models *****', () => {
    it('Listar documento criado em um contrato', () => {
        ReadContract.retornarDocumentoDoContrato().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.result.blockchain).to.equal("0");
            expect(response.body.result.result.hashDoc).to.equal(data['add-doc'].value[1]);
            expect(response.body.result.result.idAuthor).to.equal(data['add-doc'].value[3]);
            expect(response.body.result.result.idInternal).to.equal(data['add-doc'].value[0]);
            expect(response.body.result.result.idObra).to.equal(data['add-doc'].value[2]);
            expect(response.body.result.result.teste2).to.equal(data['add-doc'].value[5]);
            expect(response.body.result.result.teste1).to.equal(data['add-doc'].value[4]);
            expect(response.body.result.returnCode).to.equal("success");
        })
    });

    it('Listar documento de um contrato com token inválido', () => {
        ReadContract.retornarDocumentoDoContratatoComTokenInválido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");
        })
    });
    it('Criar um modelo sem parametros insuficientes', () => {
        ReadContract.retornarDocumentoDoContratatoComParametrosVazios().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
    it('Criar um modelo com paramentros vazios', () => {
        ReadContract.retornarDocumentoDoContratatoSemParametros().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });

});