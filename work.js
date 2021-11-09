const saveRest= document.getElementsByClassName("todoitems")[0];
const inputAll = document.getElementById("inputed");
const delIcon = document.getElementById("trash");
const test = document.getElementById("rest");

test.addEventListener("click", function(e){
    if (inputAll.value == " ") {
        return alert("please add something");
    }
})


inputAll.addEventListener("keydown", function(e){
    if (e.key == "Enter" && inputAll.value == " ") {
        return alert("please add something");
    }
})



inputAll.addEventListener("keydown", function(event){
    if(event.key == "Enter") {
        addItem();
    }
})

function addItem(){

    var parent = document.createElement("div");
    var child =  document.createElement("div");
    var cheIcon = document.createElement("i");
    var delIcon = document.createElement("i");

    parent.className = "item";
    parent.innerHTML =   '<div>' + inputAll.value + '</div>';

    cheIcon.className = "fas fa-check-square";
    cheIcon.style.color = "grey"
    cheIcon.addEventListener("click", function(){
        cheIcon.style.color = "red"
    })

    child.appendChild(cheIcon);

    delIcon.className = "fas fa-trash";
    delIcon.style.color = "grey"
    delIcon.addEventListener("click", function(){
        parent.remove();
    })

    child.appendChild(delIcon);

    parent.appendChild(child);

    saveRest.appendChild(parent);


    inputAll.value = " ";
}
