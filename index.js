function myFunction() {
    var x = parseInt(document.getElementById("xNum").value);

    var n = parseInt(document.getElementById("nNum").value);

    equals = Math.pow(x, n)
    result = "Result of x = " + x + " in power of n = " + n + " equals " + equals;

    document.getElementById("h2").innerHTML = result;

    alert(result);



}