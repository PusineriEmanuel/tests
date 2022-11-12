const { Console } = require("console");
const { reverse } = require("dns");

const array = [1, 2, 3, 4, 5];
const new_array = array;

array.push(6);

console.log(array);
array;

array.pop();
array;

new_array.push(6);
new_array;
array;

const array2 = [...array];

console.log(array2);
array2;

array2.push("ejemplo");
console.log(array2);
array2;

array.pop();
array.pop();
console.log(array);
console.log(new_array);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(obj.c);
obj.d = 4;
console.log(obj);

const obj2 = { ...obj };

console.log(obj2);
obj2.e = 5;
console.log(obj2);
console.log(obj);

const colores = ["red", "blue", "green"];
colores.push("black");

colores.forEach(function (e, i) {
  console.log(`<li id="${i}"> ${e} </li>`);
});

const objeto = {
  nombre: "ema",
  apellido: "pusineri",
  edad: 22,
  redes: {
    fc: "Emanuel Agustin Pusineri",
    email: "emanuelpusineri@outlook.com",
  },
  hobbys: ["self taught", "gaming", "draw"],
};

console.log(objeto["nombre"]);
console.log(objeto["apellido"]);
console.log(objeto.edad);
console.log(objeto.redes.email);
console.log(objeto["redes"]["email"]);
console.log(objeto.hobbys[2]);
console.log(objeto["hobbys"][1]);

function test() {
  const arrayDeObjeto = [];

  const objetoConObjeto = {
    Luna: {
      edad: 25,
    },
    Sebas: {
      edad: 7,
    },
    Marce: {
      edad: 34,
    },
    Nicky: {
      edad: 15,
    },
  };

  for (const keys in objetoConObjeto) {
    if (objetoConObjeto[keys]["edad"] < 18) {
      arrayDeObjeto.push(objetoConObjeto[keys]["edad"]);
    }
  }
  return arrayDeObjeto;
}

console.log(test());

const objetoConObjeto = {
  Luna: {
    edad: 25,
  },
  Sebas: {
    edad: 7,
  },
  Marce: {
    edad: 34,
  },
  Nicky: {
    edad: 15,
  },
};

for (const x in objetoConObjeto) {
  console.log(`${x}:${objetoConObjeto[x]}`); //${x} = key // objetoConObjeto[x] = value;
}

function cuentas(a, b) {
  let total = 0;
  total = a + b;
  return total;
}

cuentas(10, 15);

let v = 3;
console.log(v++);
console.log(++v);

console.log(!!true);
//operador ternario
let edad = 18;
let eresMayor = edad >= 18 ? "eres mayor de edad" : "eres menor de edad";
console.log(eresMayor);

let dia = 1;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
    console.log("El dia no existe");
    break;
}

let contador = 0;
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10);

const numeross = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
for (i = 0; i < numeross.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeross[i]);
}

const coloress = [
  "blue",
  "green",
  "red",
  "orange",
  "purple",
  "white",
  "grey",
  "black",
  "cyan",
  "brown",
];
for (i = 0; i < numeross.length; i++) {
  if (numeross[i] === "orange") {
    continue;
  }
  console.log(coloress[i]);
}

//comprobacion y/o declaracion de errores
let numeroError = "y";
try {
  if (isNaN(numeroError)) {
    throw new Error("el caracter introducido no es un numero");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`se a producido el siguiente ${error}`);
}

let num = 100111;
const reverso = num.toString().split("").reverse().join("");
let suma = 0;

for (i = 0; i < reverso.length; i++) {
  suma += reverso[i] * 2 ** i;
}
console.log(suma);

let testNum = 10;
do {
  testNum -= 1;
  console.log(testNum);
} while (testNum !== 0);

//recursion
const cuentaAtras = function (numero) {
  //base case
  if (numero === 0) {
    return;
  }
  console.log(numero);
  return cuentaAtras(numero - 1);
};
cuentaAtras(5);

//ejercicio Par Impar
function testParOImpar(num) {
  if (num % 2 !== 0) {
    console.log(`${num} es un numero impar!`);
  } else {
    console.log(`${num} es un numero par!`);
  }
}

testParOImpar(16);

//ejercicio invertir
let freeCodeCamp = "freeCodeCamp";
let reverseFreeCodeCamp = freeCodeCamp.split("").reverse().join("");
reverseFreeCodeCamp;

//socope
var global = "hola";

function a() {
  var global = "chau";
}

function b() {
  global = "ahoraSi";
}

a();
b();

global;

//referencia no aplicable a primitivos
a3 = 5;
b3 = 10;
console.log(a3);
a3 = b3;
console.log(a3);

//referencia aplicable a no primitivos(buscar nombre)
const arrayReferencia = [1, 2, 3, 4, 5];
const arrayReferencia2 = arrayReferencia;

arrayReferencia2.push("hola");
arrayReferencia2;
arrayReferencia;

//tarea DIA 2

var x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    b = a; //8
    console.log(b); //8
    b = c; //f
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1

console.log(bar); //undefined
console.log(baz); //not defined
foo(); //'Hola!'
function foo() {
  console.log("Hola!");
}
var bar = 1;
var baz = 2;

var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); //"Franco" ya qe el if se cumple

var instructor = "Tony";
console.log(instructor); //"Tony"
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //"Franco"
  }
})();
console.log(instructor); //"Tony"

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // "The Flash"
  console.log(pm); // "Reverse Flash"
}
console.log(instructor); // "The Flash"
console.log(pm); // "Franco"

let qwer = 6 / "3"; // 2
let qwer1 = "2" * "3"; // 6
let qwer2 = 4 + 5 + "px"; // "9px"
let qwer3 = "$" + 4 + 5; // "$9
let qwer4 = "4" - 2; // 2
let qwer5 = "4px" - 2; //NaN
let qwer6 = 7 / 0; //NaN                        da infinity / REVISAR / concepto de limite
let qwer7 = {}[0]; //undefined undefined
let qwer8 = parseInt("09"); // 9
let qwer9 = 5 && 2; // 2 (devuelve el segundo valor)
let qwerA = 2 && 5; // 5 (devuelve el segundo valor)
let qwerB = 5 || 0; // 5 (devuelve el true)
let qwerC = 0 || 2; // 2 (devuelve el true)
let qwerCc = 1 || 5; // 1 (devuelve el primer true)
let qwerD = [3] + [3] - [10]; // 23 (en suma concatena y en resta resta)
let qwerE = 3 > 2 > 1; // 3>2 true === 1, 2>1 true === 1, entonces 1>1 === false                  da false ??????
let qwerF = [] == ![]; // true (con === es false)

console.log(qwerE);

function test() {
  console.log(a); //undefined
  console.log(foo()); //2

  var a = 1;
  function foo() {
    return 2;
  }
}

test(); //undefined 2

var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}
console.log(snack);
getFood(false); //"undefined (ya que toma el snack vacio del if)"

var fullname = "Juan Perez";
var obj5 = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname; //"Aurelio de Rosa"
    },
  },
};

console.log(obj5.prop.getFullname()); // "Aurelio De Rosa"

var test = obj5.prop.getFullname;

console.log(test()); // "Juan Perez"

function printing() {
  console.log(1); //1
  setTimeout(function () {
    console.log(2);
  }, 1000); //3
  setTimeout(function () {
    console.log(3);
  }, 0); //2
  console.log(4); //4
}

printing();

function alCuadrado(num) {
  num = num * num;
  return num;
}
console.log(alCuadrado(6));
//mircha ejercicio objetos literales
let name = "emanuel";
let age = 22;
const dog = {
  name,
  age,
  roar() {
    console.log("guauu guauu");
  },
};

dog.raza = "callejero";

console.log(dog);
dog.roar();

//const colores = ["red", "blue", "green"];
//colores.push("black");

//colores.forEach(function (e, i) {
// console.log(`<li id="${i}"> ${e} </li>`);
//});
//parametro rest
function sumaA(a, b, c, ...d) {
  let resultado = a + b + c;

  d.forEach(function (v) {
    resultado += v;
    console.log(v);
  });

  return resultado;
}
console.log(sumaA(5, 21, 25, 7, 15));

//spread operator
const array1 = [1, 2, 3, 4, 5];
const array3 = [6, 7, 8, 9, 0];
const intentoDeArraySpread = [array1, array3];
const arraySpread = [...array1, ...array3];
console.log(intentoDeArraySpread);
console.log(arraySpread);

//closure
function saludar(saludo) {
  return function (nombre) {
    console.log(`${saludo} ${nombre}`);
  };
}

let saludarHola = saludar("Hola");
saludarHola("Toni");

//testeos para entender ejercicio 02 de homework 03
let name5 = "asdasd";
let test5 = 10;
obj5 = {
  name5,
  age: 21,
};
function saludarr(tuNombre) {
  console.log(`hola ${tuNombre}`);
}
saludarr("ema");
console.log(obj5["name5"]);
obj5["agee"] = 5;
obj5.agee = 6; //lo reemplaza, osea, es lo mismo
obj5[test5] = saludarr("ema");
console.log(obj5["age"]);
console.log(obj5);

console.log(obj5.test5);

//function expressions
const soyUnArray = function (n) {
  console.log(`hola ${n}`);
};
soyUnArray("ema");
//arrow functios
const yoTambien = (n) => {
  // si pasa un argumento no son necesarios los (), si son 2 o ninguno, si / si el contenido del function es de una linea, tampoco son necesarias las llaves (al ser de
  //una sola linea hay un return implicito).
  console.log(`hola ${n}`);
};
yoTambien("cami");
//ejemplo de forEach de arriba pero con Arrow function aplicado / las arroy functions dentro de un obj cambian el scope del this a global
colores.forEach((e, i) => {
  console.log(`<li id="${i}"> ${e} </li>`);
});

//setTimeout
function printing() {
  console.log(1); //1
  setTimeout(function () {
    console.log(2);
  }, 1000); //4
  setTimeout(function () {
    console.log(3); //3
  }, 0);
  console.log(4); //2
}

printing();

//prototypes
//funcion constructora
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Metodos
  this.sonar = function () {
    console.log("ruidos");
  };

  this.saludar = function () {
    console.log(`Hola me llamo ${nombre}`);
  };
}

const snoopy = new Animal("snoopy", "macho");
const lola = new Animal("lola", "hembra");

snoopy.sonar();
lola.saludar();

console.log(snoopy);
console.log(lola);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testeoDeFuncion(arg) {
  console.log(`mi argumento es: ${arg}`);
}
testeoDeFuncion("HOLA SOY UN ARGUMENTO");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nameTest = "ema";
let ageTest = 22;
const testeoDeObj = {
  nameTest,
  ageTest,
  testDeFunction(arg) {
    console.log(`mi argumento dentro de la function de este obj es: ${arg}`);
  },
};

console.log(
  testeoDeObj.testDeFunction(
    "HOLA SOY EL ARGUMENTO DENTRO DE UNA FUNCTION CREADA EN UN OBJ"
  )
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const zxc = [];
zxc.unshift(1);
zxc.unshift("hola");
zxc.unshift(5);
zxc.unshift(10);
zxc.pop();
console.log(zxc);

//recursividad con ejerc de factorial
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
// 0, 1, 1, 2, 3, 5
//return 3 *3-1   INICIAL
//return 3 * 2-1  B
//return 2 * 1-1  A
//return 1        CORTE
//AHORA PARA ARRIBA
//return 2 * 1    A
//return 3 * 2    B
//return 6        INICIAL
console.log(factorial(3));

function nFactorial(n) {
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
}
//return 5 * nFactorial(5 - 1);
//return 4 * 4-1 A
//return 3 * 3-1 B
//return 2 * 2-1 C
//return 1       CORTE
//AHORA PARA ARRIBA
//return 2 * 1   C
//return 3 * 2   B
//return 4 * 6   A
//return 5 * 24  INICIAL

console.log(nFactorial(5));
//5 * 4 * 3 * 2 * 1 (como hacer que impima esto?)

//listas enlazadas
function List() {
  this._length = 0;
  this.head = null;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

List.prototype.add = function (data) {
  //
  var node = new Node(data); //aca se crea una instancia Node llamada node con el parametro que se pasa a la function
  current = this.head;
  // Si está vacia
  //console.log(!(!current)) retorna false, osea, es falso de base, con ! es true
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};

const listaResultado = new List();
listaResultado.add("german");
console.log(listaResultado);

function DecimalABinario(num) {
  // tu codigo aca
  let almacenadorDeResto = [];
  let numResto = 0;

  while (num >= 1) {
    numResto = num % 2;
    console.log(num % 2); // aca 2/1 da resto de 1 porque 'no le esta' / cuestion, no hay correlacion entre el resultado de % y el de /
    almacenadorDeResto.push(Math.floor(numResto));
    num = num - num / 2;
    console.log(num); // y aca el 'no le esta' no aplica, se agrega un uno al de la izquierda, se agrega 0, al total y se sigue la cuenta (osea, 5.2 10 y resto 0)
  }
  return almacenadorDeResto.reverse().join("");
}

console.log(DecimalABinario(4));
//4&2 0
//4/2 2

//2&2 0
//2/2 1

//1&2 0
//1/2 0,5
let testingGitHub = 10;
