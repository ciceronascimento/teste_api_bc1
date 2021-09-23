import * as PostToken from '../requests/POSTToken.request';

context('POST Token', () => {
    it('Criar um token de acessos', () => {
        PostToken.gerarToken().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.returnCode).to.eq("success");
            expect(response.body.tokenAccess).not.be.null;
        })
    });
    it('Criar um token de acessos com orgKey inválido', () => {
        PostToken.gerarTokenComOrgKeyInvalido().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CODIGO_INVÁLIDO");
            expect(response.body.result.message).to.eq("Por favor digite um código válido!");
        })
    });
    it('Criar um token de acessos com orgKey vazio', () => {
        PostToken.gerarTokenComOrgKeyVazio().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
    it('Criar um token de acessos sem parametro', () => {
        PostToken.gerarTokenSemParametro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
        })
    });
});
