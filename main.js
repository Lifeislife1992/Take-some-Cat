/**
 * Created by Виктор on 04.04.2015.
 */
function global(){
    var count = prompt("Введите число больше 0", "10");
    if (count > 0) {
        for (var x = count; x > 0; x--)
            alert("Начнем через: " + x);
        alert("НАЧИНАЕМ!");
    }
    else {
        alert("Число было меньше 0! Не наёбуй!");
    }
}
