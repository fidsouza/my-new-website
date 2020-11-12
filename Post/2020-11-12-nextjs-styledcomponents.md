---
title: Nextjs + StyledComponents
description: resolvendo a quebra do CSS quanto utilizando o styledComponents
date: 2020-11-12T16:00:38.932Z
image: /assets/img/nextjs_styledcomponents.jpeg
category: CSS
background: "#3CB371"
---
# Como resolver o erro Prop \`className\` dit not match com Nextjs e Styled-Components

Recentemente ao começar um novo projeto com Nextjs + StyledComponents me deparei com um problema, o CSS simplesmente quebrava na pagina e todo estilo era perdido e a mensagem que eu recebia no console era a seguinte. 

![](/assets/img/erro-nextjs-styled.png)

confesso que eu perdi algumas horas nessa brincadeira, mais , resolvi aqui postar o que eu fiz para corrigir e como foi fácil corrigir. 

## Por que ocorre esta mensagem ?

por algum motivo o Babel que é o compilador do JavaScript não consegue fazer a compilação do arquivo JS com os Estilos e para corrigirmos isso e necessário um pequeno ajuste nas configurações do babel para que ele consiga fazer a importação correta do styled-components . 

## Como Corrigir ?

Para corrigir basta você criar um arquivo .babelrc na raiz do seu projeto e incluir as seguintes configurações. 

```
{
    "env": {
      "development": {
        "plugins": [
          [
            "babel-plugin-styled-components",
            { "ssr": true, "displayName": true, "preprocess": false }
          ]
        ],
        "presets": ["next/babel"]
      },
      "production": {
        "plugins": [
          [
            "babel-plugin-styled-components",
            { "ssr": true, "displayName": true, "preprocess": false }
          ]
        ],
        "presets": ["next/babel"]
      }
    },
    "plugins": [
      [
        "babel-plugin-styled-components",
        { "ssr": true, "displayName": true, "preprocess": false }
      ]
    ]
}
```

Depois disso e só você dar um NPM RUN DEV novamente e pronto!! problema resolvido.