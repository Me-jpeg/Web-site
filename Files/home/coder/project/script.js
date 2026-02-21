/* Функция upDate вызывается при наведении мыши.
   Она принимает параметр previewPic — это ссылка на саму картинку (this).
*/
function upDate(previewPic) {
    // 1. Проверка срабатывания события в консоли
    console.log("Событие наведения сработало успешно!");

    // 2. Логирование данных о картинке
    console.log("Описание (alt): " + previewPic.alt);
    console.log("Путь (src): " + previewPic.src);

    // 3. Выбираем элемент с id "image"
    let displayDiv = document.getElementById('image');

    // 4. Меняем текст в блоке на текст из атрибута alt картинки
    displayDiv.innerHTML = previewPic.alt;

    // 5. Меняем фоновое изображение блока на src картинки
    // Важно использовать правильный синтаксис кавычек для CSS url()
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Функция unDo вызывается, когда мышь уходит с картинки.
   Она возвращает всё к исходному виду.
*/
function unDo() {
    // 1. Выбираем элемент с id "image"
    let displayDiv = document.getElementById('image');

    // 2. Сбрасываем фон до пустого (background-image: url(''))
    displayDiv.style.backgroundImage = "url('')";

    // 3. Возвращаем исходный текст
    displayDiv.innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";

    console.log("Состояние галереи сброшено до исходного.");
}