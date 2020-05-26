//Плавный переход между якорями
function handleButtonClick(className) {
    document.querySelector("." + className).scrollIntoView({ block: "start", behavior: "smooth" });
}

document.querySelectorAll('.blk-1-href').forEach(elem => { elem.addEventListener('click', () => { handleButtonClick('block-1') }) });
document.querySelectorAll('.blk-3-href').forEach(elem => { elem.addEventListener('click', () => { handleButtonClick('block-3') }) });
document.querySelectorAll('.blk-5-href').forEach(elem => { elem.addEventListener('click', () => { handleButtonClick('block-5') }) });
document.querySelectorAll('.footer-href').forEach(elem => { elem.addEventListener('click', () => { handleButtonClick('page-footer') }) });

//Инициализация select Materialize
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    let options = {};
    var instances = M.FormSelect.init(elems, options);
});


//При выборе автомобиля появляется нужная карточка
document.querySelector('#select-auto').onchange = function () {
    document.querySelectorAll('.card-auto').forEach(elem => {
        elem.classList.add('hide');
    })
    document.getElementById(`card-${this.value}`).classList.remove('hide');
}

//Адаптивное меню
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});


//Отправка данных из формы
document.querySelector("#submit-btn").onclick = () => {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let text = document.querySelector("#text").value;
    document.querySelector("#name").value = '';
    document.querySelector("#phone").value = '';
    document.querySelector("#text").value = '';
    console.log(name, phone, text);
    M.toast({ html: 'Спасибо за заявку! Наш менеджер перезвонит вам в ближайшее время' });
    document.querySelector('#submit-btn').classList.add('disabled');
}

document.querySelectorAll('.input-field input').forEach(elem => {
    elem.addEventListener('input', checkFormData);
})

function checkFormData() {
    console.log(document.querySelector("#name").value);
    console.log(document.querySelector("#phone").value.length);

    if (document.querySelector("#name").value != "" && document.querySelector("#phone").value.length === 13) {
        document.querySelector('#submit-btn').classList.remove('disabled');
    }
}