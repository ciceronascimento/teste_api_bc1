import * as ReadContract from '../requests/GETReadContract.request';

describe('GET Read Contract', () => {
    it('Listar documento criado em um contrato', () => {
        ReadContract.retornarDocumentoDoContratato().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.result.blockchain).to.equal("0");
            expect(response.body.result.result["idAutor,hashDaMusica"]).to.equal("Texto gerado automaticamente para o documento criado");
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