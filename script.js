// Counnter Expenses 

// const tickets = 500;
// const hotel = 250;
// const musey = 120;


// const dollar = 11000.34;
// const euro = 12354.03;
// const totalCostInSums = tickets * dollar + hotel * dollar + musey * euro; 
// console.log(totalCostInSums)

// const budgetOfAlisher = prompt("Enter your budget in sums");

// if(totalCostInSums <= budgetOfAlisher) {
//     console.log("Oq yo'l, Alisher!")
// }else{
//     console.log("Alisher , ozgina sabr qilsin")
// }


// If-1
// let a = parseInt(prompt("Enter the number"))

// if(a > 0) {
//     alert(a += 1)
// }else {
//     alert(a)
// }

// IF-2

// let a = parseInt(prompt("Enter the number"))

// if(a > 0) {
//     alert(a +=1)
// }else {
//     alert(a-=2)
// }

//If-3

// let a = parseInt(prompt("Enter the number"))

// if(a > 0) {
//     alert(a +=1)
// }else if(a === 0) {
//     alert(10)
// }else {
//     alert(a -= 2)
// }

//If-4

// let a  = 1;
// let b = 4;
// let c = 7;
// let positiveNumbers = 0;
// let newgativeNumbers = 0;

// let min = a;
// let max = a;

// if (b < min) {
//     min = b
// }
// if(c < min) {
//     min = c
// }

// if(b > max) {
//     max = b
// }
// if(c > max) {
//     max = c
// }
// for(let i = min; i <= max; i++) {
//     if(i < 0) {
//         newgativeNumbers++
//     }else if(i > 0) {
//         positiveNumbers++
//     }
// }

// alert(`Positive Numbers ${positiveNumbers}, Negative Numbers ${newgativeNumbers}`)


// If-5 In two ways

// let a = -4;
// let b = 2;
// let c = 8;

//1-way

// let positiveNumbers = 0;
// let newgativeNumbers = 0;

// let min = a;
// let max = a;

// if (b < min) {
//     min = b
// }
// if(c < min) {
//     min = c
// }

// if(b > max) {
//     max = b
// }
// if(c > max) {
//     max = c
// }
// for(let i = min; i <= max; i++) {
//     if(i < 0) {
//         newgativeNumbers++
//     }else if(i > 0) {
//         positiveNumbers++
//     }
// }

// alert(`Positive Numbers ${positiveNumbers}, Negative Numbers ${newgativeNumbers}`)


// 2-way 

// const max = Math.max(a,b,c)
// const min = Math.min(a,b,c)
// const res = []

// for(let i = min; i <=max; i++) {
//     if(i < 0) {
//         res.push(i)
//     }else if (i > 0) {
//         res.push(i)
//     }
// }
// console.log(res)
//If - 6

// let a = parseInt(prompt("Enter the number"))
// let b = parseInt(prompt("Enter the number"))

// if(a > b) {
//     alert(a)
// }else {
//     alert(b)
// }


//If - 7

// let a = parseInt(prompt("Enter the number"))
// let b = parseInt(prompt("Enter the number"))

// if(a > b) {
//     alert(b)
// }else {
//     alert(a)
// }

// If - 8

// let a = parseInt(prompt("Enter the number"))
// let b = parseInt(prompt("Enter the number"))

// if(a > b) {
//     alert(a)
//     alert(b)
// }else {
//     alert(b)
//     alert(a)
// }




// If - 9

// let a = parseInt(prompt("Enter the number"))
// let b = parseInt(prompt("Enter the number"))

// if(a > b) {
//     alert(a-b)
//     alert(b+a)
// }else {
//     alert(a)
//     alert(b)
// }


//If-10

// let a = parseInt(prompt("Enter the value"))
// let b = parseInt(prompt("Enter the value"))
// let result;
// if (a !== b) {
//     result = 0
//     alert(result)
// }else if(a === b) {
//     result = a+b
//     alert(result)
// }

// If-11

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))

// let result;
// if ((a !== b && a > b)) {
//     result = a
//     alert(result)
// }else if (a !== b && a < b) {
//     result = b;
//     alert(b)
// }else if(a === b) {
//     result = 0
//     alert(result)
// }

// If-12

// let a = 5;
// let b = 3;
// let c = 86;


// if(a < b && a < c ) {
//     alert(a)
// }else if(b<a && b < c) {
//     alert(b)
// }else {
//     alert(c)
// }

// If - 13

// let a = 4;
// let b = 9;
// let c = 2;
// let greatest;
// let smallest;

// if((a > b && a > c)) {
//     greatest = a
// }else if (b > 0 && b > c) {
//     greatest = b
// }else {
//     greatest = c
// }

// if(a < b && a < c ) {
//     smallest = a
// }else if(b<a && b < c) {
//     smallest = b
// }else {
//     smallest = c
// }

// alert(Math.floor((greatest + smallest)/2))

//If - 14
// let a = 4;
// let b = 9;
// let c = 2;

// if(a < b && a < c ) {
//     alert(a)
// }else if(b<a && b < c) {
//     alert(b)
// }else {
//     alert(c)
// }
// if((a > b && a > c)) {
//     alert(a)
// }else if (b > 0 && b > c) {
//     alert(b)
// }else {
//     alert(c)
// }


//If - 15
// let a = 4;
// let b = 1;
// let c = 2;

// if((a>b && a>c) && (a>b &&b>c) &&(c<a && c<b)) {
//     alert(a+b)
// }else if((b>a && b>c) && (b>a &&a>c) &&(c<a && c<b)) {
//     alert(b+a)
// }else if((c>b && c>a) && (c>b &&b>c) &&(a<c && a <b )) {
//     alert(c+b)
// }else if((a>b && a>c)&& (a > c && c > b)&& (b<a && b<c)) {
//     alert(a+c)
// }


//Boolean 1

// let a = parseInt(prompt("Enter the value of a"))

// if(a > 0) {
//     alert(true)
// }else {
//     alert(false)
// }

// Boolean 2 and Boolean 3

// let a = parseInt(prompt("Enter the value of a"))

// if(a % 2 !== 0) {
//     alert("Toq son")
// }else {
//     alert("Juft son")
// }


//Boolean 4

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))

// if(a > 2 && b <= 3) {
//     alert(true)
// }else {
//     alert(false)
// }

// Boolean 5
// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))

// if(a >= 0 || b < -2) {
//     alert(true)
// }else {
//     alert(false)
// }

//Boolean 6

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(b >=a && b <= c) {
//     alert(true)
// }else {
//     alert(false)
// }

//Boolean 7

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(b >a && b < c) {
//     alert(true)
// }else {
//     alert(false)
// }


// Boolean 8

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))


// if(a % 2 !== 0 && b % 2 !== 0) {
//     alert(`${a} va ${b} Toq sonlar`)
// }else {
//     alert(`${a} va ${b} Toq sonlar mas`)
// }


// Boolean 9 

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))


// if(a % 2 !== 0 || b % 2 !== 0) {
//     alert(`Toq sonlar`)
// }else {
//     alert(`${a} va ${b} Toq sonlar mas`)
// }

//Boolean 10

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))


// if(a % 2 !== 0 && b % 2 === 0) {
//     alert(`${a} Toq son`)
// }else if(a % 2 === 0 && b % 2 !==0) {
//     alert(`${b} Toq son`)
// }else {
//     alert("Toq son mas yoki a va b toq sonlar")
// }

// Boolean 11

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))


// if(a % 2 !== 0 && b % 2 !== 0) {
//     alert(`${a} va ${b} Toq sonlar`)
// }else if(a % 2 === 0 && b % 2 ===0) {
//     alert(`${a} va ${b} Juft sonlar`)
// }else {
//     alert("Hato")
// }


// Boolean 12

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a > 0 && b > 0 && c > 0) {
//     alert(true)
// }else {
//     alert(false)
// }

// Boolean 13

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a > 0 || b > 0 || c > 0) {
//     alert(true)
// }else {
//     alert(false)
// }


//Boolean 14

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a > 0 && b < 0  && c < 0) {
//     alert(`${a} musbat son`)
// }else if(a < 0 && b > 0  && c < 0) {
//     alert(`${b} musbat son`)
// }else if(a < 0 && b < 0  && c > 0) {
//     alert(`${c} musbat son`)
// }else {
//     alert(false)
// }

//Boolean 15

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a > 0 && b > 0  && c < 0) {
//     alert(`${a} va ${b} musbat son`)
// }else if(a < 0 && b > 0  && c > 0) {
//     alert(`${b} va ${c} musbat son`)
// }else if(a > 0 && b < 0  && c > 0) {
//     alert(`${a} va ${c} musbat son`)
// }else {
//     alert(false)
// }

// Boolean 16

// let number = parseInt(prompt("Ikki honali son kiriting"))

// if(number > 0) {
//     if((number>=10 && number <=99) && number % 2 === 0) {
//         alert("Berilgan son ikki honali juft son")
//     }else {
//         alert("Hato")
//     }
// }else {
//     alert("Musbat son kiriting")
// }

//Boolean 17

// let number = parseInt(prompt("Uch honali son kiriting"))

// if(number > 0) {
//     if((number>=100 && number <=999) && number % 2 !== 0) {
//         alert("Berilgan son Uch honali Toq son")
//     }else {
//         alert("Hato")
//     }
// }else {
//     alert("Musbat son kiriting")
// }


// Boolean 18

// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a === b && a === c  || b === c) {
//     alert(`Hech bomaganda 2 son bir birga teng`)
// }else if(a === b && b === c  || a === c ) {
//     alert(`Hech bomaganda 2 son bir birga teng`)
// }else if(b === c && a === c  || a === b) {
//     alert(`Hech bomaganda 2 son bir birga teng`)
// }else {
//     alert(false)
// }


//Boolean 19


// let a = parseInt(prompt("Enter the value of a"))
// let b = parseInt(prompt("Enter the value of b"))
// let c = parseInt(prompt("Enter the value of c"))

// if(a === -b && a === -c  || b === -c) {
//     alert(`Jufti ozoro qarama qarshi`)
// }else if(a === -b && b === -c  || a === -c ) {
//     alert(`Jufti ozoro qarama qarshi`)
// }else if(b === -c && a === -c  || a === -b) {
//     alert(`Jufti ozoro qarama qarshi`)
// }else {
//     alert(false)
// }

// Boolean 20

// const number = parseInt(prompt("Uch honali son kiriting"))
// let a,b,c;

// a = Math.floor(number / 100)
// b = Math.floor((number / 10)%10)
// c = (number - a*100 - b*10)

// if(a !== b && b !== c && a !== c) {
//     alert("Raqamlari har hil")
// }else {
//     alert("Bir hil raqamlari mavjud")
// }

//Boolean 21

// const number = parseInt(prompt("Uch honali son kiriting"))
// let a,b,c;

// a = Math.floor(number / 100)
// b = Math.floor((number / 10)%10)
// c = (number - a*100 - b*10)

// if(a < b && a < c && b < c) {
//     alert("Osib boruvchi tartibda joylashgan")
// }else {
//     alert("Hato")
// }

//Boolean 22

// const number = parseInt(prompt("Uch honali son kiriting"))
// let a,b,c;

// a = Math.floor(number / 100)
// b = Math.floor((number / 10)%10)
// c = (number - a*100 - b*10)

// if(a < b && a < c && b < c) {
//     alert("Osib boruvchi tartibda joylashgan")
// }else if(a > b && a > c && b > c) {
//     alert("Kamayish tartibida joylkaashgan raqamlar")
// }else {
//     alert("Hato")
// }


//Boolean 23

// const number = parseInt(prompt("Uch honali son kiriting"))
// let a,b,c;

// a = Math.floor(number / 100)
// b = Math.floor((number / 10)%10)
// c = (number - a*100 - b*10)

// if(a !== b && a === c) {
//     alert("Ong dan oqigandaham chaptan oqigandaham bir hil")
// }else {
//     alert("Hato")
// }