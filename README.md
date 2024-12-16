# Node_SQLite_API

Uma API para gerenciar cursos, pessoas e matrículas, utilizando Node.js, Sequelize e SQLite. O projeto segue o padrão MVC e inclui funcionalidades básicas de CRUD com associações entre tabelas.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Documentação](#documentação)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/js.png" alt="JavaScript Logo" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/node.png" alt="Node.js Logo" width="100"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

API desenvolvida para gerenciar informações relacionadas a pessoas, cursos e matrículas. A aplicação utiliza o Sequelize para abstração do banco de dados e SQLite como sistema de armazenamento. As tabelas estão associadas para refletir um modelo relacional.

## Funcionalidades

- Gerenciar pessoas (criação, leitura, atualização, exclusão).
- Gerenciar cursos e suas associações com pessoas.
- Registrar e gerenciar matrículas de pessoas em cursos.
- Validação de dados e estrutura modularizada com o padrão MVC.

## Estrutura

## Rotas da API

A API está organizada com rotas RESTful, onde cada recurso tem suas rotas de manipulação de dados. As rotas são acessíveis via HTTP (GET, POST, PUT, DELETE).

### Pessoas (`/people`)

**GET /people**  
Retorna todas as pessoas cadastradas.

**POST /people**  
Cria uma nova pessoa.  
Exemplo de corpo da requisição:
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "cpf": "09876543210",
  "active": true,
  "role": "instructor"
}
```

## Autor
Desenvolvido por Diego Franco
