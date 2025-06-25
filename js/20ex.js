const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
    위의 2개의 배열을 객체 배열 1개로 변경.
    객체 예시 : {time: '09:00', todo:'과제'}
*/

const schedule = [
    {
        time:'09:00',
        todo:'수업'

    },
    {
        time:'11:00',
        todo:'과제'

    },
    {
        time:'12:30',
        todo:'점심식사'

    },
    {
        time:'14:00',
        todo:'주간회의'

    },
    {
        time:'16:45',
        todo:'자료조사'

    }
]

// 테이블 만드는 함수 printRow
function printRow(item) {
    const tr = document.createElement('tr') // 실제로 보이는 테이블 행을 tr 변수에 저장
    for(let key in item) {
        // console.log(key)
        const td = document.createElement('td') // 실제로 보이는 테이블 데이터를 td 변수에 저장
        // console.log(td)
        td.textContent = item[key]
        // console.log(item[key])
        tr.appendChild(td) // 데이터 넣는거 까먹음...
        // console.log(tr.appendChild(td))
    }
    return tr
}

document.addEventListener('DOMContentLoaded', function(){

    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML = `<tr>
                    <th>TIME</th>
                    <th>TODO</th>
    </tr>`
    root.appendChild(table)
    schedule.forEach(item => {
        // console.log('----')
        // console.log(item)
        const trResult = printRow(item)
        // console.log(trResult)
        table.appendChild(trResult)  
        // console.log(table.appendChild(trResult))
    })
})