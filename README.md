# Bnex Produtos API

Este repositório contém o código-fonte da Bnex Produtos API, uma API REST simples para gerenciar produtos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (versão 6 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (versão 12 ou superior)

## Instalação e inicialização em modo desenvolvimento

1. Clone o repositório:

```bash
git clone https://github.com/your-username/bnex-produtos-api.git

2. Mude para o diretório do projeto:

cd bnex-produtos-api

3. Instale as dependências:

npm install

4. Crie um arquivo .env no diretório raiz do projeto com o seguinte conteúdo:

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=seu-usuario-postgres
POSTGRES_PASSWORD=sua-senha-postgres
POSTGRES_DB=bnex_produtos_api

JWT_SECRET=seu-jwt-secreto

Substitua seu-usuario-postgres, sua-senha-postgres, e seu-jwt-secreto com seus próprios valores.

5. Crie o esquema de banco de dados:

npm run migrate:latest

6. Inicie o aplicativo:

npm start

Para instalar e executar o frontend, siga as instruções no arquivo README.md desse repositório.

Contribuição
Aceitamos contribuições para este projeto.
