/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, 
em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher 
entre seguir se especializando na área escolhida ou seguir se desenvolvendo 
para se tornar Fullstack. Você deve exibir na tela uma mensagem específica 
para cada escolha.
4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de 
se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, 
uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: 
“Tem mais alguma tecnologia que você gostaria de aprender?”, 
continue apresentando para ela o Prompt, para que ela complete o nome da 
tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo 
sobre a linguagem inserida.
*/

const renderAnswers = (answers) => {
    const answersDiv = document.getElementById('user-answers');

    for (let prop in answers) {
        let value = answers[prop];
        let keyParaContent;
        switch(prop){
            case 'frontOrBack':
                keyParaContent = 'Front ou back-end?';
                break;
            case 'reactOrVue':
                keyParaContent = 'React or Vue?';
                break;
            case 'understoodAnswer':
                keyParaContent = 'Especializar-se ou tornar-se Fullstack?';
                break;
            case 'whatOtherTechs':
                keyParaContent = 'Que outras tecnologias quer aprender?';
                break;
        }
        let keyPara = document.createElement('p');
        keyPara.classList.add('question');
        keyPara.append(keyParaContent);
        answersDiv.appendChild(keyPara);

        if (value.length > 0 && typeof value === 'object') {
            value.forEach(item => {
                let valuePara = document.createElement('p');
                valuePara.append(item);
                answersDiv.appendChild(valuePara);
            })
            // lazy if; if user doenst reply this one, no answer paragraph is created
        } else if (value.length > 0) {
            let valuePara = document.createElement('p');
            valuePara.append('Não respondeu');
            answersDiv.appendChild(valuePara);
        } else {
            console.log('value.length = 0')
        }
    }
}

const startOver = () => {
    const answersDiv = document.getElementById('user-answers');
    answersDiv.textContent = '';
    day3();
}

const day3 = () => {
    const userAnswers = {}

    const frontOrBack = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?").toLowerCase();
    let computed = true;

    if (frontOrBack.includes('front')) {
        userAnswers.frontOrBack = 'front-end';
        const reactOrVue = prompt("Front-end, legal! Quer aprender React ou aprender Vue?").toLowerCase();
        userAnswers.reactOrVue = reactOrVue.includes('react') ? 'react' : 'vue';
        // lazy ternary; no form validation
        reactOrVue.includes('react') ? alert("React, que legal!") : alert("Vue, que legal!");
    } else if(frontOrBack.includes('back')) {
        const cSharpOrJava = prompt("Back-end, legal! Quer aprender C# ou Java?").toLowerCase();
        // lazy ternary; no form validation
        userAnswers.cSharpOrJava = cSharpOrJava.includes('c') ? 'C#' : 'Java';
        cSharpOrJava.includes('c') ? alert("C#, que legal!") : alert("Java, que legal!");
    } else {
        computed = false;
    }
    if (computed) {
        const onOrFullStack = prompt(`Você pretende seguir se especializando em ${frontOrBack} ou seguir se desenvolvendo para se tornar Fullstack?`)
        const possibleAnswersOn = ['seguir', 'especial', 'front', 'front-end', 'end', 'back', 'back-end', 'react', 'vue', 'c', 'c#', 'java']
        const possibleAnswersFullStack = ['fullstack', 'full', 'ambos', 'ambas', 'duas']
        const answerAsArray = onOrFullStack.split(' ');
        let understoodAnswer = [];
        answerAsArray.forEach(answer => {
            if (possibleAnswersOn.includes(answer)) {
                understoodAnswer.push(answer)
                userAnswers.understoodAnswer = 'seguir se especializando';
                return alert('Se especializar é sempre bom');
            } else if (possibleAnswersFullStack.includes(answer)) {
                understoodAnswer.push(answer)
                return alert('FullStack é ótimo')
            } else {
            }
        })
        understoodAnswer.length === 0 ? alert("Desculpe, não entendemos sua resposta.") : computed = true;
        if (computed) {
            let moreTechs;
            let whatOtherTechs = [];
            let currentTech; 
            console.log('b4 do');
            moreTechs = prompt('Tem mais alguma tecnologia que você gostaria de aprender? S/N')?.toLowerCase();
            while (moreTechs === 's' || moreTechs === 'sim') {
                currentTech = prompt('Qual?').toLowerCase();
                whatOtherTechs.push(currentTech);
                alert(`${currentTech}, anotei.`)
                moreTechs = prompt('Tem mais alguma tecnologia que você gostaria de aprender? S/N')?.toLowerCase();
                console.log(moreTechs);
            }
            userAnswers.whatOtherTechs = whatOtherTechs;
            console.log(`userAnswers B4 agradece: ${userAnswers}`);
            alert('Agradecemos pela sua participação!')
            return renderAnswers(userAnswers);
        }
    } else {
        alert("Você precisa reiniciar para que seja possível registrar suas respostas.")
    }
    console.log(`userAnswers RETURN: ${userAnswers}`);
    return userAnswers;
}
