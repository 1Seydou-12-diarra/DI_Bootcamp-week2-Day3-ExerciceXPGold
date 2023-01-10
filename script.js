// exercice1
let numbers = [123, 8409, 100053, 333333333, 7]
// parcourir le tableau  numbers
for(var i = 0; i < numbers.length; i++){
    console.log(" " + numbers[i] + " ");
    if(numbers[0]% 3==0){
        console.log(true || false);
    }
    else if(numbers[1]% 3 == 0){
        console.log(true || false);
    }
    else if(numbers[2]% 3 == 0){
        console.log(true || false);
    }
    else if(numbers[3]% 3 == 0){
        console.log(true || false);
    }
    else if(numbers[4]% 3 == 0){
        console.log(true || false);
    }
}
// exercice3
let  age= [20,5,12,43,98,55];

let sumAge = 0;
for(let i = 0; i < age.length; i++){
    console.log(" " +age[i] + " ");
    sumAge = sumAge +age[i];
    var  maximum = Math.max(age);
    
}
// resultat de la somme des valeur qui sont dans le tableau age
console.log(`the sum of all the numbers in the age array ${sumAge}`);
//trouver la valeur maximum dans un tableau 
console.log(maximum);

// exercice2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let NomEtudiant = prompt("entrer votre nom")
if ( NomEtudiant in  guestList){

    console.log(guestList.NomEtudiant);
}
 
 


