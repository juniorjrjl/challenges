# Resolução dos desafios propostos no curso 30 Desafios de Javascript do OneBitCode

Projeto de receitas

![technology Javascript](https://img.shields.io/badge/techonolgy-Javascrip-success)
![technology Jest](https://img.shields.io/badge/techonolgy-Jest-blue)
![technology Npm](https://img.shields.io/badge/techonolgy-Npm-red)

## Getting Started

## Pré-requisitos

- Docker
- Docker-compose

## Rodar a verificação de código de todos os desafios

rode o seguinte comando no terminal:

```
docker-compose up
```

## Rodar um teste específico para realizar alterações no código garantindo o funcionamento

rode o seguinte comando no terminal

```
docker-compose run --rm app npm t "CAMINHO_PARA_O_ARQUIVO_DE_TESTE"
```

ex:

```
docker-compose run --rm app npm t very_easy/challenge_1.test.js
```