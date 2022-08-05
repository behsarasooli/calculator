function ppp() {
    var a = parseInt(document.getElementById("p1").value);
    var b = parseInt(document.getElementById("p2").value);


    var v = document.getElementById("a");
    var m = v.options[v.selectedIndex].value;
    var ans;
    if (m == "+") {
        ans = a + b;
    } else if (m == "-") {
        ans = a - b;
    }else if (m == "×") {
        ans = a * b;
    }else if (m == "÷") {
        ans = a / b;
    }else if (m == "^") {
        ans = a ** b;
    }
    document.getElementById("j").innerHTML = ans;
}