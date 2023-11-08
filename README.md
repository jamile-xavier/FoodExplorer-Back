<div align="center">
<img src="./src/assets/Logo.svg" alt= "Logo do Food Explorer">
</div>

<h1 align="center"> FOOD EXPLORER - BACK END </h1>

## Descrição do Projeto

<h1 align="center">
<!--incluir o link do deploy><!-->
<a href=""> Food Explorer</a>
</h1>
<p align="center"> O Food Explorer é uma aplicação responsiva que simula um menu interativo para um restaurante fictício. </p>
<p align="center">A aplicação é baseada em modelo disponibilizado no Figma e possui duas personas: o admin e o usuário.</p>
<p align="center">O admin é responsável pelo restaurante, sendo permitindo a criação, visualização, edição e exclusão de pratos. Os pratos deverão conter yma imagem, um nome, uma categoria, ingredientes, preço e uma breve descrição.</p>
<p align="center">O usuário poderá visualizar todos os pratos cadastrados e ao clicar em um prato será redirecionado para uma página com as informações detalhadas do prato.</p>

# Sumário

<!--ts-->

- 🛠 [Funcionalidades](#funcionalidades)
- 🎯 [Critérios Obrigatórios](#critérios-obrigatórios)
- 💻 [Tecnologias](#tecnologias)
- 🔑 [Contas](#contas-de-demonstração)
  - [Usuário Geral](#usuário-geral)
  - [Usuário Admin](#usuário-admin)
- 💽 [Instalação](#instalação)
- 👩 [Autora](#autora)
- ➡ [Links](#links)
  - [GitHub Front End](#github-front-end)
  - [GitHub Back End](#github-back-end)
- 📑 [Licença](#licença)
<!--te-->

# Funcionalidades

- [x] Criar conta;
- [x] Fazer Login;
- [x] Atualizar informações da conta;
- [x] Visualizar todos os pratos cadastrados;
- [x] Acessar os detalhes de um prato selecionado;
- [x] Pesquisar por um prato;
- [x] Admin: cadastrar, editar e excluir pratos.

# Critérios Obrigatórios

- Projeto estruturado com organização de pastas e divisão de componentes;
- Armazenamento de dados em uma banco de dados;
- Autenticação validada por senha na tela de login para acesso a aplicação utilizando JWT.
- Todos os elementos (funções, componentes, variáveis) devem possuir nome significativo seguindo boas práticas do mercado;
- Usuários e admin podem realizar pesquisa de pratos;
- O admin deverá realizar updload de imagem para cadastrar um prato;
- A aplicação deverá ser responsiva seguindo o conceito de Mobile First;
- Utilizar animações, transições e transformações para melhor experiência do usuário;
- A aplicação deverá consumir sua própria API;

# Tecnologias

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Dot Env](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Json Web Token](https://jwt.io/)
- [Knex](https://knexjs.org/guide/schema-builder.html#createvieworreplace)
- [Multer](https://www.npmjs.com/package/multer)
- [MD5 Hash](https://www.md5hashgenerator.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://pm2.keymetrics.io/)
- [Sqlite](https://www.sqlite.org/docs.html)
- [Sqlite 3](https://www.npmjs.com/package/sqlite3)
- [Insomnia](https://insomnia.rest/download)
- [Beekeeper](https://www.beekeeperstudio.io/)

# Contas de demonstração

## Usuário Geral

 <p> Login: user@foodexplorer.com</p>
 <p> Senha: 123456</p>

## Usuário Admin

 <p> Login: admin@foodexplorer.com </p>
 <p> Senha: 012345</p>

# Instalação

Para utilizar o projeto em sua máquina será necessário possuir as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Você precisará também de um editor como o [VSCode](https://code.visualstudio.com/).

# Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/jamile-xavier/FoodExplorer-Back

# Acesse a pasta do projeto no terminal/cmd
$ cd FoodExplorer-Back

# Modifique o arquivo .env.example para .env e inclua uma porta e um secret para utilização do jwt no projeto.
  AUTH_SECRET=
  PORT=

# Instale as dependências
$ npm i

# Faça execução das migrations
$ npm run nmigrate

# Execute a aplicação no modo de desenvolvimento
$ npm run dev

# Aparecerá a mensagem Server is running on port <Número da porta>.

```

# Autora

<p> Jamile Xavier Mendonça </p>

[Github](https://github.com/jamile-xavier)

[Linkedin](https://www.linkedin.com/in/jamile-xavier/)

# Links

## Github Front End

[Repositorio-front](https://github.com/jamile-xavier/FoodExplorer-Front)

## Github Back End

[Repositorio-back](https://github.com/jamile-xavier/FoodExplorer-Back)

# Licença

Licença MIT

O figma e requisitos da aplicação é disponibilizado pela [RocketSeat](https://www.rocketseat.com.br/) para conclusão do desafio final do curso Explorer.

O projeto foi criado de acordo com o aprendizado obtido no curso e os componentes, estilos e responsividade criados por mim baseado nos requisitos do projeto e no que foi aprendido durante o curso.

É concedida permissão gratuita para usar, copiar, modificar, mesclar, publicar, distribuir a aplicação desde que inclua a declaração de direitos autorais e o aviso de permissão em todas as cópias ou partes substanciais do software.

O software é fornecido "como está", sem garantia de qualquer tipo expressa ou implícitas, incluindo mas não se limitando às garantias de comercialização, adequação a um determinado fim e não violação.
