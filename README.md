# Redimensionar imagens com Sharp/Nodejs
## Um pequeno exemplo de como obter por url imagens redimesionadas e tratadas com o Sharp
Tabela de conteúdos
=================
   * [Sobre](#sobre)
   * [Pre Requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Tecnologias](#tecnologias)
  
### Sobre
Essa solução foi construida por mim com o objetivo de resolver um problema que tive no decorrer do meu projeto de delivery. Havia muitas imagens com diferentes tamanhos requiridos.
O tamanho de uma foto de um produto no carriho é diferente que em visulização, então não havia necessidade uma imagem tão pesada sendo exibida em certos lugares.
É uma solução que não requer pagamentos de serviços externos e funciona muito bem dentro dos limites.


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

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

### 🛠 Tecnologias

As seguintes principais ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Sharp](https://sharp.pixelplumbing.com/)
- [node-cache](https://www.npmjs.com/package/node-cache)