# Boas-vindas ao repositório do Projeto Playground Functions!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver **qualquer dúvida** nos envie no _Slack_ da turma! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  :warning: **É importante que os arquivos não tenham o nome alterado!** :warning:

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

No seu time de desenvolvimento, você ficou responsável por implementar o código de funções que resolvem problemas com respostas pré-determinadas. Você pode utilizar a lógica de programação para te ajudar na análise de cada problema e resposta esperada, facilitando a implementação do código de cada uma das funções.


</details>


<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
  * Este projeto é individual
  * Será `1` dia de projeto
  * Data para entrega no prazo regular: `04/07/2022 14:00`

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-024-a-project-playground-functions.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-024-a-project-playground-functions`

  2. Instale as dependências

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique que você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Crie uma branch à qual você vai submeter os `commits` de seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-024-a-project-playground-functions`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-024-a-project-playground-functions`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-024-a-project-playground-functions/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Adicione uma descrição para o Pull Request, um título que o identifique, e clique no botão verde "Create pull request". Crie da seguinte forma: `[JOAOZINHO] Projeto Playground Functions`
  - Adicione uma descrição para o Pull Request, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-024-a-project-playground-functions/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente pois assim você treina essa prática para o mercado de trabalho 😄 ;

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

  - Os comandos que você utilizará com mais frequência são:

    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

    2. `git add` _(para adicionar arquivos ao stage do Git)_

    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário** ;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-024-a`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary>
<strong>🏗 Como estruturar seu projeto</strong>
  </summary> <br />

O seu Pull Request deverá conter os arquivos `challenges.js` e `challenges2.js` com suas funções implementadas.

- Todas as funções já estão declaradas nos arquivos `challenges.js` e `challenges2.js`. Você pode criar outras funções para auxiliar as já existentes, entretanto, **Não altere o nome das funções que já existem**. 

:warning: Os parâmetros das funções já existentes **podem** ser alterados.
  
**De olho na dica 👀:**
- Para verificar se a sua função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_;

- Utilize `console.log()` para testar as funções localmente, mas remova antes de fazer o `push` 😉.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

  Para poder rodar o `ESLint` lembre-se de executar o `npm install` dentro do projeto e depois rode o comando:
  
 ```bash 
 npm run lint 
 ```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
  
 Em caso de dúvidas, confira o material na plataforma sobre [ESLint](https://app.betrybe.com/course/real-life-engineer/eslint).
  
:warning: **NESTE PROJETO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** :warning:
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />
   Todos os requisitos do projeto serão testados automaticamente por meio do Jest.

  Para rodar o avaliador automático localmente no seu projeto, execute um dos comandos abaixo:

  Para executar todos os testes utilize:
  ```bash
  npm test
  ```

  ***ou***

  Para executar um arquivo de teste específico, utilize `npm test nomeDoArquivoDeTeste`:

  ```bash
  npm test compareTrue
  ```
  
  * Os requisitos do seu projeto são avaliados automaticamente

  Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**:

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Evaluator step"**_ e clique nela;

  * Caso tenha dúvidas, poste no _Slack_.

  :warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**


  O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

<details>
  <summary><strong>🔗 Links auxiliares para o desenvolvimento
do projeto</strong></summary><br />

- Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (plataforma da trybe, google, youtube, etc) sempre tomando cuidado para utilizar fontes **confiáveis** nas pesquisas da Internet, como por exemplo:
  
  - [JavaScript.com](http://javascript.com/)

  - [W3Schools](https://www.w3schools.com/js/default.asp)

  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

Link: [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos Obrigatórios
:warning: **Leia todos os requisitos atentamente e siga à risca o que for pedido. Não altere o nome de nenhuma função** :warning:

## 1 - Crie uma função usando o operador &&

<details>
  <summary>
    Implemente a função <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

A função `compareTrue` ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.

  
Exemplo:

```javascript
const girafa = true;
const elefante = true;
const macaco = false;
```

Se a função for chamada com os valores `girafa` e `elefante` como parâmetro, retorna `true`, mas caso  seja chamada com os parâmetro `macaco` e `elefante` retorna `false`.

**O que será testado:**

- Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true;

- Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false;

- Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true.

</details>

## 2 - Crie uma função que calcula a área de um triângulo

<details>
  <summary>
Implemente a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

A função `calcArea` recebe o valor da base (`base`) e outro da altura (`height`) de um triângulo e retorna o cálculo da sua área.

- Realize o cálculo da área total do triângulo utilizando a fórmula `(base * altura) / 2`.

**O que será testado:**
  
- Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50;

- Retorne o valor 5 quando a funcão `calcArea` é chamada com o parâmetro `base` com o valor 5 e o parâmetro `height` com o valor 2;

- Retorne o valor 25.5 quando a funcão `calcArea` é chamada com o parâmetro `base` com o valor 51 e o parâmetro `height` com o valor 1.


</details>


## 3 - Crie uma função que divida uma frase

<details>
  <summary>
Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
  
  Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.

**O que será testado:**
  
- Retorne o valor `['go', 'Trybe']` se a função receber a string `'go Trybe'`;

- Retorne o valor `['vamo', 'que', 'vamo']` se a função receber a string `'vamo que vamo'`;

- Retorne o valor `['foguete']` se a função receber a string `'foguete'`.


</details>


## 4 - Crie uma função que use concatenação de strings

<details>
  <summary>
Implemente a função <code>concatName</code> que recebe um array de strings e retorna o último item na primeira posição

  </summary> <br />
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.
  
  Exemplo:

- Caso o parâmetro passado para a função `concatName` seja o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a função deverá retornar `Paolillo, Lucas`.

**O que será testado:**
  
- Retorne `'Paolillo, Lucas'` quando o parâmetro passado na funcão concatName seja `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;

- Retorne `'ré, foguete'` quando o parâmetro passado na funcão concatName seja `['foguete', 'não', 'tem', 'ré']`;

- Retorne `'captain, captain'` quando o parâmetro passado na funcão concatName seja `['captain', 'my', 'captain']`.


</details>

## 5 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
  <summary>
Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates

  </summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: é o número de vitórias e vale 3 pontos;
- `ties`: é o número de empates e vale 1 ponto.


**O que será testado:**

- Retorne `50` pontos quando o time tenha 14 vitórias e 8 empates;

- Retorne `5` pontos quando o time tenha 1 vitória e 2 empates;

- Retorne `0` pontos quando o time tenha 0 vitórias e 0 empates.


</details>


## 6 - Crie uma função que calcula o número de repetições do maior número

<details>
  <summary>
Implemente a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números. 

  </summary> <br />

A função deve retornar a quantidade de vezes que o **maior** número se repete dentro do array. 
  
  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

**O que será testado:**

- Retorne `2` quando o parâmetro passado na função highestCount seja `[9, 1, 2, 3, 9, 5, 7]`;

- Retorne `1` quando o parâmetro passado na função highestCount seja `[0, 4, 4, 4, 9, 2, 1]`;

- Retorne `3` quando o parâmetro passado na função highestCount seja `[0, 0, 0]`.


</details>


## 7 - Crie uma função de Caça ao Rato

<details>
  <summary>
Implemente a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

  </summary> <br />
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:
    
    - `mouse`: representa a posição do rato.

    - `cat1`: representa a posição de um dos gatos;
    
    - `cat2`: representa a posição do outro gato ;
 
 
- Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

   - Retorne a string `'cat2'` se o gato `cat2` estiver mais próximo do rato;
   - Retorne a string `'cat1'` se o gato `cat1` estiver mais próximo do rato;
   - Retorne a string `'os gatos trombam e o rato foge'` caso os gatos estejam na mesma distância do rato.
   
Exemplo:

- Caso o gato `cat2` esteja a 2 unidades de distância do rato e o `cat1` esteja a 3 unidades, sua função deverá retornar `'cat2'`;

- Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `'os gatos trombam e o rato foge'`. 

**O que será testado:**

- Retorne a string `'cat2'` caso a função `catAndMouse` receba os parâmetros onde gato `cat2` esteja a 2 unidades de distância do rato e `cat1` esteja a 3 unidades de distância do rato;

- Retorne a string `'cat1'` caso a função catAndMouse receba os parâmetros onde gato `cat1` esteja a 6 unidades de distância do rato e `cat2` esteja a 12 unidades de distância do rato ;

- Retorne a string `'os gatos trombam e o rato foge'` caso a função `catAndMouse` receba os parâmetros onde os gatos estejam na mesma distância do rato.


</details>


## 8 - Crie uma função FizzBuzz

<details>
  <summary>
Implemente a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado

  </summary> <br />

A função `fizzBuzz` recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

- Retorne a string `'fizz'` para cada número do array que seja divisível apenas por 3;
- Retorne a string `'buzz'` para cada número do array que seja divisível apenas por 5;
- Retorne a string `'fizzBuzz'` para cada número do array que seja divisível por 3 **e** 5;
- Retorne a string `'bug!'` para cada número do array que não seja dividido por 3 nem por 5.

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

**O que será testado:**
  
- Retorne as strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` quando é passado os parâmetros [2, 15, 7, 9, 45] para a função `fizzBuzz`;

- Retorne as strings `['bug!', 'fizz']` quando é passado os parâmetros [7, 9] para a função `fizzBuzz`;

- Retorne as strings `['fizz', 'buzz']` quando é passado os parâmetros [9, 25] para a função `fizzBuzz`.


</details>


## 9 - Crie uma função que Codifique e Decodifique

<details>
  <summary>
Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

  </summary> <br />

  Para codificar a frase utilize a função `encode` que recebe uma string como parâmetro e deverá trocar todas as **vogais minúsculas por números**, de acordo com o formato:
  
a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5
  
  Ou seja, caso o parâmetro de `encode` seja `'hi there!'`, o retorno deverá ser `'h3 th2r2!'`.


  Para decodificar a frase utilize a função `decode` que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os **números por vogais minúsculas**, de acordo com o formato: 
  
1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u
  
  Por exemplo, caso o parâmetro de `decode` seja `'h3 th2r2!'`, o retorno deverá ser `'hi there!'`.

**O que será testado:**
  
- Ao utilizar o parâmetro `hello`, deverá trazer como retorno `h2ll4`;
- Ao utilizar o parâmetro `How are you today?` deverá trazer como retorno `H4w 1r2 y45 t4d1y?`;
- Ao utilizar o parâmetro `This is an encoding test.` deverá trazer como retorno `Th3s 3s 1n 2nc4d3ng t2st.`;
- Ao utilizar o parâmetro `go Trybe! `deverá trazer como retorno `g4 Tryb2!` .



</details>


## 10 - Crie uma função de Lista de Tecnologias

<details>
  <summary>
Implemente a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

  A função `techList` recebe dois parâmetros:

  - Um array com nomes de tecnologias ;
  - Um nome referente ao nome de uma pessoa.
  
  A função deverá retornar:
  - 'Vazio!' se não receber parâmetro algum ;
  - Um objeto para cada tecnologia do array, com a seguinte estrutura:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

Por exemplo, se a função recebe os parâmetros `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` e `'Lucas'`, o retorno deve ser:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

**O que será testado:**

- Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias;

- Retorne a mensagem de erro `'Vazio!'` quando a lista não tiver tecnologias.


</details>


# Requisitos Bônus

## 11 - Crie uma função de número de telefone

<details>
  <summary>
Implemente a função  <code>generatePhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a função `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Retorne a frase `'Array com tamanho incorreto.'` se a função receber um array com tamanho diferente de 11;

- Retorne a string `'não é possível gerar um número de telefone com esses valores'` caso algum dos números do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.


**O que será testado:**
  
- Retorne a string 'Array com tamanho incorreto.' caso o array tenha o tamanho diferente de 11;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais;

- Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações.


</details>

## 12 - Crie uma função que teste a condição de existência de um triângulo

<details>
  <summary>
Implemente a função <code>triangleCheck</code> que verifica se é possível formar um triângulo analisando o comprimento de três linhas

  </summary> <br />

  A função `triangleCheck` deverá receber os parâmetros `lineA`, `lineB` e `lineC` com o valor do comprimento de três linhas distintas.

  - Para que seja possível formar um triângulo, é necessário que **a medida de *qualquer* um dos lados** atenda às seguintes condições: 
  
  1) seja **menor** que a soma das medidas dos outros dois lados; 
  
  ***E***
  
  2) seja **maior** que o valor absoluto (módulo) da diferença entre os outros dois lados.

**De olho na dica :eyes:** Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.
  
  - O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.

**O que será testado:**
  
- Retorne `false` quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois lados;

- Retorne `false` quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença das medidas dos outros dois lados;

- Retorne `true` quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferença entre os outros dois lados.


</details>

## 13 - Crie uma função de boas vindas ao Bar da Trybe!

<details>
  <summary>
Implemente a função `hydrate` que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

  </summary> <br />


```javascript
// String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de água'
```

```
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'
```

```
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'
```

- Para simplificar, considere que a string **sempre** terá o formato *quantidade (em número) + tipo da bebida*;

- O número na frente de cada bebida deve estar entre 1 e 9.

**De olho na dica 👀:** pesquise por algo similar a `get all integers inside a string js`.

**O que será testado:**
  
- Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string.


</details>

</details>
