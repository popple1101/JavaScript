// https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-image
//            ㄴ 카카오의 검색 OPEN API 활용
// 위의 문서를 보면서 필요한 값을 설정.
// body response의 데이터 내용
// status 200 정상
const REST_API_KEY = 'ae63ae23770d87233ccf3dcb8bf41c78'
const headers = {
    method : 'GET', // 프로퍼티
    headers: {Authorization : `KakaoAK ${REST_API_KEY}`}
    // API 사용 인증을 위한 key 필수
}   
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

// 요청을 보내는 JS 명령어
let result
fetch(url, headers)                                // 요청 url 주소로 보내기
    .then(response => {                           // 요청에 대한 응답 수신. 콜백함수 인자 resoponse 에 저장
        // console.log(response)
        return response.json()                    // 응답의 body(데이터본문) 를 js 객체로 변환
    })
    .then(data => {                               // 위의 then 에서 리턴한 값을 콜백함수 인자 data 에 저장
        result = data                           
        console.log('data :', data)

        console.log('데이터 분해 1 :', data.documents[0])
        console.log('데이터 분해 2 :', data.documents[0].doc_url)
        console.log('데이터 분해 3 :', data.documents[0].image_url)
        printImage(data.documents, 10, 10)      // data 배열에서 10번째부터 10개의 image를 출력하기
    })
    .catch(error => {                             // 요청 에러 처리. 에러 정보 콜백함수 인자 error에 저장
        console.log('fetch 에러:' + error)
    })
// fetch 요청이 응답을 받고 끝날 때까지 기다리지 않고
// 다음의 console 명령이 실행 됩니다. (비동기 처리 명령어)
console.log('응답 데이터:', result) // undefined

function printImage(docs, pos ,count){ // 임의로 정한 변수(인자)
    const ul = document.getElementById('kakaoImg')
    for(let i=pos;i<pos+count;i++) {
        console.log(docs[i].image_url)        
        const li = document.createElement('li')
        li.innerHTML = `<img src="${docs[i].image_url}" width="400px" height="400px">` // 태그 넣을 때는 innerHTML 사용  , 안전하게는 textContent
        ul.appendChild(li)
    }
}