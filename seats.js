/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");

var cats = [
    [false, true, false, true, true, true, false, true, false, false],
    [false, true, false, true, true, true, false, false, true, false],
    [false, true, true, false, true, true, false, false, true, false],
    [true, true, false, false, false, true, true, true, false, false]
];


function catCodeLess(catNum, description, border){
    document.getElementById("c" + catNum).alt = description;
    document.getElementById("c" + catNum).src = "image/" + description + ".png";
    document.getElementById("c" + catNum).style.border = border;
}


function findCat() {
    for( var i=0; i < cats.length; i++) {
        for( var j=0; j < cats[i].length; j++) {
            if (cats[i][j]){
                catCodeLess(i * cats[i].length + j, "fun_cat", "2px solid blue");
            }
            else{
                catCodeLess(i * cats[i].length + j, "sad_cat", "2px solid blue");
            }
        }
    }
}


var selectCat = -1;

function takeCat() {
    // Если коты выбраны - сбросим значение.
    if(selectCat >= 0) {
        selectCat = -1;
        findCat();
    }
    // Поиск веселых котов из всех
    for ( var i= 0, finished = false; i < cats.length && !finished; i++) {
        for ( var j=0; j < cats[i].length; j++) {
            // Проверка веселости 3-х котов подряд в одном ряду
            if (cats[i][j] && cats[i][j + 1] && cats[i][j + 2]) {
                selectCat = i * cats[i].length + j;
                catCodeLess((i * cats[i].length + j), "selected_cat", "2px solid green");
                catCodeLess((i * cats[i].length + (j + 1)), "selected_cat", "2px solid green");
                catCodeLess((i * cats[i].length + (j + 2)), "selected_cat", "2px solid green");
                // Предлагается клиенту выбор, взять ли 3-х котов в ряду

                var accept = confirm("Коты " + (j+1) + "-" + (j+3) + " в ряду " + (i+1) +" - счастливы. Взять этих котов?");
                // Если пользователь согласился, кот бронируется и цикл останавливается
                if (accept) {
                    finished = true;
                    break;
                }
                // Если пользователь отказался, меняем вид кота и продолжаем поиск
                else {
                    selectCat = -1;
                    catCodeLess((i * cats[i].length + j), "fun_cat", "2px solid red");
                    catCodeLess((i * cats[i].length + (j + 1)), "fun_cat", "2px solid red");
                    catCodeLess((i * cats[i].length + (j + 2)), "fun_cat", "2px solid red");
                }
            }
        }
    }
}


// Тут функция будет выполнять то же действие что и takeCat только через цикл while

var selectCatSecond = -1;

function takeCatSecond() {
    // Если коты выбраны - сбросим значение.
    if(selectCatSecond >= 0) {
        selectCatSecond = -1;
        findCat();
    }
    // Поиск веселых котов из всех
    var i= 0, finished = false;
    while (i < cats.length && !finished){

        var j=0;
        while (j < cats[i].length){

            // Проверка веселости 3-х котов подряд в одном ряду
            if (cats[i][j] && cats[i][j + 1] && cats[i][j + 2]) {
                selectCatSecond = i + j;
                catCodeLess((i * cats[i].length  + j), "selected_cat", "2px solid green");
                catCodeLess((i * cats[i].length + (j + 1)), "selected_cat", "2px solid green");
                catCodeLess((i * cats[i].length + (j + 2)), "selected_cat", "2px solid green");
                // Предлагается клиенту выбор, взять ли 3-х котов в ряду

                var accept = confirm("Коты " + (j+1) + "-" + (j+3)
                    + " в ряду " + (i + 1) +" - счастливы. Взять этих котов?");
                // Если пользователь согласился, кот бронируется и цикл останавливается
                if (accept) {
                    finished = true;
                    break;
                }
                // Если пользователь отказался, меняем вид кота и продолжаем поиск
                else {
                    selectCatSecond = -1;
                    catCodeLess((i * cats[i].length + j), "fun_cat", "2px solid red");
                    catCodeLess((i * cats[i].length + (j + 1)), "fun_cat", "2px solid red");
                    catCodeLess((i * cats[i].length + (j + 2)), "sad_cat", "2px solid red");
                }
            }
            j++;
        }
        i++;
    }
}


function getCatStatus(catNum) {
    if(selectCat != -1 &&
        (catNum == selectCat || catNum == (selectCat + 1) || catNum == (selectCat + 2))) {
        return "Ваш!";
    }
    else if(cats[Math.floor(catNum / cats[0].length)][catNum % cats[0].length]) {
        return "Веселый!"
    }
    else
        return "Грустит((("
}


function showCatStatus(catNum) {
        alert("Этот кот - " + getCatStatus(catNum));
}