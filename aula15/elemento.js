let num = [5, 8, 4, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro número da posição é ${num[0]}`)

let pos = num.indexOf(7)
if(pos == - 1) {
    console.log(`Não existe essa posição no elemento`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
