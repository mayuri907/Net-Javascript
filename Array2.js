// push() , pop(),shift(), unshift(),includes(),indexOf(),at()

let names = ["sarika","poorva","ram","sham"]
let q1 = names.pop()
let q2 = names.shift()
let q3 = names.push("ramesh")
let q4 = names.unshift('ninad')
console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)
console.log(names)

//Output [ 'ninad', 'poorva', 'ram', 'ramesh' ]

//Program 2

names = ["sarika","poorva","ram","sham"]
let q22 = names.includes("Sarika")    //false because of case sensitivity
let q23 = names.includes("sarika")    //true because of case sensitivity
console.log(q22)                      //Output false
console.log(q23)                      //Output true

//          0        1       2       3
names = ["sarika","poorva","ram","sham"]

let q11 = names.indexOf("sarika")   //Output 0 because sarika is at index 0
let q12 = names.indexOf("Poorva")    //Output -1 because of case sensitivity and also because poorva is not present in the array with capital P
console.log(q11)                    //Output 0 because sarika is at index 0
console.log(q12)                    //Output-1 because of case sensitivity and also because poorva is not present in the array with capital P

let q13 = names.at(2)
console.log(q13)                    //Output ram









// program 1 , program 2 , program 3 , program 4

//                 0    1   2   3
let birthYear = [2000,2001,2002,2003]
let ages = [] // [26,25,24,23]
// [26,25,24,23]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    let a = 2026 - birthYear[i] // 25
    ages.push(a)
}
console.log(ages)




// program 2
let marks = [88,92,44,55,77,95,97]
let above90  =[] // [92,95,97]
// [92,95,97]
// [1,5,6]

for(let i = 0 ; i < marks.length ; i++){   // 0,1,2,3,4,5,6
    console.log(i)                         // 0,1,2,3,4,5,6
    console.log(marks[i])                  // 88,92,44,55,77,95,97 all the marks
    if(marks[i] > 90){                     // 88>90 false, 92>90 true, 44>90 false, 55>90 false, 77>90 false, 95>90 true, 97>90 true
        above90.push(marks[i])             // 92,95,97
    }
}
console.log(above90)                       //Output [ 92, 95, 97 ]