let btn = document.getElementById("btn");
let input = document.getElementById("input");
let list = document.querySelector(".list-group");

btn.addEventListener("click", function () {
    list.innerText="";
    let value = parseInt(input.value);
    if(typeof(value)=="number"){
    for (let index = 0; index < value; index++) {
        let li = document.createElement("li");
        li.classList.add("list-group-item", "liHover");
        li.innerText = index + 1;
        list.append(li);
        li.onclick = function () {
            this.remove();
        }
    }
}else{
    console.log("eded daxil edin");
}

input.value="";

})