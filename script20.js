let fn = "hello";
console.log(fn.length);
console.log(fn);


//lenght property

let q1 = fn.length              //q1 is variable which store the length of string fn
console.log(q1)                    // 5


let firstN = "mayu"
let lastN = "bhivsane"
console.log (firstN.length)   // 4s
console.log (lastN.length)    // 8


let firstName = "mayu"
let q2 = firstName.toUpperCase()   // toUpperCase() is a method which converts the string to uppercase
console.log(q2)   // MAYU


firstName = "MAYU"
let q3 = firstName.toLowerCase()   // toLowerCase() is a method which converts the string to lowercase
console.log(q3)   // mayu




let city = "pune"          
let q4 = city.indexOf("n")   // indexOf() is a method which returns the index of the first occurrence of the specified value
let q5 = city.indexOf("u") 
let q6 = city.indexOf("e")  // indexOf() is a method which returns the index of the first occurrence of the specified value
console.log(q4)   // 2
console.log(q5)   // 3  
console.log(q6)   // 4

let q7 = city.lastIndexOf("e")  // lastIndexOf() is a method which returns the index of the last occurrence of the specified value
console.log(q7)
// 4  because we have specified the value "e" in lastIndexOf() method so it returns the index of the last occurrence of "e"



let city3 = "chandrapura"
console.log(city3.indexOf("a",4))
console.log(city3.lastIndexOf("a"))
console.log(city3.length)   // 11



let city4 = "ninad"
let q8 = city4.includes("n")
console.log(q8)


let city5 = "ninad"
let q9 = city5.includes("nad")
console.log(q9)



let city6 = "ninad"
let q10 = city6.includes("NAD")
console.log(q10)


// program 2
// 0  1 2  3  4
// h  e l  l  o

let q11= "hello"
console.log(q11.charAt(2))              //charAt() is a method which returns the character at the specified index in a string

let q12 = "hello"
console.log(q12.charAt())         


// 0  1   2  3  4
// h  e   l  l  o
//-5 -4  -3 -2 -1
let q13 = "hello"
console.log(q13.at(-1))


// startsWith()
let city7 = "nagpur"
let q14 = city7.startsWith("n")
let q15 = city7.startsWith("nag")
console.log(q14)
console.log(q15)


// endsWith()
let city8 = "nagpur"
let q16 = city8.endsWith("r")
let q17 = city8.endsWith("pur")
console.log(q16)
console.log(q17)



// trim()                   // trim() is a method which removes the whitespace from both ends of a string
let city9 = " goa "
console.log(city9.length)
let q18 = city9.trim()
console.log(q18.length)
console.log(q18)


 

//trimend

city10 = " goa "
console.log(city10.length)
let q19 = city10.trimEnd()    // trimEnd() is a method which removes the whitespace from the end of a string
console.log(q19.length)
console.log(q19)


// replace()

let info = "i am learning js and js is easy to learn"
let q20 = info.replace("js","python")
console.log(q20)


let info1 = "i am learning js and js is easy to learn"
let q21 = info.replaceAll("js","python")
console.log(q21)