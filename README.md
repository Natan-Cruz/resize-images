# Redimensionar imagens com Sharp/Nodejs
## Um pequeno exemplo de como obter por url imagens redimesionadas e tratadas com o Sharp
Tabela de conteúdos
=================
   * [Sobre](#sobre)
   * [Pre Requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Tecnologias](#tecnologias)
   * [Testes](#Testes)
  
### [Sobre](#sobre)
Essa solução foi construida por mim com o objetivo de resolver um problema que tive no decorrer do meu projeto de delivery. Havia muitas imagens com diferentes tamanhos requiridos.
A resolução de uma foto de um produto no carrinho é totalmete diferente das outras situaçoes como produto sendo visualizado, então não havia necessidade de entregar uma imagem "grande" para o uso "pequeno".
Essa é uma solução que não requer pagamentos de serviços externos e funciona muito bem dentro de um certo limite.


### [Pré-requisitos](#Pré-requisitos)

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## [Istalação](#istalacao)
#### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Natan-Cruz/resize-images-nodejs.git>

# Vá para a pasta resize_images
$ cd resize_images

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### [ 🛠 Tecnologias](#tecnologias)

As seguintes principais ferramentas foram usadas na construção do projeto:
- [Node.js](https://nodejs.org/en/) - Backend
- [Sharp](https://sharp.pixelplumbing.com/) - Lib para tratar a imagem
- [node-cache](https://www.npmjs.com/package/node-cache) - Cache em memoria
- [ejs](https://ejs.co/) - Visualização do index

Para testes foi usado
- [Jmater](https://jmeter.apache.org/) - "O aplicativo Apache JMeter™ é um software de código aberto, um aplicativo Java 100% puro projetado para carregar o comportamento funcional do teste e medir o desempenho. Foi originalmente projetado para testar aplicações web, mas desde então expandiu-se para outras funções de teste".

### [Testes](#testes)
Foram feitos testes de estresse com jmeter de requisições com duração de 10 segundos em cada setup: static files do express, sharp e shap + cache
Os testes anteriores foram executados com o caso 1, caso 2 e caso 3 - os dois ultimos casos somente do sharp e shap+cache.

- Caso 1: Imagem original, cerca de 3,63Mb - 3000x2000
- Caso 2: Imagem redimensionada, cerca de 63Kb - 500x333
- Caso 3: Imagem redimensionada com 70% da qualidade, cerca de 34Kb - 500x333

![alt image](https://github.com/Natan-Cruz/resize-images-nodejs/blob/main/test/chart.jpg?raw=true)
