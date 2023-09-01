const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('#login-form input')

// function onLoginBtnClick(){
//     const userName = loginInput.value
//     if(userName == ''){
//         console.log("Please write your name")
//     }else if(userName.length > 15){
//         console.log("Your name is too long.")
//     }else {
//         console.log("Hello " + userName)
//     }
// }

// loginButton.addEventListener('click', onLoginBtnClick)




////////////////////////////////////////////////////////////////////////

function onLoginSubmit(e){
    const userName = loginInput.value
    console.log(userName)
    e.preventDefault();
    // console.log(e)
}

loginForm.addEventListener('submit', onLoginSubmit)