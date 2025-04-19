# 📚 API de Empréstimos de Livros
#### ✍️ Em desenvolvimento contínuo
Atualmente, esta API implementa apenas rotas GET, com foco em consultas e visualização de dados. Futuramente, pretendo implementar novos recursos como:
* Cadastro de novos usuários e livros (POST);
* Atualização de dados existentes (PUT);
* Remoção de registros (DELETE);
* Validações e tratamento de erros aprimorados.

## 💡 Um problema, uma solução
Nem toda biblioteca tem um sistema digital para controlar seus empréstimos. Esta API simula uma solução simples para esse cenário, permitindo visualizar:
- Os livros disponíveis;
- Os empréstimos realizados;
- Os usuários cadastrados;
- Quais empréstimos ainda estão pendentes de devolução.

### 📦 Pré-requisitos
Para rodar o servidor, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Você pode testar as rotas usando um cliente HTTP (como [Thunder Client](https://www.thunderclient.com/) ou [Postman](https://www.postman.com/)) ou digitar os endpoints no seu navegador [http://localhost:3000/](http://localhost:3000/)

### 🛠️ Instalação
```bash
# 1. Clone este repositório:
git clone https://github.com/jhulyanne/miniprojeto-m4-pda.git

# 2. Navegue até a pasta do projeto manualmente ou:
cd miniprojeto-m4-pda

# 3. Instale as dependências:
npm install
```

### 🚀 Rodando e testando

```bash
npm run dev
```
> O servidor será iniciado em http://localhost:3000.

### 📌 Rotas disponíveis
> 📍 Todas as rotas devem ser precedidas de: http://localhost:3000

#### 📚 Livros
- GET /books – Lista todos os livros.
- GET /books/available – Retorna apenas os livros disponíveis para empréstimo.
- GET /books/:id – Retorna um livro específico com base no id.

#### 📄 Empréstimos
- GET /loans – Lista todos os empréstimos registrados.
- GET /loans/pending – Retorna apenas os empréstimos ainda não devolvidos.
- GET /loans/:nome – Retorna todos os empréstimos feitos por um usuário.

#### 👤 Usuários
- GET /users – Lista todos os usuários.
- GET /users/:elemento – Retorna os usuários cujo endereço contenha o elemento fornecido.

### 🧩 Sobre o projeto
Este é o mini projeto do módulo 4 do curso **Desenvolvimento Web Full-Stack**, do [Programadores do Amanhã](https://programadoresdoamanha.org.br/pt). Foi desenvolvido com foco no aprendizado prático de rotas, controllers e lógica de negócio em APIs RESTful utilizando Node.js com Express.