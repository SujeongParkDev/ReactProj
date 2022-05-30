// 익명함수
const f1 = function (s) { console.log(s) }
const f2 = (s) => { console.log(s) }

f1('f00')
f2('bar')


// 소문자를 대문자로 변환하는 예
const s = 'Keep On Asking, and It Will Be Given You'
const r = s.replace(/[a-z]+/g, function (m) {
    return m.toUpperCase()
})

console.log(r)

// 배열의 숫자를 정리하는 예
const ar = [100, 1, 20, 43, 30, 11, 4]
ar.sort((a, b) => {return b - a})
console.log(ar)