const card = ['Lisa', 'Kaitlin', 'Jan'];
const thankYou = []
function writeCards(card){
for (let counter = 0;counter < 3; ++counter){
thankYou.push (`Thank you, ${card[counter]}, for the wonderful surprise gift!`);
}
return thankYou
}

let countNum =[]
function countDown(i){
while(i>= 0 ){
    console.log (i);
    i--;
}
return countNum
}

debugger