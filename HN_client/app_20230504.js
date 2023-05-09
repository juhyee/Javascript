// let const const(상수)는 변수에 넣은 데이터를 바꿀 수 없다.
const ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'
const container = document.querySelector('#root')
ajax.open('GET', NEWS_URL, false);
ajax.send(); //데이터 들어옴
// console.log(ajax.response)

// json 파일 객체화
let newsFeed = JSON.parse(ajax.response)
// console.log(newsFeed)
const ul = document.createElement('ul')

// hashchange => URL #부분이 변경되면 이벤트가 시작됩니다.
//location => location 객체는 브라우저가 기본으로 제공해주는 객체로 주소와 관련된 다양한 정보를 제공해 준다.
//substring => 쓰고 싶은 index값 부터 뒤에 있는 문자열을 return 해준다. (필요없는 문자열 제거)
window.addEventListener('hashchange', function(){
  const id =  location.hash.substring(1) // #제거
  ajax.open('GET', CONTENT_URL.replace('@id', id), false)
  ajax.send();

  const newsContent = JSON.parse(ajax.response)
  const title = document.createElement('h1')
  content.append(title)
  title.innerText = newsContent.title
  console.log(newsContent);
});

for(let i = 0; i < newsFeed.length; i++){
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`

  li.appendChild(a)
  ul.appendChild(li)
}

container.appendChild(ul)
container.appendChild(content)