window.addEventListener ('DOMContentLoaded', function() {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    
    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i=0; i < tab.length; i++){
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    

    //Modal

    let moreFirst = document.getElementsByClassName('description-btn')[0],
        moreSeconds = document.getElementsByClassName('description-btn')[1],
        moreThird = document.getElementsByClassName('description-btn')[2],
        moreFourth = document.getElementsByClassName('description-btn')[3],
        contact = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    moreFirst.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';
    });

    moreSeconds.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';
    });
    moreThird.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';
    });
    moreFourth.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';
    });


    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow ='';
    });

    contact.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';
    });

    //form

    let message = new Object();
        message.loading = 'Загрузка...';
        message.success = 'Спасибо! Скоро мы с вами свяжемся'; 
        message.failure = 'Что - то пошло не так...';

    let form = document.getElementsByClassName('main-form')[0],
        input = document.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        form.addEventListener('submit', function (event){
            event.preventDefault();
            form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader("Contetn-type", "application/x-www-form-urlencoded");

    let formData = new FormData(form);

    request.send(formData);

    request.onreadystatechange = function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4)
        if (request.status == 200 &&  request.status < 300) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
        }
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    };

    contactForm.addEventListener('submit', function (event){
        event.preventDefault();
        contactForm.appendChild(statusMessage);
        contactForm.style.cssText = `color: white`;
        let request = new XMLHttpRequest();

    request.open('POST', 'server.php');
    request.setRequestHeader("Contetn-type", "application/x-www-form-urlencoded");

    let newFormData = new FormData(contactForm);

    request.send(newFormData);

    request.onreadystatechange = function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4)
        if (request.status == 200 &&  request.status < 300) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
        }
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    };

    //slider

    let slideIndex = 1, //слайд по умолчанию
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

        showSlides(slideIndex);

        function showSlides(n) { //подставляется слайд по умолчанию
            if (n > slides.length) {
                slideIndex = 1; //возвращаемся к первому слайду
            };
            if (n < 1) {
                slideIndex = slides.length; //получаем последний слайд
            };

            for (let i = 0; i < slides.length; i++){  //скрываем все слайды
                slides[i].style.display = 'none';
            };

            for (let i = 0; i < dots.length; i++) { //скрываем все точки
                dots[i].classList.remove('dot-active');
            };
            slides[slideIndex - 1].style.display = 'block'; //устанавливаем первый слайд
            dots[slideIndex - 1].classList.add('dot-active'); //устанавливаем первую точку
        };

        function plusSlides (n) {
            showSlides(slideIndex += n); //Для перелистывания слайдов, если n=1 то перелистывается вперед, если n=-1 перелистывается назад
        };

        function currentSlide (n) {
            showSlides(slideIndex = n);
        };

        prev.addEventListener ('click', function() {
            plusSlides(-1);
        });
        next.addEventListener ('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event){
            for (let i=0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });


    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function (){
            personsSum = +this.value;
            total  = (daysSum + personsSum)*4000;
            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            };
        });

        restDays.addEventListener('change', function (){
            daysSum = +this.value;
            total  = (daysSum + personsSum)*4000;
            if (persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            };
        });

        place.addEventListener('change', function (){
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            };
        });
});