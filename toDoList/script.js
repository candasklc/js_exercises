const refresh = document.querySelector(".refresh");
const dateText = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("item");

const CHECK = "complete";
const  UNCHECK = "";
const LINE_THROUGH = "text"

function addToDo(toDo,id,done,trash){

if (trash) {return;}

const DONE = done ? CHECK : UNCHECK;
const LINE = done ? LINE_THROUGH: "";

const text = `<li class="item">
                 <input class="complete ${DONE}" type="radio" id="${id}">
                 <p class="text ${LINE}"> ${toDo} </p>
                 <input class="delete" type="radio" id="${id}">
              </li>`

const position = "boforeend";
list.insertAdjecentHTML(position,text);
}

let itemList = [];
let id = 0;

document.addEventListener("keyup",function(event){
  if(event.key == 13){
    const toDo = input.value;
    if (todo) {
      addToDo(toDo,id, false, false);
      itemList.push({
        name : toDo,
        id : id,
        done : false,
        trash: false
      });
      input.value = "";
      id++;
    }
    input.value = "";
  }
});