/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");

var cats = [false, true, false, true, true, true, false, true, false, true, true, true];
function findCat() {
    for ( var i=0; i < cats.length; i++) {
        if (cats[i]){
            document.getElementById("c" + i).src = "image/1.png";
            document.getElementById("c" + i).alt = "fun_cat";
            document.getElementById("c" + i).style.border = "2px solid blue";
            alert("Кот №" + (i + 1) + " радуется!");
        }
        else{
            document.getElementById("c" + i).src = "image/3.png";
            document.getElementById("c" + i).alt = "sad_cat";
            document.getElementById("c" + i).style.border = "2px solid blue";
            alert("Кот №" + (i + 1) + " грустит...");
        }
    }
}

var selectCat = -1;

function takeCat() {
    // Если кот выбран - сбросим значение.
    if(selectCat >= 0) {
        selectCat = -1;
        findCat();
    }
    // Поиск веселых котов из всех
    for ( var i=0; i < cats.length; i++) {
        // Проверка веселости 3-х котов подряд
        if (cats[i] && cats[i + 1] && cats[i + 2]) {
            selectCat = i;
            document.getElementById("c" + i).alt = "selected_cat";
            document.getElementById("c" + i).style.border = "2px solid green";
            document.getElementById("c" + i).src = "image/2.png";
            document.getElementById("c" + (i + 1)).src = "image/2.png";
            document.getElementById("c" + (i + 1)).alt = "selected_cat";
            document.getElementById("c" + (i + 1)).style.border = "2px solid green";
            document.getElementById("c" + (i + 2)).src = "image/2.png";
            document.getElementById("c" + (i + 2)).alt = "selected_cat";
            document.getElementById("c" + (i + 2)).style.border = "2px solid green";
            // Предлагается клиенту выбор, взять ли 3-х котов
            var accept = confirm("Коты " + (i + 1) + "-" + (i + 3) + " - счастливы. Взять этих котов?");
            // Если пользователь согласился, кот бронируется и цикл останавливается
            if (accept){
                break;
            }
            // Если пользователь отказался, меняем вид кота и продолжаем поиск
            else {
                selectCat = -1;
                document.getElementById("c" + i).src = "image/1.png";
                document.getElementById("c" + i).alt = "fun_cat";
                document.getElementById("c" + i).style.border = "2px solid red";
                document.getElementById("c" + (i + 1)).src = "image/1.png";
                document.getElementById("c" + (i + 1)).alt = "fun_cat";
                document.getElementById("c" + (i + 1)).style.border = "2px solid red";
                document.getElementById("c" + (i + 2)).src = "image/1.png";
                document.getElementById("c" + (i + 2)).alt = "fun_cat";
                document.getElementById("c" + (i + 2)).style.border = "2px solid red";
            }
        }
    }
}

// Тут функция будет выполнять то же действие что и takeCat только через цикл while

var selectCatSecond = -1;

function takeCatSecond() {
    // Если кот выбран - сбросим значение.
    if(selectCatSecond >= 0) {
        selectCatSecond = -1;
        findCat();
    }
    // Поиск веселых котов из всех
    var i=0;
    while (i < cats.length){
        i++;
        // Проверка веселости 3-х котов подряд
        if (cats[i] && cats[i + 1] && cats[i + 2]) {
            selectCat = i;
            document.getElementById("c" + i).alt = "selected_cat";
            document.getElementById("c" + i).style.border = "2px solid green";
            document.getElementById("c" + i).src = "image/2.png";
            document.getElementById("c" + (i + 1)).src = "image/2.png";
            document.getElementById("c" + (i + 1)).alt = "selected_cat";
            document.getElementById("c" + (i + 1)).style.border = "2px solid green";
            document.getElementById("c" + (i + 2)).src = "image/2.png";
            document.getElementById("c" + (i + 2)).alt = "selected_cat";
            document.getElementById("c" + (i + 2)).style.border = "2px solid green";
            // Предлагается клиенту выбор, взять ли 3-х котов
            var accept = confirm("Коты " + (i + 1) + "-" + (i + 3) + " - счастливы. Взять этих котов?");
            // Если пользователь согласился, кот бронируется и цикл останавливается
            if (accept){
                break;
            }
            // Если пользователь отказался, меняем вид кота и продолжаем поиск
            else {
                selectCat = -1;
                document.getElementById("c" + i).src = "image/1.png";
                document.getElementById("c" + i).alt = "fun_cat";
                document.getElementById("c" + i).style.border = "2px solid red";
                document.getElementById("c" + (i + 1)).src = "image/1.png";
                document.getElementById("c" + (i + 1)).alt = "fun_cat";
                document.getElementById("c" + (i + 1)).style.border = "2px solid red";
                document.getElementById("c" + (i + 2)).src = "image/1.png";
                document.getElementById("c" + (i + 2)).alt = "fun_cat";
                document.getElementById("c" + (i + 2)).style.border = "2px solid red";
            }
        }
    }
}
