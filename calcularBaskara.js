function calcularBhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById("resultado").textContent = "A equação não possui raízes reais.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        document.getElementById("resultado").textContent = "A equação possui uma raiz real: x = " + x;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").textContent = "A equação possui duas raízes reais: x1 = " + x1 + " e x2 = " + x2;
    }
   }