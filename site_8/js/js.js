let btns = document.querySelectorAll('.btn'), //Добавляем кнопки
    screen = document.querySelector('.screen'), //Добавляем экран
    equelBtn = document.querySelector('.btn-equel'), //Кнопка равенства
    backBtn = document.querySelector('.btn-back'), //Кнопка удаление символа
    clearBtn = document.querySelector('.btn-clear'); //Очистка


    for (let i = 0; i < btns.length; i++) {  //Перебираем все кнопки в массиве
        btns[i].addEventListener('click', function(){  //При нажатие на кнопку она добавляется на экран screen
            let number = btns[i].getAttribute('data-num'); //Считывает данные кнопки из data-num в разметке html
            screen.value += number; //Выводит на экран
        });
    };

    equelBtn.addEventListener('click', function(){
        if (screen.value == 0) { //Защита от пустой строки
            alert('Нет чисел');
        } else {
        let value = eval(screen.value); //Проводится арифметические действия
        };
    });


    clearBtn.addEventListener('click', function(){ //Очистка поля
        screen.value = '';
    });


    backBtn.addEventListener('click', function(){ //Удаление символа
        let exp = screen.value; //Считываем поле screen
        screen.value = exp.substring(0,  exp.length-1);  //От того, что считали отнимается последний символ и снова перезаписывается в поле
    })

