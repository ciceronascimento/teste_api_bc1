import * as POSTCreateModel from '../requests/POSTCreateModel.request';

context('POST Create Model', () => {
    it('Criar um modelo de contrato', () => {
        POSTCreateModel.criarModel().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.message).to.eq("Modelo criado com sucesso!");
            expect(response.body.result.returnCode).to.eq("success");
            expect(response.body.result["model code"]).not.be.null;
        })
    });
    it('Criar um modelo com token inválido', () => {
        POSTCreateModel.criarModelComTokenInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("TOKEN_INVALIDO");
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.message).to.eq("Preencha o cabeçalho Authorization com um token válido!");
        })
    });
    it('Criar um modelo sem parametros insuficientes', () => {
        POSTCreateModel.criarModelSemParametro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
    it('Criar um modelo com paramentros vazios', () => {
        POSTCreateModel.gerarTokenComParametrosVazios().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });

    it('Criar um modelo com campos duplicados', () => {
        POSTCreateModel.criarModelCamposDuplicados().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPOS_DUPLICADOS");
            // expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });

    it('Criar um modelo com atributos na ordem errada', () => {
        POSTCreateModel.criarModelAtributosOrdemErrada().should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.result.code).to.eq("CAMPOS_INCONSISTENTES");
            expect(response.body.result.message).to.eq("Os primeiros elementos do modelo devem ser ‘idInternal;hashDoc’, respectivamente.");
        })
    });
});

// export { criarModel };
// export { criarModelComTokenInvalido };
// export { criarModelSemParametro };
// export { gerarTokenComParametrosVazios };
// export { criarModelCamposDuplicados };
// export { criarModelAtributosOrdemErrada };

