// app_20230504.js 파일에서 코드 개선하기(DOM API 최소화 하기) / api 호출 코드 간결화 하기 = 리팩토링
//DOM API = document.createElement('~~~~')
// app_20230504.js  api 호츌 코드 [7~8 줄 21~22 줄 간결화] getData()

// let const const(상수)는 변수에 넣은 데이터를 바꿀 수 없다.
const ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'
const container = document.querySelector('#root')

// 공유되는 값
const store = {
  currentPage: 1,
};

function getData(url){
  ajax.open('GET', url, false);
  ajax.send(); //데이터 들어옴

  return JSON.parse(ajax.response) // json 파일 객체화
}

function newsFeed(){
  let newsFeed = getData(NEWS_URL);
  const newsList = []
  // template을 사용함으로써 마크업 구조를 정확하게 알 수 있다.
  //  {{__news_feed__}} 와 같은 마킹을 함으로써 어떤 데이터들이 들어가는지 명확하게 알 수 있어 분리를 한다.
  let template = `
     <div class="bg-gray-600 min-h-screen">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                Previous
              </a>
              <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 text-2xl text-gray-700">
        {{__news_feed__}}
      </div>
    </div>
  `

  for(let i = (store.currentPage - 1) * 10; i <  (store.currentPage) * 10; i++){
    newsList.push(`
    <div class="p-6 ${newsFeed[i].read ? 'bg-red-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
      <div class="flex">
        <div class="flex-auto">
          <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>
        </div>
        <div class="text-center text-sm">
          <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
        </div>
      </div>
      <div class="flex mt-3">
        <div class="grid grid-cols-3 text-sm text-gray-500">
          <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
          <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
          <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
        </div>
      </div>
    </div>
    `)
  }

  template = template.replace(" {{__news_feed__}}", newsList.join(''))
  template = template.replace("{{__prev_page__}}", store.currentPage > 1 ? store.currentPage - 1 : 1)
  template = template.replace("{{__next_page__}}", store.currentPage < newsFeed.length / 10 ? store.currentPage + 1 : newsFeed.length / 10)

  container.innerHTML = template
}

function newsDetail(){
  // hashchange => URL #부분이 변경되면 이벤트가 시작됩니다.
  //location => location 객체는 브라우저가 기본으로 제공해주는 객체로 주소와 관련된 다양한 정보를 제공해 준다.
  //substring => 쓰고 싶은 index값 부터 뒤에 있는 문자열을 return 해준다. (필요없는 문자열 제거)
  const id = location.hash.substring(7) // #제거
  const newsContent = getData(CONTENT_URL.replace('@id', id))

   let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/${store.currentPage}" class="text-gray-500">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full border rounded-xl bg-white m-6 p-4 ">
        <h2>${newsContent.title}</h2>
        <div class="text-gray-400 h-20">
          ${newsContent.content}
        </div>

        {{__comments__}}

      </div>
    </div>
  `;

  container.innerHTML = template;


//   container.innerHTML = `
//   <h1>${newsContent.title}</h1>
//   <div>
//   <a href="#/page/${store.currentPage}">목록으로</a>
//   </div>
//   `
}

function router(){
  const routePath = location.hash;

  if(routePath == ''){
    newsFeed()
  }else if(routePath.indexOf('#/page/') >= 0){
    store.currentPage = Number(routePath.substring(7))
    newsFeed();
  }else {
    newsDetail()
  }
}

window.addEventListener('hashchange', router);

router();