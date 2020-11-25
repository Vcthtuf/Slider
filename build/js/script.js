
// hamburger

window.addEventListener('DOMContentLoaded', () => {

    let slideIndex = 1,  // номер текущего слайда
        slides = document.querySelectorAll('.slider__item'),  // слайды
        prev = document.querySelector('.button__prev'),  // кнопка назад
        next = document.querySelector('.button__next'),  // кнопка вперед
        dotsWrap = document.querySelector('.slider__dots'),  // контейнер для точек
        dots = document.querySelectorAll('.dot'); // точки

    showSlides(slideIndex);

    // функция показа одного из слайдов

    function showSlides(n) {

        if (n > slides.length) {  // если закончились слайды, то переходим к первому
            slideIndex = 1;
        }

        if (n < 1) {                   // если меньше первого слайда, то переходим к последнему
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");  // убираем показ всех слайдов
        dots.forEach((item) => item.classList.remove('dot_active')); // убираем активность всех точек

        slides[slideIndex - 1].style.display = 'block'; // показываем один слайд
        dots[slideIndex - 1].classList.add('dot_active'); // делаем активной одну точку

    }

    // функция перебора слайдов

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // функция показа текущего слайда

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {  // обработчик кнопки "Назад"
        plusSlides(-1);
    });

    next.addEventListener('click', function () { // обработчик кнопки "Вперед"
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {  // обработчик нажатия на точки 
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

})