
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

var isend = false
var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

   class Question { 
    pointsByCategory = [200, 300, 400, 500, 600]       
        constructor(question, choices, answer, category) { //class question, con 4 p
            this.points = this.pointsByCategory[category]
            this.question = question;
            this.choices = choices;
            this.realAnswer = answer;
        }
        checkAnswer(answer) {
            var result = 0
            if (this.realAnswer == answer) {
                result = this.points
            }
            return result
        }
        getQuestion(){
            return this.question
        }
    }

    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 5


    // inicio del juego

    startGame = () => {
        questionCounter = 0
        score = 0
        availableQuestions.push(new Question("¿Cuál es la moneda de Colombia?", ['Bolívares', 'Euros', 'Dólares', 'Pesos'], 3, 0))
        availableQuestions.push(new Question("¿Cuál es la lengua oficial de Colombia?", ['Ingles', 'Catalán', 'Español', 'Wayúu'], 2, 0))
        availableQuestions.push(new Question("¿Cuál es la forma de gobierno de Colombia?", ['Monarquía', 'Democracia', 'Teocracia', 'Dictadura'], 1, 0))
        availableQuestions.push(new Question("¿Cuál es la capital de Colombia?", ['Bogotá', 'Cali', 'Manizales', 'Bucaramanga'], 0, 0))
        availableQuestions.push(new Question("¿Cuáles son los colores de la bandera de Colombia?", ['Verde, rojo, blanco', 'Amarillo, azul, rojo', 'Amarillo, celeste, rojo', 'Amarillo, rojo, verde'], 1, 0))
        availableQuestions.push(new Question("¿Cuál es el departamento más poblado de Colombia?", ['Amazonas', 'Cundinamarca', 'Santander', 'Caquetá'], 1, 1))
        availableQuestions.push(new Question("¿Con qué océanos limita Colombia?", ['Índico y el Ártico', 'Índico y el Atlántico', 'Pacífico y el Atlántico', 'Pacífico y el Atlántico'], 2, 1))
        availableQuestions.push(new Question("¿Cómo se llama el aeropuerto de Bogotá?", ['Rafael Nuñez', 'Jose Maria Córdova', 'Alfonso Bonilla', 'El Dorado'], 3, 1))
        availableQuestions.push(new Question("¿Cuál es la flor nacional de Colombia?", ['Flor de Azúcar', 'Heliconia', 'Orquídea', 'Begonia'], 2, 1))
        availableQuestions.push(new Question("¿Qué colombiano escribió la famosa novela romántica María?", ['Jorge Isaacs', 'Héctor Abad Faciolince', 'Gabriel García Márquez', 'Santiago Gamboa'], 0, 1))
        availableQuestions.push(new Question("¿Cuál es el ave nacional de Colombia??", ['El águila arpía', 'El loro orejiamarillo', 'El colibrí', 'El cóndor de los Andes'], 3, 2))
        availableQuestions.push(new Question("¿En qué ciudad colombiana se encuentra la Ciudad Perdida?", ['Soacha', 'Santa Marta', 'Soledad', 'Sincelejo'], 1, 2))
        availableQuestions.push(new Question("¿Cuál es la mejor universidad de Colombia?", ['Universidad Autónoma de Bucaramanga', 'Universidad de los Andes', 'Universidad Nacional de Colombia', 'Universidad de Antioquia'], 2, 2))
        availableQuestions.push(new Question("¿Cuál es el denominado “pueblito más lindo de Colombia”, designado monumento nacional?", ['Barichara', 'Guatavita', 'Villa de Leyva', 'Guatapé'], 0, 2))
        availableQuestions.push(new Question("¿Cuál es el diario de mayor circulación en Colombia?", ['El Colombiano', 'La República', 'El espectador', 'El tiempo'], 3, 2))
        availableQuestions.push(new Question("¿De qué artista colombiano es la obra La Mona Lisa a los 12 años?", ['El Alejandro Obregón', 'Luis Caballero Holguín', 'Enrique Grau', 'Fernando Botero'], 3, 3))
        availableQuestions.push(new Question("¿Quién fundó Santa Marta, capital del departamento Magdalena en Colombia?", ['Rodrigo de Bastidas', 'Pedro de Heredia', 'Gonzalo Jiménez de Quesada', 'Nicolás de Federmán'], 0, 3))
        availableQuestions.push(new Question("¿Cuáles eran las tres grandes familias nativas americanas que poblaban Colombia en el siglo XV?", ['Los Arawaks, los Caribes y los Apaches', 'Los Mayas, los Ojibwa y los Arawaks', 'Los Caribes, los Arawaks y los Muiscas', 'Los Muiscas, los Mayas y los Arawaks'], 2, 3))
        availableQuestions.push(new Question("¿Cuál ha sido el único literato Colombiano galardonado con los premios Cervantes y Príncipe de Asturias?", ['Álvaro Mutis', 'Gabriel García Márquez', 'José Eustasio Rivera', 'Rafael Pombo'], 0, 3))
        availableQuestions.push(new Question("¿Quién propuso el nombre “Colombia” aludiendo a Cristóbal Colón?", ['Antonio Nariño', 'Camilo Torres Tenorio', 'Francisco de Paula Santander', 'Simón Bolívar'], 3, 3))
        availableQuestions.push(new Question("¿Con qué país conformó Colombia la República de Nueva Granada (1832-1858)?", ['Venezuela', 'Chile', 'Panamá', 'Ecuador'], 2, 4))
        availableQuestions.push(new Question("¿Qué guerra tuvo lugar durante la presidencia de Enrique Olaya Herrera?", ['La Guerra contra Perú', 'La Guerra contra Chile', 'La Guerra contra Argentina', 'La Guerra contra Brasil'], 0, 4))
        availableQuestions.push(new Question("¿Qué estado conformó Colombia junto con Venezuela, Ecuador y Panamá (1819-1831)?", ['La Nueva granada', 'La Gran Colombia', 'La Confederación Granadina', 'La República de Colombia'], 1, 4))
        availableQuestions.push(new Question("¿Cómo pasó a llamarse Colombia tras la Constitución de Rionegro?", ['Estados Unidos de Colombia', 'La Gran Colombia', 'Nueva granada', 'Confederación Granadina'], 0, 4))
        availableQuestions.push(new Question("¿Quién lideró la rebelión de esclavos en Cartagena en 1599?", ['Juan del Corral', 'José María Obando', 'José Hilario López', 'Benkos Biohó'], 3, 4))
        getNewQuestion()
    }

    //final
    function endGame(end = false) {
        if(end){
            score += 600
        }
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
   
    function generarAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    getNewQuestion = () => {
        console.log(questionCounter)
        if (questionCounter >= MAX_QUESTIONS) {
            endGame(true)
        }

        questionCounter++

        progressText.innerText = `Ronda ${questionCounter} de ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

        let questionsIndex = 0;
        questionsIndex = generarAleatorio((questionCounter * 5) - 5, (questionCounter * 5) - 1)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question
        ctn = 0
        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion.choices[ctn]
            ctn++
        })


        acceptingAnswers = true
    }


    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']
            let points = currentQuestion.checkAnswer(selectedAnswer)
            let classToApply = parseInt(points) != 0 ? 'correct' : 'incorrect'
            //resalta si es correcta o incorrecta
            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
        
                if(parseInt(points) == 0){
                    score = 0
                    endGame()
                }
                getNewQuestion()
                incrementScore(points)
            }, 600)
        })
    })

    incrementScore = num => {
        score += num
        scoreText.innerText = score
    }

    startGame();