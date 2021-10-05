##encoding: UTF-8
##language: pt

Funcionalidade: Implantação de contrato
    Como um usuario do SistemaOrg
    "Tester" criar modelos conforme a estrutura dos documentos a 
    serem armazenados
    SistemaOrg deve esta cadastrada e ter um token de acesso para interagir

Contexto:  
    Dado que "Tester" possui o SistemaOrg cadastrado
    E possui um token de acesso para interagir com a rota
    E cadastrar organizações ou produtos

Cenario: Implantar contrato HAPPY DAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        blockchain: "0"
        model: "15i2gyx344kqqiebfy"
    Então a API deve retornara "success" com a seguinte mensagem: "O deploy do contrato foi realizado com sucesso na blockchain.." 
    E deve retornar o "idContract", "address", "bytecode"


Cenario: Tentar implantar com um modelo não existente no banco de dados
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        blockchain: "9"
        model: "podeBotarQualquerCoisa?"
    Então a API deve retornara um alerta informando que o modelo não existe

Cenario: Tentar implantar com campos em falta
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
    Então a API devera alertar erro de campos insuficientes 


