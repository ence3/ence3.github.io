//Добавляем объекты, с которыми будем работать

const clear = document.querySelector('.header-clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');
const addToDoBtn = document.querySelector('.addtodo__btn');


input.focus();
//Классы

let CHECK = "content-item__check";
let UNCHECK = "content-item__ring";
let LINE_THROUGH = "lineThrough";


let LIST, id;

//Сохраняем данные в локальное хранилище

let data = localStorage.getItem('TODO');

if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function(item) {
        addToDo (item.name, item.id, item.done, item.trash);
    });
}

//Очистка хранилища 

clear.addEventListener('click', function (){
    localStorage.clear();
    location.reload();
});

//Отображение даты в шапке

let today = new Date();
let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }

dateElement.innerHTML = today.toLocaleDateString ("ru-RU", options)

//Функция добавления дел

function addToDo (toDo, id, done, trash) {

    if (trash) {
        return;
    }

    let DONE = done ? CHECK:UNCHECK;
    let LINE = done ? LINE_THROUGH: "";

    const item = `<li class="content-item">
    <i class="btn ${DONE}" job="complete" id="${id}"></i>
    <p class="content-item__text ${LINE}">${toDo}</p>
    <i class="btn content-item__tresh" job="delete" id="${id}"></i>
    </li>`;
    let position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

//Добавляем функцию добавления задания по нажатию

document.addEventListener("keyup", function (event){
    if (event.keyCode == 13) {
        let toDo = input.value;

        if (toDo) { 
            addToDo(toDo, id, false, false);  //Добавления дел
            
            LIST.push({ 
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem('TODO', JSON.stringify(LIST));
            id++;
        }
        input.value = ""; //Очистка строки
    }
});

//Добавляем функцию добавления задания по нажатию на зеленую кнопку

addToDoBtn.addEventListener('click', function (event){
        let toDo = input.value;

        if (toDo) { 
            addToDo(toDo, id, false, false);  //Добавления дел
            
            LIST.push({ 
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem('TODO', JSON.stringify(LIST));
            id++;
        }
        input.value = ""; //Очистка строки
});


//Функции для кнопок

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".content-item__text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}


function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//Делаем кнопки функциональными

list.addEventListener('click', function(event) {
    let element = event.target;
    let elementJob = element.attributes.job.value;

    if (elementJob == "complete") {
        completeToDo(element);

    } else if (elementJob == "delete") {
        removeToDo(element);
    }
    localStorage.setItem('TODO', JSON.stringify(LIST));
});

















