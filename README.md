Projeto de um site e-commerce.

Primeiro criei o projeto com Next, implementando TypeScript e Tailwind CSS >
 npx create-next-app@latest my-app --typescript --tailwind --eslint

Depois o comando foi para implementar o Shadcn/ui > 
npx shadcn-ui@latest init

Ao importar os componentes Shadcn/ui o projeto cria uma pasta de components/ui com os itens, como buttons etc... totalmente personalizável com a sintaxe Tailwind. Alguns componentes como Form, devem ser copiados e colados, pq tem importação por terminal.

Dentro da pasta app, criei uma pasta (root) onde vai ficar o arquivo principal "page.tsx"

## Autenticação

Para a autenticação usei Clerk Authentication

Montei a autenticação cfe disponível (usando Google e e-mail), criei o arquivo .env e coloquei no gitignore do projeto, pois lá estarão informações de validações importantes.

instalei o Clerk > npm install @clerk/nextjs e passei, cfe documentação as alterações no layout.tsx da pasta app e inclui o arquivo middleware.ts que é específico para o Clerk.