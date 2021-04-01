## <h1 align="center">Todo.dev</h1>

<h3 align="center">⚠️Projeto em desenvolvimento</h3>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>
<br>

## 💻 Sobre o projeto

**[To-Do](http://priscilastuani.com.br/vantagens-em-usar-um-to-do-list/#:~:text=To%2DDo%20Lists%20s%C3%A3o%20listas,na%20parte%20inferior%20da%20lista.)** Lists são listas de todas as tarefas que você precisa realizar, ou seja, elas listam tudo que você tem a fazer, com as tarefas mais importantes no topo, e as tarefas menos importantes na parte inferior da lista.

Esse projeto foi desenvolvido com as tecnologias que venho estudado ultimamente, para fixar o que venho aprendendo.

---

## ⚙️ Funcionalidades

**Back-end:**

- [x] O usuário pode criar uma conta com **_name_**, **_email_** e **_password_**.
- [x] A senha vai criptografada para o banco de dados
- [x] Autenticação nas rotas com JWT
- [x] Rota de criação de tasks
- [x] Rota de listagem de tasks

**Front-end**

- [ ] Modo dark
- [ ] ....

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [x] [Git](https://git-scm.com)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [Docker](https://docs.docker.com/get-docker/)

### 🧭 Rodando a aplicação back-end

```bash

# Clone este repositório
$ git clone https://github.com/thsthiago/todo_dev.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd todo_node_express

```

**Docker:**

```bash

# Crie um container do postgres
$ docker run --name todo-node-express -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Você pode usar o DBeaver para trabalhar com a manipulação do seu banco de dados.
# Crie um banco de dados com o nome todo-node-express no seu DBeaver.
# Na seção de Tecnologias, em utilitarios, você pode clicar em DBeaver para fazer o download direto do site.

```

**Rodando aplicação com yarn:**

```bash

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# A api será aberta na porta:3333 - acesse com o insominia:
$ http://localhost:3333

```

**Rodando aplicação com npm:**

```bash

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# A api será aberta na porta:3333 - com o insominia:
$ http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **Node JS**
- **Typescritp**
- **Express.js**
- **Jsonwebtoken**
- **Uuidv4**
- **Typeorm**
- **Pg**
- **Yarn**
- **Eslint**
- **ts-node-dev**

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Consultas na api: **[insominia](https://insomnia.rest/download)**
- Docker: **[Docker](https://docs.docker.com/get-docker/)**
- DBeaver: **[DBeaver](https://dbeaver.io/download/)**

---

## 👨🏽‍💻 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61162365?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Cabral</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/Thiago-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/thsthiago-cabral/)](https://www.linkedin.com/in/thsthiago-cabral/)
[![Gmail Badge](https://img.shields.io/badge/thiagocabral477@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:thiagocabral477@gmail.com)](mailto:thiagocabral477@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Thiago Cabral 🚀
