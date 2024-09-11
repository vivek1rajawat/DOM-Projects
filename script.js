var istatus = document.querySelector("h5")
var text = document.querySelector("#add")

var btn = document.querySelector("#add")
var flag = 0
btn.addEventListener("click",function(){
    if(flag==0){
            istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
    btn.innerHTML = "Remove Friend"
    btn.style.backgroundColor = "#cacaca"
    text.style.color = "black"
    
    flag = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
            btn.style.backgroundColor = "cadetblue"
                text.style.color = "white"

        flag = 0
    }

})
