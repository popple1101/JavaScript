
// 오늘 시간표 - time, todo 배열 선언
const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

// 내일 시간표
const time2 = ['08:00', '10:00', '11:20', '14:00', '15:45', '17:00']
const todo2 = ['수업', '회의', '점심식사', '운동', '업무', '친구미팅']

// 실행 버튼
const tmr = document.getElementById('tomorrow')
const tod = document.getElementById('today')

// 테이블 tr
const timeTr = document.getElementById('time')
const todoTr = document.getElementById('todo')
const timeTB = document.getElementById('time') // tr 태그 중 id가 time인데 클래스가 td인것을 모두 고른다
const todoTB = document.getElementById('todo')

// 제목 h3
const title = document.getElementById('title')

// 데이터(배열)만 다르고 실행 내용은 같아요 -> 함수로 리팩토링
function timeline(timeArr, todoArr, title){ // 입력 : 시간표 배열, 할일 배열, 제목
                  //  형식 매개변수 (값은 실행할 때 전달되어 저장.)
    timeTr.innerHTML = '<th>TIME</th>'
    todoTr.innerHTML = '<th>TODO</th>'
    title.textContent = title + '시간표'

    for(let t of timeArr){
        const td = document.createElement('td')
        td.textContent = t
        timeTr.appendChild(td)
    }
    for(let t of todoArr){
        const td = document.createElement('td')
        td.textContent = t
        todoTr.appendChild(td)
    }
}

// 오늘 버튼
tod.addEventListener('click', ()=>{
    timeline(time, todo,'오늘') // 위에서 선언한 배열 이름 time, todo 함수로 전달
})
// 내일 버튼
tmr.addEventListener('click', ()=>{
    timeline(time2, todo2,'내일') // 위에서 선언한 배열 이름 time, todo 함수로 전달
})




