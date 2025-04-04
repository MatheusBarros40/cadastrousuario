# Teste de Habilidade – Hexagon

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de desenvolvedor na **Hexagon**. A aplicação realiza o gerenciamento de usuários com funcionalidades completas de **CRUD**, utilizando **ASP.NET Core (C#)** no backend, **Angular 17** no frontend e persistência dos dados em **MySQL** via **API REST**.

---

## 🛠️ Tecnologias Utilizadas

### ✅ Backend
- ASP.NET Core 8 (C#)
- Entity Framework Core (com Pomelo)
- API RESTful
- MySQL

### ✅ Frontend
- Angular 17 (Standalone Components)
- Bootstrap 5
- Angular Router
- Reactive Forms

---

## 📋 Funcionalidades

- ✅ Inserir novo usuário
- ✅ Editar usuário existente
- ✅ Remover usuário
- ✅ Listar usuários
- ✅ Paginação no frontend
- ✅ Validações de formulário
- ✅ Layout responsivo com Bootstrap

---

## 🧾 Estrutura da Tabela

A tabela gerenciada pela aplicação possui os seguintes campos:

| Campo         | Tipo     |
|---------------|----------|
| Nome          | Texto    |
| Idade         | Número   |
| Estado Civil  | Texto    |
| CPF           | Texto    |
| Cidade        | Texto    |
| Estado        | Texto (UF) |

---

## ▶️ Como Executar o Projeto

### 🔌 Backend (.NET + MySQL)

1. Abra o projeto `Backend/`
2. Configure o `appsettings.json` com sua string de conexão ao MySQL:

```json
"ConnectionStrings": {
  "DefaultConnection": "server=localhost;database=meuBanco;user=Hexagon;password=senhaHexagon;"
}
```

3. Execute os comandos no terminal:

```bash
dotnet ef database update
dotnet run
```

A API estará disponível em: `https://localhost:7281/api/Users`

---

### 🌐 Frontend (Angular)

1. Acesse a pasta `frontend/`
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
ng serve --configuration=development
```

4. Acesse no navegador:  
`http://localhost:4200`

---

## 🔗 Integração Frontend ↔ Backend

O Angular consome os dados da API via HTTP nos seguintes endpoints:

- `GET /api/Users`
- `GET /api/Users/{id}`
- `POST /api/Users`
- `PUT /api/Users/{id}`
- `DELETE /api/Users/{id}`

---

## 📦 Estrutura de Pastas

```
/Backend
  ├── Controllers
  ├── Models (User.cs)
  ├── AppDbContext.cs
  └── Program.cs

/frontend
  ├── src/app/services/user.service.ts
  ├── src/app/components/user-list/
  ├── src/app/components/user-form/
  ├── src/app/app.routes.ts
  └── src/styles.scss
```

---

## 👨‍💻 Desenvolvedor

- **Nome:** [Matheus Barros]
- **LinkedIn:** [https://www.linkedin.com/in/matheus-m-barros/]
- **Email:** [matheus40melo@gmail.com]
- **Telefone:** [(21) 990995472]

---

## ✅ Status: Finalizado com sucesso
Todos os requisitos definidos no documento "Teste de Habilidade – Hexagon" foram implementados.