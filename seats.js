/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");

window.onload = function(){
    //Запускает по клику по кнопке с id="takeCat" поиск 3-х котов подряд
    document.getElementById("takeCat").onclick = takeCat();

    //Запускает по клику по коту с сответствующим id функцию showCatStatus с соответствующим аргументом
    document.getElementById("0").onclick = showCatStatus(0);
    document.getElementById("1").onclick = showCatStatus(1);
    document.getElementById("2").onclick = showCatStatus(2);
    document.getElementById("3").onclick = showCatStatus(3);
    document.getElementById("4").onclick = showCatStatus(4);
    document.getElementById("5").onclick = showCatStatus(5);
    document.getElementById("6").onclick = showCatStatus(6);
    document.getElementById("7").onclick = showCatStatus(7);
    document.getElementById("8").onclick = showCatStatus(8);
    document.getElementById("9").onclick = showCatStatus(9);
    document.getElementById("10").onclick = showCatStatus(10);
    document.getElementById("11").onclick = showCatStatus(11);
    document.getElementById("12").onclick = showCatStatus(12);
    document.getElementById("13").onclick = showCatStatus(13);
    document.getElementById("14").onclick = showCatStatus(14);
    document.getElementById("15").onclick = showCatStatus(15);
    document.getElementById("16").onclick = showCatStatus(16);
    document.getElementById("17").onclick = showCatStatus(17);
    document.getElementById("18").onclick = showCatStatus(18);
    document.getElementById("19").onclick = showCatStatus(19);
    document.getElementById("20").onclick = showCatStatus(20);
    document.getElementById("21").onclick = showCatStatus(21);
    document.getElementById("22").onclick = showCatStatus(22);
    document.getElementById("23").onclick = showCatStatus(23);
    document.getElementById("24").onclick = showCatStatus(24);
    document.getElementById("25").onclick = showCatStatus(25);
    document.getElementById("26").onclick = showCatStatus(26);
    document.getElementById("27").onclick = showCatStatus(27);
    document.getElementById("28").onclick = showCatStatus(28);
    document.getElementById("29").onclick = showCatStatus(29);
    document.getElementById("30").onclick = showCatStatus(30);
    document.getElementById("31").onclick = showCatStatus(31);
    document.getElementById("32").onclick = showCatStatus(32);
    document.getElementById("33").onclick = showCatStatus(33);
    document.getElementById("34").onclick = showCatStatus(34);
    document.getElementById("35").onclick = showCatStatus(35);
    document.getElementById("36").onclick = showCatStatus(36);
    document.getElementById("37").onclick = showCatStatus(37);
    document.getElementById("38").onclick = showCatStatus(38);
    document.getElementById("39").onclick = showCatStatus(39);

    //Запускает при загрузке распознавание статуса кота
    findCat();
};
/* Или window.onload = findCat;
 */

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