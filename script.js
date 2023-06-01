function compararNumeros() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    if (num1 > num2) {
      document.getElementById("resultado1").innerHTML = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
      document.getElementById("resultado1").innerHTML = num2 + " es mayor que " + num1;
    } else {
      document.getElementById("resultado1").innerHTML = "Los dos números son iguales.";
    }
  }
  
  function verificarVisibilidad() {
    var num = parseInt(document.getElementById("num").value);
    
    if (num > 0) {
      document.getElementById("resultado2").innerHTML = num + " es visible.";
    } else {
      document.getElementById("resultado2").innerHTML = num + " no es visible.";
    }
  }
  