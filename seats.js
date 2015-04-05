/**
 * Created by Виктор on 04.04.2015.
 */
alert("Найдите 3-х подряд счастливых котов");
function findCat() {
    var cats = [false, true, false, true, true, true, false, true, false, false, false, true];
    for ( var i=0; i < cats.length; i++) {
        if (cats[i]){
            alert("Кот №" + i + " радуется!");
            document.getElementById("c" + i).src = "image/1.png";
            document.getElementById("c" + i).alt = "fun_cat";
            // location.reload();
        }
        else{
            alert("Кот №" + i + " грустит...");
            document.getElementById("c" + i).src = "image/3.png";
            document.getElementById("c" + i).alt = "sad_cat";
            // location.reload();
        }
    }
}
/*
var selectCat = -1;
function takeCat(cats) {
    if(selectCat >= 0) {
        selectCat = -1;
        findCat();
    }
    for ( var i=0; i < cats.length; i++) {
        if (cats[i]) {
            selectCat = i;
            document.getElementById("c" + i).src = "image/2.png";
            document.getElementById("c" + i).alt = "selected_cat";
            var accept = confirm("Кот " + (i + 1) + " - счастливый. Взять этого кота?");
            if (!accept) {
                selectCat = -1;
                document.getElementById("c" + i).src = "image/1.png";
                document.getElementById("c" + i).alt = "fun_cat";
            }
        }
    }
}
*/