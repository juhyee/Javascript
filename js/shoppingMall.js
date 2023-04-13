
let products = [];
    let cart = [];
    let row = document.querySelector('.row')
    $.get('./json/store.json').done((data) => {
      // console.log(data.products)
      data.products.forEach((item, idx) => {
        var template = document.querySelector('.row').insertAdjacentHTML(
          "afterbegin",
          ` <div class="col col-md-3 bg-white" data-id="${item.id}">
              <div class="card shadow-sm">
                <div class="card-thumb"><img src='../img/${item.photo}'></div>
                <div class="card-body">
                  <div class="pr_info">
                    <p class="pr_title">${item.title}</p>
                    <p class="pr_brand">${item.brand}</p>
                    <p class="pr_price">${item.price}</p>
                    <button class="pr_add">담기</button>
                  </div>
                </div>
              </div>
            </div>`
        )
      });


      // 검색 필터
      let search = document.querySelector('.form-control')
      search.addEventListener('keyup', function () {
        let keyword = search.value
        let filterAry = data.products.filter((item) => {
          return item.title.includes(keyword) || item.brand.includes(keyword)
        })

        row.innerHTML = ''
        filterAry.forEach((item) => {
          var template = document.querySelector('.row').insertAdjacentHTML(
          "afterbegin",
          ` <div class="col col-md-3 bg-white" data-id="${item.id}">
              <div class="card shadow-sm">
                <div class="card-thumb"><img src='../img/${item.photo}'></div>
                <div class="card-body">
                  <div class="pr_info">
                    <p class="pr_title">${item.title}</p>
                    <p class="pr_brand">${item.brand}</p>
                    <p class="pr_price">${item.price}</p>
                    <button class="pr_add">담기</button>
                  </div>
                </div>
              </div>
            </div>`
        )
      });

        // 키워드 하이라이트
        let findDom = document.querySelectorAll('.pr_title, .pr_brand')
        findDom.forEach(item => {
          let highlight = item.innerHTML
          highlight = highlight.replace(keyword, `<span class="highlight">${keyword}</span>`)
          item.innerHTML = highlight
        })
      })

      let addBtn = document.querySelectorAll('.pr_add')
      for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener('click', (e) => {
          let copy = document.querySelectorAll('.col')[i];
          let newNode = copy.cloneNode(true);
          newNode.id = 'copyNode';
          if(!document.getElementById("test")){
            document.querySelector('.drag-zone').insertAdjacentElement("afterbegin", newNode);
            console.log(newNode)
          }
        })
      }




    })