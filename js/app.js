
//todo "Calculadora la cual podemos sumar, restar, multiplicar y dividir"
//! Función para sumar dos números
function sumar(a, b) {
    return a + b;
  }
  
  //! Función para restar dos números
  function restar(a, b) {
    return a - b;
  }
  
  //! Función para multiplicar dos números
  function multiplicar(a, b) {
    return a * b;
  }
  
  //! Función para dividir dos números
  function dividir(a, b) {
    return a / b;
  }


  //! Obtener la operación del usuario
  let operacion = prompt("¿Qué operación deseas realizar? (sumar, restar, dividir, multiplicar)");
  
  //! Obtener los números del usuario
  let num1 = parseFloat(prompt("Ingresa el primer número"));
  let num2 = parseFloat(prompt("Ingresa el segundo número"));
  
  //! Realizar la operación correspondiente

  if(operacion === "sumar"){
    let resultado = sumar (num1, num2);
    alert(`El resultado de la suma es: ${resultado}`);
  }else if (operacion === "restar"){
    let resultado = restar (num1, num2);
    alert(`El resultado de la resta es: ${resultado}`);
  }else if (operacion === "multiplicar"){
    let reusltado = multiplicar (num1, num2);
    alert (`El resultado de la multiplicacion es: ${resultado}`);
  }else if (operacion === "dividir"){
    let resultado = dividir (num1, num2);
    alert (`El resultado de la division es: ${resultado}`);
  }else{
    alert("Operacion no valida, ponelo bien dale");
  }