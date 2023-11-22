window.onload = function () {
    initPascal(10);
};

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        var újdiv = document.createElement("div");
        újdiv.classList.add("sor");
        document.getElementById("pascal").appendChild(újdiv);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var újdiv2 = document.createElement("div");
            újdiv2.classList.add("elem");
            újdiv2.innerHTML = faktoriális(sor)/(faktoriális(oszlop)*faktoriális(sor-oszlop))
            újdiv.appendChild(újdiv2);

        }
    }
};

