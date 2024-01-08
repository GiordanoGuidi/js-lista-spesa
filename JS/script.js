//CREO LISTA DELLA SPESA
const shoppingList = ['yougurt greco','albume','cereali','pasta','latte','passata']
console.log('array lista',shoppingList);
//CREO ELEMENTO HTML
const listElement = '<ul>';
console.log('elemento',listElement);
let i = '';
// CREO CICLO WHILE
while(i < shoppingList.length){
    const listItem = `<li>${shoppingList[i]}</li>`;
    console.log(listItem);
    i++;
}