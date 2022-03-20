// window.addEventListener("load", () => {
//     const form = document.querySelector(".users");
//     const userName = document.getElementById("username");
//     const userPassword = document.getElementById("password");
//     const signHandler = document.querySelector(".overley");
//     // console.info(form);
//     // console.info(userName);
//     // console.info(userPassword);

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const enterUser = userName.value;
//         const enterPass = userPassword.value;

//         // console.log(enterUser);
//         // console.log(enterPass);
//         if (enterUser == "admin" && enterPass == "7777") {
//             signHandler.style.display = "none";
//         } else {
//             window.location = "/";
//         }
//     });

// });
// ADD +  REMOVE --,
window.addEventListener("load",function(event){
    const bars = document.querySelector(".fa-bars");
    const close = document.querySelector(".fa-close");
    bars.addEventListener("click",function(){
        bars.style.display = "none"
        close.style.display = "block"
    close.addEventListener("click", function(){
        bars.style.display = "block"
        close.style.display = "none"
    })    
    }) 
    const nav = document.querySelector(".nav-list");
    bars.addEventListener("click",function(){
        nav.style.display = "none"
    })
    close.addEventListener("click",function(){
        nav.style.display = "block"
    })
});

window.addEventListener("load",function(){
    const btn = this.document.querySelector(".btn")
    const container = document.querySelector(".container");
    const body = this.document.querySelector("body");
    btn.addEventListener("click",function(){
        console.log('zor');
        body.classList.toggle("dark-mode");

        // // var container = container.style.display = "block";
        // const arr = [
        //     "focus",
        //     "container"
        // ] 
        // var randomColor = arr[Math.floor(Math.random() * arr.length)];
        // body.style.background = randomColor;

    })
});
