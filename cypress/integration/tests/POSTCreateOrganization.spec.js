import * as POSTCreateOrg from '../requests/POSTCreateOrganization.request';

context('POST Create Organization', () => {
    it('Adicionar nova organização', () => {
        POSTCreateOrg.addOrganization().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.message).to.eq("Organização criada com sucesso!");
            expect(response.body.result.orgKey).not.null;
            expect(response.body.result.returnCode).to.eq("success");
        })
    });
    it('Adicionar nova organização sem pelo menos um parametro', () => {
        POSTCreateOrg.addOrganizationSemParemetro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });
    it('Adicionar nova organização com parametro vazio', () => {
        POSTCreateOrg.addOrganizationComParametroVazio().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.orgKey).to.be.not.null;
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });
});
