// Spread Operator ES6
const paramList = ["code", true, 25]

const otherList = [1, 2, ...paramList]
// [1, 2, "code", true, 25]

const f = (a, b, ...c)
        => (a + b) * c.length
f(3, 5, 'John', 'Ana', 'Maya') === 24

const name = 'codetap'
const charList = [ ...name ]
// ["c", "o", "d", "e", "t", "a", "p"]







