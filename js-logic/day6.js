/*
Você deverá criar a opção de remover algum item da lista, que será exibida junto 
à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir 
os elementos presentes na lista atual, e a pessoa deverá escrever 
qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a 
confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá 
exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir 
do momento que existir ao menos um elemento dentro da lista de compras.

*/

const day6 = () => {
    let addOrRemoveItem = true;
    const groceryList = {}

    const actionSelect = (userChoice) => {
        if(userChoice === '1' || userChoice === 'adicionar'){
            addItem(true);
        } else if(userChoice === '2' || userChoice === 'remover'){
            removeItem(true);
        } else if(userChoice === '3' || userChoice === 'encerrar'){
            return
        } else {
            actionSelect(prompt("Opção inválida. 1 - Adiciona; 2 - Remover; 3 - Encerrar").toLowerCase());
        }
    }

    const deleteItem = (event) => {
        const clickedButton = event.target;
        const thisItem = clickedButton.closest('li');
        // but the category remains, couldnt get rid of the closest <ul> if empty 
        return thisItem.remove();
    }

    const loopForListeners = () => {
        const listItems = document.getElementsByTagName('input');
        for (let i = 0; i < Object.keys(listItems).length; i++) {
            listItems.item(i).addEventListener('click', deleteItem)
        }
    }

    const renderList = () => {
        // lazy. go again neither cleans the rendered items nor add them to same arrays
        let returnList = '';
        if(addOrRemoveItem !== '3' || addOrRemoveItem !== 'remover') {
            for (let key in groceryList) {
                key
                const title = key;
                const items = groceryList[key].map((item, i = 0) => {
                    i++;
                    return `<li id=${title+i}>${item} <input type="button" id=${title+i+'-button'} value="—"/></li>`
                })
                returnList += `<ul><strong>${key}</strong>: ${items.join("")}</ul>`
            }
        }
    
        const $answersDiv = document.getElementById('user-answers');
        $answersDiv.insertAdjacentHTML(
            'beforeend', 
            returnList
        );
        return loopForListeners();
    }

    const addItem = (addToggle) => {
        if (!addToggle) {
            return
        }
        const whichItem = addOrRemoveItem ? prompt("Qual comida você deseja inserir?") : alert("Estamos gerando sua lista!");
        const itemCategory = prompt("Em qual categoria a comida se encaixa?").toLowerCase();
        Object.keys(groceryList).includes(itemCategory) ? groceryList[`${itemCategory}`].push(whichItem) : groceryList[`${itemCategory}`] = [whichItem];
        addOrRemoveItem = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? 1 - Adicionar; 2 - Remover; 3 - Encerrar").toLowerCase();
        actionSelect(addOrRemoveItem);
    }

    const removeItem = (removeToggle) => {
        if (!removeToggle) {
            return
        }
        console.log('remove');
        renderList();
    }

    firstItem = prompt("Deseja adicionar uma comida na sua lista de compras? S/N").toLowerCase();
    if (firstItem !== 's' && firstItem !== 'n') {
        firstItem = prompt("Opção inválida. Digite S para adicionar ou N para encerrar.").toLowerCase();
    }

    firstItem = firstItem == 's' ? true : false;

    if (firstItem) {
        addItem(firstItem);
    }
    addOrRemoveItem = addOrRemoveItem === 'encerrar' || addOrRemoveItem === '3' ? false : true;
    !addOrRemoveItem ? renderList() : addItem();

    return;
}