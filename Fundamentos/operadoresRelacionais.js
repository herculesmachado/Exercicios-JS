console.log('1)', '1' == 1)
console.log('2)', '2' === 2)
console.log('3)', '3' != 3)
console.log('4)', '4' !== 4)

console.log('5)', '5' < 4)
console.log('6)', '6' > 5)
console.log('7)', '7' <= 8)
console.log('8)', '8' >= 9)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 == d2)
console.log('10)', d1 === d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)