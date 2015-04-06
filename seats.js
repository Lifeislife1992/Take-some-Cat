/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");

var cats = [false, true, false, true, true, true, false, true, false, false, false, true];
function findCat() {
    for ( var i=0; i < cats.length; i++) {
        if (cats[i]){
            document.getElementById("c" + i).src = "image/1.png";
            document.getElementById("c" + i).alt = "fun_cat";
            document.getElementById("c" + i).style.border = "2px solid blue";
            alert("Кот №" + i + " радуется!");
        }
        else{
            document.getElementById("c" + i).src = "image/3.png";
            document.getElementById("c" + i).alt = "sad_cat";
            document.getElementById("c" + i).style.border = "2px solid blue";
            alert("Кот №" + i + " грустит...");
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
        // Проверка вселости кота
        if (cats[i]) {
            selectCat = i;
            document.getElementById("c" + i).src = "image/2.png";
            document.getElementById("c" + i).alt = "selected_cat";
            document.getElementById("c" + i).style.border = "2px solid green";
            // Предлагается клинту выбор, взять ли кота
            var accept = confirm("Кот " + (i + 1) + " - счастливый. Взять этого кота?");
            // Если пользователь согласился, кресло бронируется и цикл останавливается
            if (accept){
                break;
            }
            // Если пользователь отказался, меняем вид кота и продолжаем поиск
            else{
                selectCat = -1;
                document.getElementById("c" + i).src = "image/1.png";
                document.getElementById("c" + i).alt = "fun_cat";
                document.getElementById("c" + i).style.border = "2px solid red";
            }
        }
    }
}
