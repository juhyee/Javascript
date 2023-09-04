const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USRENAME_KEY = 'userName'

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
function paintGreeting(userName){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${userName}`
}

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const userName = loginInput.value;
    localStorage.setItem("USRENAME_KEY", userName)
    paintGreeting(userName)
}

const saveUserName = localStorage.getItem("USRENAME_KEY");

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
}else{
    paintGreeting(saveUserName)
}

// const link = document.querySelector('a')

// function handelLinkClick(){
//     alert('clicked!!!')
// }

// link.addEventListener('click', handelLinkClick)



