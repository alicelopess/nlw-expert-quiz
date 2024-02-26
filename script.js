//Perguntas do Quiz
const perguntas = [
    {
        pergunta: "Qual é a função do comando 'console.log' em JavaScript?",
        respostas: [
            "Imprimir no console do navegador",
            "Capturar entrada do usuário",
            "Executar uma animação na página",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Uma função",
            "Um contêiner para armazenar valores",
        ],
        correta: 2
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "var nomeDaVariavel = valor;",
            "const nomeDaVariavel = valor;",
            "let nomeDaVariavel = valor;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado numérico",
            "Um tipo de dado string",
            "Uma estrutura de dados que armazena coleções de elementos",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Não há diferença, ambos são usados para comparação de igualdade",
            " '===' compara valor e tipo, '==' compara apenas valor",
            " '==' compara valor e tipo, '===' compara apenas valor",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um modelo de design para websites",
            "Uma linguagem de programação",
            "Uma interface que representa a estrutura de um documento HTML",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um bloco de código que só pode ser executado uma vez",
            "Um objeto que armazena valores",
            "Um bloco de código reutilizável que pode ser chamado para executar uma tarefa específica",
        ],
        correta: 2
    },
    {
        pergunta: "Como se faz um loop 'for' em JavaScript?",
        respostas: [
            "for (inicialização; condição; incremento) {...}",
            "loopFor (inicialização; condição; incremento) {...}",
            "while (inicialização; condição; incremento) {...}",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um objeto global",
            "Uma ação desencadeada pelo clique do usuário em um elemento HTML",
        ],
        correta: 2
    },
    {
        pergunta: "Como se comenta uma linha de código em JavaScript?",
        respostas: [
            "// Este é um comentário de linha",
            "/* Este é um comentário de bloco */",
            "# Este é um comentário de linha",
        ],
        correta: 0
    },
]

//Declaração de Variáveis
const quizContainer = document.getElementById('quiz-container')
const quizTemplate = document.getElementById('quiz-template')
const corretas = new Set()
const totaldePerguntas = perguntas.length
const showScore = document.getElementById('score')


//Atribuição ao HTML
perguntas.forEach(item => {
    //Clone do Template
    const clone = quizTemplate.content.cloneNode(true)

    //Pergunta
    clone.querySelector('.question-title').textContent = item.pergunta
    
    //Respostas
    item.respostas.forEach(resposta => {
        const dt = clone.querySelector('.answer-item').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            console.log(estaCorreta)
             
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            console.log(corretas.size)
            console.log(corretas)

            showScore.textContent = corretas.size + ' de ' + totaldePerguntas
        }

        clone.querySelector('.answer-container').appendChild(dt)
    })

    //Remover primeira resposta do clone
    clone.querySelector('.answer-item').remove()

    //Criar no HTML
    quizContainer.appendChild(clone)
})