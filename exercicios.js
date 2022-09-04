
function obterMedia (){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var d = parseInt(document.getElementById("d").value);
    var e = parseInt(document.getElementById("e").value);

    var media = (a + b + c + d + e) / 5;

    document.getElementById("Resultado").innerHTML = "Resultado:" + media;

    console.log(a + b + c + d + e)
}