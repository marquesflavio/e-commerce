Projeto de um site e-commerce.

Primeiro criei o projeto com Next, implementando TypeScript e Tailwind CSS >
 npx create-next-app@latest my-app --typescript --tailwind --eslint

Depois o comando foi para implementar o Shadcn/ui > 
npx shadcn-ui@latest init

Ao importar os componentes Shadcn/ui o projeto cria uma pasta de components/ui com os itens, como buttons etc... totalmente personalizável com a sintaxe Tailwind. Alguns componentes como Form, devem ser copiados e colados, pq tem importação por terminal.

Dentro da pasta app, criei uma pasta (root) onde vai ficar o arquivo principal "page.tsx"

## Autenticação

Para a autenticação usei Clerk Authentication

Montei a autenticação cfe disponível na documentação (usando Google e e-mail), criei o arquivo .env e coloquei no gitignore do projeto, pois lá estarão informações de validações importantes.

instalei o Clerk > npm install @clerk/nextjs e passei, cfe documentação as alterações no layout.tsx da pasta app e inclui o arquivo middleware.ts que é específico para o Clerk.

## Modal Store

Mais um componente Shadcn UI, dessa vez o Dialog, onde criei uma variação dele e chamei de Modal.
Instalei também, via npm install zustand.

## Form

Outro componente importante para o projeto é o Form. Utilizei do Shadcn ui o Form e o Input. 
O Form é criado utilizando o react-hook-form do React.
As validações são feitas pelo zod. Portanto, é necessário criar um objeto de validação (formSchema) dentro do store-modal com as validações do zod.

conteúdo adicional: https://react-hook-form.com/docs/useform 

## Prisma setup

O Prisma (https://www.prisma.io/) é uma ferramenta de persistência de dados para aplicações React. Ele permite que você crie um modelo de dados relacional para o seu aplicativo e, em seguida, use-o para acessar e gerenciar dados em um banco de dados relacional.

## Planet Scale

Criei junto ao Planet Scale minha base de dados e integrei com o Prisma no meu projeto. Planet Scale é o database do projeto. Seguindo as orientações foi possível pegar as autenticações de .env e credenciais de acesso ao banco.

Após os ajustes necessários no schema.prisma, foi possível configurar no terminal o npx prisma generate e o npx prisma db push (para enviar para o database)

## Providers

Utilizei o react-hot-toast, adicionado a importação na pasta providers, dentro do arquivo toast-provider.tsx. 
Basicamente, ele pula a hierarquia obrigatória de passar props para cada componente, na sua árvore de componentes.
Utilizei para exibir mensagens de sucesso ou falha na tela, ao invés de console.log(error).

### time 1:45:00