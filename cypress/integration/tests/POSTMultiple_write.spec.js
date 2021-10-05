import * as POSTMultiple_Write from '../requests/POSTMultiple_write.request';

context('POST Multiple Write', () => {
    it('Criar um documento para um contrato', () => {
        POSTMultiple_Write.criarDocumento().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.returnCode).to.eq("success");
            expect(response.body.result.blockNumber).not.be.null;
            expect(response.body.result.blockchain).to.eq("0");
            expect(response.body.result.idDocument).not.be.null;
            expect(response.body.result.txId).not.be.null;
        })
    });
    it('Criar um documento para um contrato com token inválido', () => {
        POSTMultiple_Write.criarDocumentoComTokenInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");
        })
    });
    it('Criar um documento para um contrato com parametros vazio', () => {
        POSTMultiple_Write.criarDocumentoComParemetrosVazios().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.returnCode).to.eq("failure");
        })
    });
    it('Criar um documento para um contrato sem parametros', () => {
        POSTMultiple_Write.criarDocumentoSemParemetrosVazios().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.returnCode).to.eq("failure");
        })
    }); 

    it('Criar um documento com atributos insuficientes', () => {
        POSTMultiple_Write.criarDocumentoAtributosInsuficientes().should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.message).to.eq("O vetor value possui uma quantidade inconsistente de atributos");
        })
    });
    
    it('Criar um documento com atributos excedentes', () => {
        POSTMultiple_Write.criarDocumentoAtributosExcedentes().should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.message).to.eq("O vetor value possui uma quantidade inconsistente de atributos");
        })
    });
});
