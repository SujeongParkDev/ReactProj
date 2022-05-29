const fs = require('fs')

// 파일 읽기 (동기)
const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)

// 파일 읽기 (비동기)
fs.readFile('test.txt', 'utf-8', readHandler)
// 읽어들이기를 완료했을 때의 처리
function readHandler (err, data) {
    console.log(data)
}

// 익명 함수를 사용한 비동기 처리
// 함수의 매개변수에 함수 객체를 지정할 수 있어 더 짧게 작성할 수 있음
fs.readFile('test.txt', 'utf-8', function (err, data) {
    // 읽어들이기를 완료했을 때의 처리
    console.log(data)
})

// ECMAScript 화살표 함수
// 화살표 함수를 function() {} 익명함수 대신 사용할 수 있음
fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data)
})
