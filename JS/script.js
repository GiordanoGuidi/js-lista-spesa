//# RISOLUZIONE CON CICLO WHILE E TEMPLATE LITERAL
//CREO LISTA DELLA SPESA
const shoppingList = ['yougurt greco','albume','cereali','pasta','latte','passata']
// RECUPERO L'ELEMENTO DALL'HTML
const listElement = document.getElementById('list-element')
// CREO ELEMENTO HTML
let listItems = '<ul>';
let i = 0;
// CREO CICLO WHILE
while(i < shoppingList.length){
    listItems += `<li>${shoppingList[i]}</li>`;
    i++;
}
listItems+='</ul>';
// STAMPO IN PAGINA
listElement.innerHTML = listItems;

//# RISOLUZIONE CON CICLO FOR E MANIPOLAZIONE DEL DOM
//CREO LISTA DELLA SPESA
// const shoppingList = ['yougurt greco','albume','cereali','pasta','latte','passata']
// RECUPERO L'ELEMENTO DALL'HTML
// const listElement = document.getElementById('list-element')
//CREO ELEMENTO HTML
// let list = document.createElement('ul');
// console.log('LISTA UL', list)
//CICLO FOR
// for(let i = 0; i < shoppingList.length;i++){
//     let listItems = document.createElement('li');
//     console.log('ELEMENTO LI', listItems)
//     listItems.append(shoppingList[i]);
    //AGGANCIO I LISTITEMS ALLA LISTA
//     list.appendChild(listItems);
    // console.log(list);
// }
// listElement.appendChild(list);
