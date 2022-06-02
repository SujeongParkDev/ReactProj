const fs = require('fs')

// Promise로 비동기적으로 파일을 읽어들이는 함수를 정의
function readFileEx (fname) {
    return new Promise((resolve, reject) => {
        fs.readFile(fname, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

// 모든 파일을 읽어 들이는 async 함수를 정의
async function readAll () {
    const a = await readFileEx('a.txt')
    console.log(a)
    const b = await readFileEx('b.txt')
    console.log(b)
    const c = await readFileEx('c.txt')
    console.log(c)
}

readAll()

// 비동기 처리 실행을 대기하고 싶은 함수 호출할 때에는 await <함수이름> (<매개변수>) 라고 작성
// await 를 사용하려면 함수를 async function 이라고 정의해야 함
