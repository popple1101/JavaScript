add()
add()
add()

let result = sub() // 함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈 :', result)
console.log('뺄셈 :', sub())

mult(10,100) // 10, 100 은 함수 실행에 필요한 입력값
mult(25,4)

result = div(300,21)
console.log('나누기 :', result)
console.log('나누기 :', div(300,71))
console.log('나눈 결과 소수점 :', result.toFixed(3)) // 반올림 기본

// 함수 정의 = 함수 호이스팅(끌어오라기) 가능한 것은 function 사용할때만 가능
function add(){
    console.log(100+1000)
}

function sub(){
    return 100-1000; // 함수의 실행 결과를 전달하기
}

function mult(num1,num2){ // (num1,num2 : 함수 실행시 사용자가 정한 입력값을 저장하는 변수
    console.log('num1*num2 :', num1*num2)
}

function div(num1,num2){
    return num1/num2
}
