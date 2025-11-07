# Gerenciador de Notas de Alunos (Student Grade Manager)

API REST simples para gerenciamento de notas de alunos desenvolvida com Node.js puro e JavaScript.

## Tecnologias Utilizadas

-   Node.js
-   JavaScript
-   UUID (para geração de IDs únicos)

## Instalação

```bash
npm install
```

## Como Executar

```bash
node index.js
```

O servidor iniciará na porta 3000: http://localhost:3000

## Endpoints da API

### Obter todas as notas

```
GET /grades
```

### Adicionar nova nota

```
POST /grades
```

Corpo da requisição:

```json
{
    "studentName": "Nome do Aluno",
    "subject": "Matéria",
    "grade": "Nota"
}
```

### Atualizar nota

```
PUT /grades/:id
```

Corpo da requisição:

```json
{
    "studentName": "Nome do Aluno",
    "subject": "Matéria",
    "grade": "Nota"
}
```

### Deletar nota

```
DELETE /grades/:id
```

## Testando a API

O projeto inclui uma coleção do Thunder Client que pode ser importada para testar todos os endpoints.

1. Instale a extensão Thunder Client no VS Code
2. Importe o arquivo `thunder-collection_student_grade_manager.json`
3. Use as requisições pré-configuradas para testar a API

## Estrutura do Projeto

-   `index.js`: Arquivo principal com a implementação do servidor e rotas
-   `package.json`: Configurações do projeto e dependências
-   `thunder-collection_student_grade_manager.json`: Coleção de requisições para testes
