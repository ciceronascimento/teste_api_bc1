##encoding: UTF-8
##language: pt

Funcionalidade: Cadstrar organização/Produto
    Como um usuario do SistemaOrg
    "Tester" criar modelos conforme a estrutura dos documentos a 
    serem armazenados
    SistemaOrg deve esta cadastrada e ter um token de acesso para interagir

Contexto:  
    Dado que "Tester" possui o SistemaOrg cadastrado
    E possui um token de acesso para interagir com a rota
    E cadastrar organizações ou produtos

Cenario: Criar modelo HAPPY DAY
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        description: "Modelo de teste com cinco atributos"
        attributes: "idInternal;hashDoc;idObra;idAuthor;teste1;teste2"
        *attNotNull: "idObra;idAuthor;teste2"
    Então a API deve retornara "success" com a seguinte mensagem: "Modelo criado com sucesso." e o codigo do modelo

Cenario: Tentar criar com campos obrigatorios vaziosf
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        description: "Modelo de teste com cinco atributos"
        attributes: "idInternal;hashDoc;idObra;idAuthor;teste1;teste2"
        *attNotNull: ""
    Então a API deve retornara um alerta de campos obrigatorios em falta

Cenario: Tentar criar com campos em falta
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        description: "Modelo de teste com cinco atributos"
        attributes: "idInternal;hashDoc;idObra;idAuthor;teste1;teste2"
    Então a API deve quebrar

Cenario: Tentar criar com campos duplicados
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        description: "Modelo de teste com cinco atributos"
        attributes: "idInternal;hashDoc;idObra;idAuthor;teste1;teste2"
         *attNotNull: ""
    Então a API deve alertar campos duplicados

Cenario: Tentar criar com campos  em ordem erradas nos atributos
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos:
        description: "Modelo de teste com cinco atributos"
        attributes: "idObra;idAuthor;teste1;teste2;idInternal;hashDoc"
        *attNotNull: "idObra;idAuthor;teste2"
    Então a API devera alertar ao usuario com a seguinte mensagem: "Os primeiros elementos do modelo devem ser ‘idInternal;hashDoc’, respectivamente."


Cenario: Testar verificação de atributos duplicados
    Quando o usuario estiver com os pré-requisitos prontos
    Quando o sistema deve inserir os seguintes campos com informações duplicadas:
        description: "Modelo de teste com cinco atributos"
        attributes: "idObra;idAuthor;teste1;teste2;idInternal;hashDoc"
        *attNotNull: "idObra;idAuthor;teste2"
    Então a API deverá alertar que os campos foram duplicados