document.getElementById("butaoDoretangulo").addEventListener("click", retangulo);

function retangulo(){

    var area;
    var perimetro;

    base = getElementById("base-retangulo");
    altura = getElementById("altura-retangulo");

    area = (base*altura);
    perimetro = (base+base+altura+altura);

    postMessage('A area é: ', area, 'O perimetro é: ', perimetro);

}

