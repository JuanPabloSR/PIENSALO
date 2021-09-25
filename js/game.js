//variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
//preguntas
let questions = [
    {
        question: "¿Cuál es la moneda de Colombia? ",
        choice1:'Bolívares',
        choice2:'Euros',
        choice3:'Dólares',
        choice4:'Pesos',
        answer: 4,
    }, 
    {
        question: "¿Cuál es la lengua oficial de Colombia? ",
        choice1: "Ingles",
        choice2: "Catalán ",
        choice3: "Español ",
        choice4: "Wayúu",
        answer: 3,
    },  {
        question: "¿Cuál es la forma de gobierno de Colombia?",
        choice1: "Monarquía",
        choice2: "Democracia",
        choice3: "Teocracia",
        choice4: "Dictadura",
        answer: 2,
    },  {
        question: "¿Cuál es la capital de Colombia?",
        choice1:"Bogotá",
        choice2:"Cali",
        choice3:"Manizales",
        choice4:"Bucaramanga",
        answer: 1,
    },  {
        question: "¿Cuáles son los colores de la bandera de Colombia?",
        choice1:"Verde, rojo, blanco",
        choice2:"Amarillo, azul, rojo",
        choice3:"Amarillo, celeste, rojo",
        choice4:"Amarillo, rojo, verde ",
        answer: 2,
    }
]
let questions2 = [
    {
        question: "¿Cuál es el departamento más poblado de Colombia?",
        choice1:'Amazonas',
        choice2:'Cundinamarca',
        choice3:'Santander ',
        choice4:'Caquetá',
        answer: 2,
    }, 
    {
        question: "¿Con qué océanos limita Colombia?",
        choice1: "Índico y el Ártico ",
        choice2: "Índico y el Atlántico ",
        choice3: "Pacífico y el Atlántico",
        choice4: "Antártico y el Ártico",
        answer: 3,
    },  {
        question: "¿Cómo se llama el aeropuerto de Bogotá?",
        choice1: "Rafael Nuñez",
        choice2: "Jose Maria Córdova",
        choice3: "Alfonso Bonilla",
        choice4: "El Dorado",
        answer: 4,
    },  {
        question: "¿Cuál es la flor nacional de Colombia?",
        choice1:"Flor de Azúcar",
        choice2:"Heliconia",
        choice3:"Orquídea",
        choice4:"Begonia",
        answer: 3,
    },  {
        question: "¿Qué colombiano escribió la famosa novela romántica María?",
        choice1:"Jorge Isaacs.",
        choice2:"Héctor Abad Faciolince",
        choice3:"Gabriel García Márquez",
        choice4:"Santiago Gamboa",
        answer: 1,
    }
]
let questions3 = [
    {
        question: "¿Cuál es el ave nacional de Colombia?",
        choice1:'El águila arpía',
        choice2:'El loro orejiamarillo',
        choice3:'El colibrí',
        choice4:'El cóndor de los Andes',
        answer: 4,
    },
    {
        question: "¿En qué ciudad colombiana se encuentra la Ciudad Perdida?",
        choice1:'Soacha',
        choice2:'Santa Marta',
        choice3:'Soledad',
        choice4:'Sincelejo',
        answer: 2,
    },
    {
        question: "¿Cuál es la mayor universidad de Colombia?",
        choice1:'Universidad Autónoma de Bucaramanga',
        choice2:'Universidad de los Andes',
        choice3:'Universidad Nacional de Colombia',
        choice4:'Universidad de Antioquia',
        answer: 3,
    },
    {
        question: "¿Cuál es el denominado “pueblito más lindo de Colombia”, designado monumento nacional?",
        choice1:'Barichara',
        choice2:'Guatavita',
        choice3:'Villa de Leyva',
        choice4:'Guatapé',
        answer: 1,
    },
    {
        question: "¿Cuál es el diario de mayor circulación en Colombia?",
        choice1:'El Colombiano',
        choice2:'La República',
        choice3:'El espectador ',
        choice4:'El tiempo',
        answer: 4,
    }
]
let questions4 = [
    {
        question: "¿De qué artista colombiano es la obra La Mona Lisa a los 12 años?",
        choice1:'Alejandro Obregón',
        choice2:'Luis Caballero Holguín',
        choice3:'Enrique Grau',
        choice4:'Fernando Botero',
        answer: 4,
    },
    {
        question: "¿Quién fundó Santa Marta, capital del departamento Magdalena en Colombia? ",
        choice1:'Rodrigo de Bastidas',
        choice2:'Pedro de Heredia',
        choice3:'Gonzalo Jiménez de Quesada',
        choice4:'Nicolás de Federmán',
        answer: 1,
    },
    {
        question: "¿Cuáles eran las tres grandes familias nativas americanas que poblaban Colombia en el siglo XV?",
        choice1:'Los Arawaks, los Caribes y los Apaches ',
        choice2:'Los Mayas, los Ojibwa y los Arawaks',
        choice3:'Los Caribes, los Arawaks y los Muiscas ',
        choice4:'Los Muiscas, los Mayas y los Arawaks',
        answer: 3,
    },
    {
        question: "¿Cuál ha sido el único literato Colombiano galardonado con los premios Cervantes y Príncipe de Asturias? ",
        choice1:'Álvaro Mutis',
        choice2:'Gabriel García Márquez',
        choice3:'José Eustasio Rivera',
        choice4:'Rafael Pombo',
        answer: 1,
    },
    {
        question: "¿Quién propuso el nombre “Colombia” aludiendo a Cristóbal Colón?",
        choice1:'Antonio Nariño',
        choice2:'Camilo Torres Tenorio',
        choice3:'Francisco de Paula Santander',
        choice4:'Simón Bolívar',
        answer: 4,
    }
]
let questions5 = [
    {
        question: "¿Con qué país conformó Colombia la República de Nueva Granada (1832-1858)?",
        choice1:'Venezuela',
        choice2:'Chile',
        choice3:'Panamá',
        choice4:'Ecuador',
        answer: 3,
    },
    {
        question: "¿Qué guerra tuvo lugar durante la presidencia de Enrique Olaya Herrera?",
        choice1:'La Guerra contra Perú',
        choice2:'La Guerra contra Chile',
        choice3:'La Guerra contra Argentina',
        choice4:'La Guerra contra Brasil',
        answer: 1,
    },
    {
        question: "¿Qué estado conformó Colombia junto con Venezuela, Ecuador y Panamá (1819-1831)? ",
        choice1:'La Nueva granada',
        choice2:'La Gran Colombia',
        choice3:'La Confederación Granadina',
        choice4:'La República de Colombia',
        answer: 2,
    },
    {
        question: "¿Cómo pasó a llamarse Colombia tras la Constitución de Rionegro? ",
        choice1:'Estados Unidos de Colombia',
        choice2:'La Gran Colombia',
        choice3:'Nueva granada',
        choice4:'Confederación Granadina',
        answer: 1,
    },
    {
        question: "¿Quién lideró la rebelión de esclavos en Cartagena en 1599?",
        choice1:'Juan del Corral',
        choice2:'José María Obando',
        choice3:'José Hilario López',
        choice4:'Benkos Biohó',
        answer: 4,
    }
]
const SCORE_POINTS = 100 
const MAX_QUESTIONS = 5

// inicio del juego

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    availableQuestions2 = [...questions2]
    availableQuestions3 = [...questions3]
    availableQuestions4 = [...questions4]
    availableQuestions5 = [...questions5]
    getNewQuestion()
}

//final
endGame = () =>{
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
       endGame()
    }

    questionCounter++

    progressText.innerText = `Ronda ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    let questionsIndex = 0;

    if(questionCounter == 1){
        questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        console.log(questionsIndex)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question
    }
    else if (questionCounter == 2){
        questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        console.log(questionsIndex)
        currentQuestion = availableQuestions2[questionsIndex]
        question.innerText = currentQuestion.question
    }
    else if (questionCounter == 3){
        questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions3[questionsIndex]
        question.innerText = currentQuestion.question
    }
    else if(questionCounter == 4){
        questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions4[questionsIndex]
        question.innerText = currentQuestion.question
    }
    else if (questionCounter == 5){
        questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions5[questionsIndex]
        question.innerText = currentQuestion.question
    }

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)   
    availableQuestions2.splice(questionsIndex, 1)   
    availableQuestions3.splice(questionsIndex, 1)   
    availableQuestions4.splice(questionsIndex, 1)   
    availableQuestions5.splice(questionsIndex, 1)   

    acceptingAnswers = true
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        //resalta si es correcta o incorrecta
        selectedChoice.parentElement.classList.add(classToApply)
    
        setTimeout(() => {
            
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            if(classToApply === 'correct') {
                incrementScore(SCORE_POINTS * questionCounter)
            }
            
            else if (classToApply === 'incorrect'){
                incrementScore(SCORE_POINTS * 0)
                endGame()
            }

        }, 600)


        
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

