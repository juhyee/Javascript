
    let products = [];
    let cart = [];
    let row = document.querySelector('.row')

    $.get('./json/store.json').done((data) => {

      data.products.forEach(item => {
        document.querySelector('.row').insertAdjacentHTML(
          "afterbegin",
          ` <div class="col col-md-3 bg-white" data-id="${item.id}">
              <div class="card shadow-sm">
                <div class="card-thumb"><img src='../img/${item.photo}'></div>
                <div class="card-body">
                  <div class="pr_info">
                    <p class="pr_title">${item.title}</p>
                    <p class="pr_brand">${item.brand}</p>
                    <p class="pr_price">${item.price}</p>
                    <button class="pr_add" data-id="${item.id}">담기</button>
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
        let filterAry = data.products.filter(item => {
          return item.title.includes(keyword) || item.brand.includes(keyword)
        })

        row.innerHTML = ''
        filterAry.forEach(item => {
          document.querySelector('.row').insertAdjacentHTML(
          "afterbegin",
          ` <div class="col col-md-3 bg-white" data-id="${item.id}">
              <div class="card shadow-sm">
                <div class="card-thumb"><img src='../img/${item.photo}'></div>
                <div class="card-body">
                  <div class="pr_info">
                    <p class="pr_title">${item.title}</p>
                    <p class="pr_brand">${item.brand}</p>
                    <p class="pr_price">${item.price}</p>
                    <button class="pr_add" data-id="${item.id}">담기</button>
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

      // 장바구니 element 복사
      let cart = [];
      let prAdd =document.querySelectorAll('.pr_add')
      for(let i = 0; i < prAdd.length; i++){
        prAdd[i].addEventListener('click', function(e){
          let prId = e.target.dataset.id;
          let prIdx = cart.findIndex(item => {return prId == item.id})

          if(prIdx == -1){
            let prCopy = data.products.find(item => {return item.id == prId})
            cart.push(prCopy)
            prCopy.count = 1
          }else {
            cart[prIdx].count++;
          }
          document.querySelector('.basket').innerHTML = ''
          cart.forEach(item => {
            document.querySelector('.basket').insertAdjacentHTML(
              'afterbegin',
              `<div class="col col-md-3 bg-white" data-id="${item.id}">
              <div class="card shadow-sm">
                <div class="card-thumb"><img src='../img/${item.photo}'></div>
                <div class="card-body">
                  <div class="pr_info">
                    <p class="pr_title">${item.title}</p>
                    <p class="pr_brand">${item.brand}</p>
                    <p class="pr_price">${item.price}</p>
                    <input type="number" value="${item.count}" class="item-count w-100">
                  </div>
                </div>
              </div>
            </div>`
            )
          })
          calc();

          let cartItemInput = document.querySelectorAll('.item-count')
          for(let i = 0; i < cartItemInput.length; i++){
            cartItemInput[i].addEventListener('input', function(){
              calc();
            })
          }
        })
      }

      // 상품 가격 총합
      function calc(){
        let prTotal = 0;
        for(let i = 0; i < cart.length; i++){
          let cartItem = document.querySelectorAll('.item-count')
          let count = cartItem[i].value
          let prPrice = cartItem[i].previousElementSibling.innerText
          prTotal += parseFloat(count * prPrice)
          document.querySelector('.final-price').innerText = prTotal
        }
      }


      // 모달 관련
      document.querySelector('.buy').addEventListener('click', function(){
        document.querySelector('.modal1').style.display = "flex"
      })

      // 사용자 정보
      let cName = '';
      let cPhone = '';

      document.querySelector('#name').addEventListener('input', function(){
        cName = document.querySelector('#name').value
      })
      document.querySelector('#phone').addEventListener('input', function(){
        cPhone = document.querySelector('#phone').value
      })

      document.querySelector('.show-receipt').addEventListener('click', function(){
        if(!cName || !cPhone){
          alert("사용자 정보를 입력해 주세요.")
        }else {
          document.querySelector('.modal2').style.display = "flex"
          document.querySelector('.modal1').style.display = "none"
        }
      })

      let closeBtn = document.querySelectorAll('.close')
      for(let i = 0; i < closeBtn.length; i++){
          document.querySelectorAll('.close')[i].addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.style.display = "none"
        })
      }
    })