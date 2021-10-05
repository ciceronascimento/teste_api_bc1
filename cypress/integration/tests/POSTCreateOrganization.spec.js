import * as POSTCreateOrganization from '../requests/POSTCreateOrganization.request';

context('POST Create Organization', () => {

    // after('Apagar dados no banco', () => {
    //     // const idOrg = 534
    //     // const sqlDeleteAcesso = " DELETE from accesses WHERE id_org=" + "'" + idOrg + "'"
    //     // const sqlDeleteOrg = " DELETE from organizations WHERE cpfResponsible='176.172.812-18'"
    //     // // cy.sqlServer(sqlUse+sqlDeleteAcesso)
    //     // const dbName = 'dbRegistrar'
    //     // const query = sqlDeleteAcesso
    //     // // const query2 = sqlDeleteOrg

    //     // cy.task('queryDatabase', { dbName, query} ).then(()=> {
    //     //     const query = sqlDeleteOrg
    //     //     cy.task('queryDatabase', { dbName, query} )
    //     // });


    //     //==================DEU BOMM======================
      
    //     const sqlDeleteAcesso = "DELETE from accesses WHERE id = (SELECT MAX(id))"
    //     const sqlDeleteOrg = "DELETE from organizations WHERE cpfResponsible='176.172.812-18'"
       
    //     // cy.sqlServer(sqlUse+sqlDeleteAcesso)
    //     const dbName = 'dbRegistrar'
    //     const query = sqlDeleteAcesso
    //     // const query2 = sqlDeleteOrg

    //     cy.task('queryDatabase', { dbName, query} ).then(()=> {
    //         const query = sqlDeleteOrg
    //         cy.task('queryDatabase', { dbName, query} )
    //     })
    // });

    it('Adicionar nova organização', () => {
        POSTCreateOrganization.addOrganizacao().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.result.message).to.eq("Organização criada com sucesso!");
            expect(response.body.result.orgKey).not.null;
            expect(response.body.result.returnCode).to.eq("success");
        })
    });

    it('Adicionar nova organização sem pelo menos um parametro', () => {
        POSTCreateOrganization.addOrganizacaoSemParametro().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });
    it('Adicionar nova organização com parametro vazio', () => {
        POSTCreateOrganization.addOrganizacaoComParametroVazio().should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.result.message).to.eq("Preencha todos os campos!");
            expect(response.body.result.orgKey).to.be.not.null;
            expect(response.body.result.returnCode).to.eq("failure");
            expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });

    it('Cadastrar organização ja cadastrada anteriormente', () => {
        POSTCreateOrganization.addOrganizacaoJaCadastrada().should((response) => {
            expect(response.body.response.message).to.eq("Organização já foi cadastrada.");
            expect(response.status).to.eq(400);
            expect(response.body.response.orgKey).to.be.not.null;
            expect(response.body.response.code).to.eq("ORGANIZAÇÃO_JÁ_EXISTENTE");
            // expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });

    it('Testar validações dos campos Email, CPF, CNPJ', () => {
        POSTCreateOrganization.addOrganizacaoFormatacaoErrada().should((response) => {
            expect(response.status).to.eq(401);
            // expect(response.body.result.message).to.eq("Organização já foi cadastrada");
            expect(response.body.result.orgKey).to.be.not.null;
            expect(response.body.result.returnCode).to.eq("failure");
            // expect(response.body.result.code).to.eq("CAMPO_VAZIO");
        })
    });

});
