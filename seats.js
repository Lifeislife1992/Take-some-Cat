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
        alert("Этот кот " + getCatStatus(catNum));
}

window.onload = function(){

    //Запускает по клику по кнопке с id="takeCat" поиск 3-х котов подряд
    document.getElementById("takeCat").onclick = takeCat;
    document.getElementById("takeCatSecond").onclick = takeCatSecond

    //Запускает по клику по коту с сответствующим id функцию showCatStatus с соответствующим аргументом
    document.getElementById("c0").onclick = function() {showCatStatus(0);};
    document.getElementById("c1").onclick = function() {showCatStatus(1);};
    document.getElementById("c2").onclick = function() {showCatStatus(2);};
    document.getElementById("c3").onclick = function() {showCatStatus(3);};
    document.getElementById("c4").onclick = function() {showCatStatus(4);};
    document.getElementById("c5").onclick = function() {showCatStatus(5);};
    document.getElementById("c6").onclick = function() {showCatStatus(6);};
    document.getElementById("c7").onclick = function() {showCatStatus(7);};
    document.getElementById("c8").onclick = function() {showCatStatus(8);};
    document.getElementById("c9").onclick = function() {showCatStatus(9);};
    document.getElementById("c10").onclick = function() {showCatStatus(10);};
    document.getElementById("c11").onclick = function() {showCatStatus(11);};
    document.getElementById("c12").onclick = function() {showCatStatus(12);};
    document.getElementById("c13").onclick = function() {showCatStatus(13);};
    document.getElementById("c14").onclick = function() {showCatStatus(14);};
    document.getElementById("c15").onclick = function() {showCatStatus(15);};
    document.getElementById("c16").onclick = function() {showCatStatus(16);};
    document.getElementById("c17").onclick = function() {showCatStatus(17);};
    document.getElementById("c18").onclick = function() {showCatStatus(18);};
    document.getElementById("c19").onclick = function() {showCatStatus(19);};
    document.getElementById("c20").onclick = function() {showCatStatus(20);};
    document.getElementById("c21").onclick = function() {showCatStatus(21);};
    document.getElementById("c22").onclick = function() {showCatStatus(22);};
    document.getElementById("c23").onclick = function() {showCatStatus(23);};
    document.getElementById("c24").onclick = function() {showCatStatus(24);};
    document.getElementById("c25").onclick = function() {showCatStatus(25);};
    document.getElementById("c26").onclick = function() {showCatStatus(26);};
    document.getElementById("c27").onclick = function() {showCatStatus(27);};
    document.getElementById("c28").onclick = function() {showCatStatus(28);};
    document.getElementById("c29").onclick = function() {showCatStatus(29);};
    document.getElementById("c30").onclick = function() {showCatStatus(30);};
    document.getElementById("c31").onclick = function() {showCatStatus(31);};
    document.getElementById("c32").onclick = function() {showCatStatus(32);};
    document.getElementById("c33").onclick = function() {showCatStatus(33);};
    document.getElementById("c34").onclick = function() {showCatStatus(34);};
    document.getElementById("c35").onclick = function() {showCatStatus(35);};
    document.getElementById("c36").onclick = function() {showCatStatus(36);};
    document.getElementById("c37").onclick = function() {showCatStatus(37);};
    document.getElementById("c38").onclick = function() {showCatStatus(38);};
    document.getElementById("c39").onclick = function() {showCatStatus(39);};

    //Запускает при загрузке распознавание статуса кота
    findCat();
};