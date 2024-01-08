//CREO LISTA DELLA SPESA
const shoppingList = ['yougurt greco','albume','cereali','pasta','latte','passata']
console.log('array lista',shoppingList);
// RECUPERO L'ELEMENTO DALL'HTML
const listElement = document.getElementById('list-element')
//CREO ELEMENTO HTML
let listItems = '<ul>';
console.log('elemento',listItems);
let i = 0;
// CREO CICLO WHILE
while(i < shoppingList.length){
    listItems += `<li>${shoppingList[i]}</li>`;
    i++;
}
listItems+='</ul>';
console.log(listItems)
//STAMPO IN PAGINA
listElement.innerHTML = listItems;


