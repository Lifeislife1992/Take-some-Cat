/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");

var cats = [
    [false, true, false, true, true, true, false, true, false, true, true, true],
    [false, true, false, true, true, true, false, false, true, true, false, false],
    [false, true, true, false, true, true, false, false, true, false, true, true],
    [true, true, false, false, false, true, true, true, false, true, true, true]
];
function catCodeLess(catNum, description, border){
    document.getElementById(catNum).alt = description;
    document.getElementById(catNum).src = "image/" + description + ".png";
    document.getElementById(catNum).style.border = border;
}
function findCat() {
    for( var i=0; i < cats.length; i++) {
        for( var j=0; j < cats[i].length; j++) {
            if (cats[i][j]){
                catCodeLess(("c" + i + j), "fun_cat", "2px solid blue");

                /*Старый код, сжатый функцией catCodeLess
                document.getElementById("c" + i + j).src = "image/fun_cat.png";
                document.getElementById("c" + i + j).alt = "fun_cat";
                document.getElementById("c" + i + j).style.border = "2px solid blue";*/

                alert("Кот в " + (i + 1) + " ряду, под номером " + (j + 1)
                    + " - радуется!");
            }
            else{
                catCodeLess(("c" + i + j), "sad_cat", "2px solid blue");

                /*Старый код, сжатый функцией catCodeLess
                document.getElementById("c" + i + j).src = "image/sad_cat.png";
                document.getElementById("c" + i + j).alt = "sad_cat";
                document.getElementById("c" + i + j).style.border = "2px solid blue";*/

                alert("Кот в " + (i + 1) + " ряду, под номером " + (j + 1)
                    + " - грустит...");
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
                selectCat = i + j;
                catCodeLess(("c" + i + j), "selected_cat", "2px solid green");
                catCodeLess(("c" + i + (j + 1)), "selected_cat", "2px solid green");
                catCodeLess(("c" + i + (j + 2)), "selected_cat", "2px solid green");
                // Предлагается клиенту выбор, взять ли 3-х котов в ряду

                /*Старый код, сжатый функцией catCodeLess
                document.getElementById("c" + i + j).alt = "selected_cat";
                document.getElementById("c" + i + j).style.border = "2px solid green";
                document.getElementById("c" + i + j).src = "image/selected_cat.png";
                document.getElementById("c" + i + (j + 1)).src = "image/selected_cat.png";
                document.getElementById("c" + i + (j + 1)).alt = "selected_cat";
                document.getElementById("c" + i + (j + 1)).style.border = "2px solid green";
                document.getElementById("c" + i + (j + 2)).src = "image/selected_cat.png";
                document.getElementById("c" + i + (j + 2)).alt = "selected_cat";
                document.getElementById("c" + i + (j + 2)).style.border = "2px solid green";*/

                var accept = confirm("Коты " + (j + 1) + "-" + (j + 3)
                    + " в ряду " + (i + 1) +" - счастливы. Взять этих котов?");
                // Если пользователь согласился, кот бронируется и цикл останавливается
                if (accept) {
                    finished = true;
                    break;
                }
                // Если пользователь отказался, меняем вид кота и продолжаем поиск
                else {
                    selectCat = -1;
                    catCodeLess(("c" + i + j), "sad_cat", "2px solid red");
                    catCodeLess(("c" + i + (j + 1)), "sad_cat", "2px solid red");
                    catCodeLess(("c" + i + (j + 2)), "sad_cat", "2px solid red");

                    /*Старый код, сжатый функцией catCodeLess
                    document.getElementById("c" + i + j).src = "image/sad_cat.png";
                    document.getElementById("c" + i + j).alt = "sad_cat";
                    document.getElementById("c" + i + j).style.border = "2px solid red";
                    document.getElementById("c" + i + (j + 1)).src = "image/sad_cat.png";
                    document.getElementById("c" + i + (j + 1)).alt = "sad_cat";
                    document.getElementById("c" + i + (j + 1)).style.border = "2px solid red";
                    document.getElementById("c" + i + (j + 2)).src = "image/sad_cat.png";
                    document.getElementById("c" + i + (j + 2)).alt = "sad_cat";
                    document.getElementById("c" + i + (j + 2)).style.border = "2px solid red";*/
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
                catCodeLess(("c" + i + j), "selected_cat", "2px solid green");
                catCodeLess(("c" + i + (j + 1)), "selected_cat", "2px solid green");
                catCodeLess(("c" + i + (j + 2)), "selected_cat", "2px solid green");
                // Предлагается клиенту выбор, взять ли 3-х котов в ряду

                /*Старый код, сжатый функцией catCodeLess
                 document.getElementById("c" + i + j).alt = "selected_cat";
                 document.getElementById("c" + i + j).style.border = "2px solid green";
                 document.getElementById("c" + i + j).src = "image/selected_cat.png";
                 document.getElementById("c" + i + (j + 1)).src = "image/selected_cat.png";
                 document.getElementById("c" + i + (j + 1)).alt = "selected_cat";
                 document.getElementById("c" + i + (j + 1)).style.border = "2px solid green";
                 document.getElementById("c" + i + (j + 2)).src = "image/selected_cat.png";
                 document.getElementById("c" + i + (j + 2)).alt = "selected_cat";
                 document.getElementById("c" + i + (j + 2)).style.border = "2px solid green";*/

                var accept = confirm("Коты " + (j + 1) + "-" + (j + 3)
                    + " в ряду " + (i + 1) +" - счастливы. Взять этих котов?");
                // Если пользователь согласился, кот бронируется и цикл останавливается
                if (accept) {
                    finished = true;
                    break;
                }
                // Если пользователь отказался, меняем вид кота и продолжаем поиск
                else {
                    selectCatSecond = -1;
                    catCodeLess(("c" + i + j), "sad_cat", "2px solid red");
                    catCodeLess(("c" + i + (j + 1)), "sad_cat", "2px solid red");
                    catCodeLess(("c" + i + (j + 2)), "sad_cat", "2px solid red");

                    /*Старый код, сжатый функцией catCodeLess
                     document.getElementById("c" + i + j).src = "image/sad_cat.png";
                     document.getElementById("c" + i + j).alt = "sad_cat";
                     document.getElementById("c" + i + j).style.border = "2px solid red";
                     document.getElementById("c" + i + (j + 1)).src = "image/sad_cat.png";
                     document.getElementById("c" + i + (j + 1)).alt = "sad_cat";
                     document.getElementById("c" + i + (j + 1)).style.border = "2px solid red";
                     document.getElementById("c" + i + (j + 2)).src = "image/sad_cat.png";
                     document.getElementById("c" + i + (j + 2)).alt = "sad_cat";
                     document.getElementById("c" + i + (j + 2)).style.border = "2px solid red";*/
                }
            }
            j++;
        }
        i++;
    }
}
