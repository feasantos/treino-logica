## Lógica de Programação

    - Computador:

    --Máquina que extrai dados
    --Processar: realizar operações nos dados de entrada - Dado: é o que pode ser processado - Informação: resultado do processamento - Processamento de dados: Entrada(Dados) > Processamento > Saida(informação)

    E a lógica ?
    Lógica é aquilo que faz sentido

    Como escrever um programa ?
    = Aplicar a logica para descrever os passos para resolver um problema em ordem de execução
    = a sequencia de passos, intruções que o cumputador deve seguir é conhecida como Algoritmo

    Algoritmo:
    -Sequencia logica e finita de instruções que resolvem um problema - Exemplo: receita de Boolean, manual de instrução - Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritmo - Quem viabiliza o funcionamento dos algoritmos nos computadores: Linguagem de programação

## Algoritmo para calcular a média de 3 numeros

    1. Inicio
    2. Receber o primeiro numero: entrada 1;
    3. Receber o primeiro numero: entrada 2;
    4. Receber o primeiro numero: entrada 3;
    5.(PROCESSAMENTO) Somar os 3 numeros recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) /3;
    6. Exibir o resultado: print, echo, console.log;
    7. Fim;

## Funcionalidades Gerais

    - Cria algoritmos e programas para executar no navegador: client Side
    - Manipular o DOM: elementos HTML, eventos(clique, submit), estilos CSS
    - Node.js: Framework JS para backend / runtime em JS
    - Mongo.db / GraphQL: banco de dados em JS
    - React / VTTCue.js / Angular: Framework JS para desenvolvimento web / mobile
    - React Native: framework JS para desenvolvimento mobile
    - receber e manipular dados
    - tomar decisões baseados em logica computacional
    - loop e interações
    - condições de Saida

## Variaveis

    - VAR
    - CONST(fica com valor imutavel)
    - LET
    - STRING(tipo de variavel para conjunto de caracteres)
    - TIPAGEM: numero ou string
    - ARRAY

## Operadores

    -Soma
    -Subtração
    - Multiplicar
    - Dividir
    - Modulo (resto de divisão)
    - Math: random(), round(), sqrt().

    * Atribuição
    a = b
    a += b
    a -= b
    a *= b
    a /= b
    a %= b
    Adiciona 1++
    Subtrai 1 --
    Operadores de Comparação - Igual == ou ===;
    - Diferente !=;
    - Maior que >
    - Maior ou igual >=
    - Menor que <
    - Menor ou igual <=

# Code Together

## Lista de Exercicios

    1. Descrever um Algoritmo para resolver o problema da travessia de modo "Seguro".

        Um homem precisa atravessar um rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um de seus tres pertences, que são: Um lobo, uma cabra e um maço de alfafa;
        Em cada viagem só poderá ir o homem e apaenas um de seus pertences;
        A seguinte regra deverá ser respeitada: o lobo não pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa;
        Escreva um algoritmo para fazer a travessia dos pertences que estão em uma marge do rio para outra;

    RESPOSTA:
        1 - INICIO
        2 - Atravessar Cabra;
        3 - Tirar cabra;
        4 - Voltar;
        5 - Atravessar Alfafa;
        6 - Deixar alfafa;
        7 - Voltar com Cabra;
        8 - Deixar cabrar;
        9 - Pegar lobo e atravessar;
        10 - Deixar lobo e voltar;
        11 - Pegar cabrar e atravessar;
        12 - FIM;

    2.  JS: Exibir média de 5 numeros com entradas pelo formulario HTML.
    Enviar links do git ou do fiddle

        https://github.com/feasantos/treino-logica

        https://jsfiddle.net/dz6oyfwv/4/

# Operadores 

## Aritméticos: retornam resultado de uma operação

    + Somar
    - Subtrair 
    * Multiplicar
    / Dividir
    % resto de divisão

##  Comparadores matemáticos: teste lógico, retorno booleano (true/false):
    < Menor que
    > Maior que
    <= Menor ou igual 
    >= Maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano ( True / false)

    == igualdade entre sentenças (valor)
    != diferença entre sentenças (valor)
    === igualdade entre sentenças (valor e tipo)
    !== diferença entre sentenças (valor e tipo)

    a == b = true
    a != b = false

    * Atribuição
    a = b
    b = 4

## Operadores de lógica e junção lógica

    !   NÃO (NOT)
    &&   E (AND)
    ||   OU (OR)

    O sinal de exclamação (!) é o operador de NOT (não), utilizado para negar a sentença que vem na sequencia.

    #### Exemplos:

    a != b   // o valor a é diferente de b
    x !== y  // o valor e o tipo  de x são diferentes de y
    !a == b   // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em numeros binários:

    true é equivalente a 1
    false é equivalente a 0

#### Operador logico de atribuição 

    Tem a capacidade de atribuir valor a uma variavel a partir de uma condição logica, economiza IFs

    Exemplo: 

    var meuCarro = cor == "preto" ? "preto" : branco;

## IF
    if (...){

    }

## ELSE 

    else (...){

    }

## IF