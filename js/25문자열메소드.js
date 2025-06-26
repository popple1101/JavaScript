console.log("테스트")
// 문자열은 문자의 모임
let text = "ABCDEFG HIJ KLMN OPQRSTU VWXYZ"
console.log('text 문자열의 길이:', text.length)
let result = text.at(5) // 'F'. 문자열의 위치 인덱스는 0부터.
console.log('text.at(5) :', result)
console.log('text[5] :', text[5])
text[5] = '*' // 값을 설정하는 것은 안됨.(why? 문자열은 불변값)
console.log(text)
// slice() 메소드 - 특정 부분을 자르기하여 새로운 문자열 리턴
text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
console.log('slice(7,13) :', part)
part = text.slice(-12); // 마지막값 생략(끝까지)
console.log('slice(-12) :', part)
part = text.slice(-12,-6); // 
console.log('slice(-12,-6) :', part)
// substring() : slice() 와 동일. 음수값은 사용 못함.

// toLowercase()-소문자, toUpperCase()-대문자 변환하여 리턴
console.log('소문자 변환: ', text.toLowerCase())
console.log('대문자 변환: ', text.toUpperCase())

// concat() : 문자열 합치기
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat("🏴‍☠️",text2)
console.log("concat():", text3)

text1 = "        Hello World        "
console.log("treim():", text1.trim(), text1.trim().length)
console.log("treimStart():",text1.trimStart(), text1.trimStart().length)
console.log("treimEnd():", text1.trimEnd(), text1.trimEnd().length)

text = "5"
let padded = text.padEnd(4,"0")
console.log("padEnd(4,'0'): ", padded)

let num = 5
padded = num.toString().padStart(4,"0")
// number 타입은 직접 toString() 으로 문자열 변환 필요합니다.
console.log("padStart(4,'0'): ", padded)

// 배열과 중복된 메소드만 해보세요.
// indexOf(), lastIndexOf() - 2번째 입력값(인자)
text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate", 7);
console.log("indexOf", index)
// includes()





