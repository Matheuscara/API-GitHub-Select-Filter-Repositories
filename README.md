# API-GitHub-Select-Filter-Repositories

> Realizei uma API simples que busca dados do usuario do github selecionado e retorna como vc desejar.

## Stacks de Desenvolvimento

- Javascript
- NodeJS
- Express
- Heroku

## Instalação

OS X Linux X Windows:

```sh
npm install
```

## Modo de Uso

Está api foi desenvolvida e já foi realizado o deploy.

- Base Url : https://github-order.herokuapp.com/repositories

Um dos metodos de uso é

#Retornando todos os repositorios disponiveis do usuario selecionado:
    
    /{:userGitHub:}/

#Um filtro da sua linguagem selecionada:

    /{:userGitHub:}/{:linguagem:}

#Um filtro retornando de ordem crescente de acordo com a data criada dos repositorios selecionados:

    /{:userGitHub:}/{:linguagem:}/order/

#Retorna o elemento selecionado de acordo com o index do Array:

    /{:userGitHub:}/{:linguagem:}/order/{index}


