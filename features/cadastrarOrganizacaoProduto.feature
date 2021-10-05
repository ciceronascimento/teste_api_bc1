##encoding: UTF-8
##language: pt

Funcionalidade: Cadstrar organização/Produto
    "Tester" quer Cadastrar organizações ou produtos
    Para que ele possa cadastrar as organizações e produtos desejados
    SistemaOrg devera contactar o suporte para realização do cadastro

Contexto:  
    Dado que "Tester" contactou o suporte para realização do cadastro
    E quer cadastrar organizações ou produtos

Cenario: Cadastro de documentos HAPPY DAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos:
        nomeOrg
        emailOrg
        productNameOrg
        nameResponsible
        cpfResponsible
        cnpjOrg
    Então a API deve retornara a seguinte mensagem: "Organização cadastrada com sucesso." e uma orgKey
        

Cenario: Cadastrar organização ja cadastrada anteriormente
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos repetidos do primeiro caso:
        nomeOrg
        emailOrg
        productNameOrg
        nameResponsible
        cpfResponsible
        cnpjOrg
    Então a API deve retornara a seguinte mensagem: "Organização já foi cadastrada"
    E devera enviar um email para "emailOrg" com a chave e breves instruções

Cenario: Tentar cadastrar com campos obrigatorios em falta
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele inserir os seguinte campo:
        cnpjOrg 
    Então a API deve retornara um alerta de campos obrigatorios em falta


Cenario: Testar validações dos campos Email, CPF, CNPJ
    Quando o usuario estiver com os pré-requisitos prontos
    Quando ele deve inserir os seguintes campos informados na formatação errada:
        emailOrg
        cpfResponsible
        cnpjOrg
    Então a API deve retornara a seguinte mensagem de erro de formatação
    