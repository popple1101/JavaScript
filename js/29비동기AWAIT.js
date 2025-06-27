const REST_API_KEY = '1616deaa88644e4edc43b2b8a7fba919'
const headers = {
  method: 'GET',
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`
  }
}
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

let result
// fetch 비동기 함수이므로 await로 실행완료까지 대기
// 이렇게 쓰지 맙시다. => await , then 을 같이 사용하는 것은 추천하지 않는다.
await fetch(url, headers)
  .then(response => {
    console.log('response 수신완료:', response.status)
    return response.json()
  })
  .then(data => {
    result = data
  })
  .catch(error => console.error('fetch 실패: ', error))

console.log('result:', result)
console.log('result:', result.documents[0].image_url)

let result2
// 정상적인 async/await : await 와 then() 은 함께 사용하면 중복된 의미.
async function loadData2() {
  try {  // 오류 검사
    const response = await fetch(url, headers)
    const data = await response.json()
    console.log(data);
    result2 = data
  } catch (error) {   // 오류 처리 구문
    console.error('오류: ', error)
  }
}
await loadData2()
console.log('result2:', result2)
console.log('result2:', result2.documents[0].image_url)

// 또는 loadData2().then(() => {   ...   })
/*
loadData2().then(() => {
  console.log('result:', result)
  console.log('result:', result.documents[0].image_url)
})
*/