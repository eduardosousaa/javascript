let num = [9, 7, 4, 8, 3, 1]
/*
console.log(num)
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posção ${pos} tem o valor ${num[pos]}`)
}
*/

num.sort()

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
