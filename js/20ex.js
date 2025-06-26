const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
    위의 2개의 배열을 객체 배열 1개로 변경.
    객체 예시 : {time: '09:00', todo:'과제'}
*/
// 비어있는 배열에 새로운 요소를 추가 : push() 메소드
const schedule = [] // 스케줄에 비어있는 배열
for (let i = 0; i < time.length; i++) { // for(let i in time) => 0,1,2 배열 인덱스 i 저장 (비추)
    let newItime = { time: time[i], todo: todo[i] }
    // 속성이름 : 값
    schedule.push(newItime)
}


// const schedule = [
//     {
//         time:'09:00',
//         todo:'수업'

//     },
//     {
//         time:'11:00',
//         todo:'과제'

//     },
//     {
//         time:'12:30',
//         todo:'점심식사'

//     },
//     {
//         time:'14:00',
//         todo:'주간회의'

//     },
//     {
//         time:'16:45',
//         todo:'자료조사'

//     }
// ]

// 테이블 만드는 함수 printRow
function printRow(item) {
    const tr = document.createElement('tr') // 실제로 보이는 테이블 행을 tr 변수에 저장
    for (let key in item) {
        const td = document.createElement('td') // 실제로 보이는 테이블 데이터를 td 변수에 저장
        td.textContent = item[key] // 속성 이름 key 에 저장. key 속성의 값을 가져옴.
        tr.appendChild(td) // 데이터 넣는거 까먹음...
    }
    return tr
}



// DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
//                ㄴ 화면의 구성 요소들이 만들어진 후에 실행..

document.addEventListener('DOMContentLoaded', function () {
    // html 의 최상위 요소 가져오기
    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML = `<tr>
                    <th>TIME</th>
                    <th>TODO</th>
    </tr>`
    root.appendChild(table)
    schedule.forEach(item => {
        const trResult = printRow(item)
        table.appendChild(trResult)
    })


    const newBtn = document.getElementById('newBtn')
    newBtn.addEventListener('click', () => {
        // 입력값 가져와서 newItem 객체 만들기
        const newTime = document.getElementById('newTime').value // input의 id값을 가져올 때 .value 사용
        const newTodo = document.getElementById('newTodo').value
        const newItem = { time: newTime, todo: newTodo } // 새로운 일정 객체 생성
        // printRow 실행하여 tr 전달 받기 - 새로운 일정 tr(행) 만들기
        const newTr = printRow(newItem)
        // // newTr을 table에 추가
        // table.appendChild(newTr)
        schedule.push(newItem) // 스케줄 배열에 새로운 일정 추가

        // 스케줄 배열을 time 속성 순서로 정렬(난이도:최상)
        schedule.sort((a, b) => a.time.localeCompare(b.time))
        // ㄴ a,b 는 2개의 객체. 2개의 객체 time 속성비교.
        // todo속성값으로 하면 가나다순으로 정렬.

        // newTr을 table에 추가 -> 정렬된 schedule 배열로 table 다시 만들기
        // table.appendChild(newTr) // ?? mission
        table.innerHTML = `<tr>
                    <th>TIME</th>
                    <th>TODO</th>
        </tr>`
        root.appendChild(table)
        schedule.forEach(item => {
            const trResult = printRow(item)
            table.appendChild(trResult)
        })


        console.log('새 스케줄 추가 후 : ', schedule)
    }) // newBtn.addEventlistener 의 끝
}) // document.addEventlistener 의 끝 
