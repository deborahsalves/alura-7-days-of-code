/*
Você deve criar um programinha que comece com um valor específico pré-definido 
entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar 
e, caso você acerte, ele irá te parabenizar. 
Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o 
número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico 
em vez de um número pré-definido.
*/

const day4 = () => {
    // const TARGET = 7;
    const target = Math.floor(Math.random() * 10);
    
    let count = 0;
    let userGuess;
    
    do {
        const currentGuess = prompt(`Em que número estou pensando? Você tem ${3 - count} tentativa(s).`)
        count++;
        userGuess = currentGuess;
    }
    // while (userGuess != TARGET && count < 3)
    while (userGuess != target && count < 3)

    // if (userGuess == TARGET) {
    if (userGuess == target) {
        alert(`Parabéns, você acertou! O número certo era ${target}.`) 
    } else if (count < 3) {
        getUserGuess()
    } else {
        // alert(`Vish, você não acertou. O número certo era ${TARGET}`)
        alert(`Vish, você não acertou. O número certo era ${target}.`)
    }
}